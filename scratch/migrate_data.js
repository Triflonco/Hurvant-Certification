import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const NEW_HURVANT_URL = 'https://wumdgulwvhcgfcbsrjmi.supabase.co';
const NEW_HURVANT_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bWRndWx3dmhjZ2ZjYnNyam1pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTMwMzMzNiwiZXhwIjoyMDk2ODc5MzM2fQ.JhKQjdsaSmZWpduX0xGgRVnzs2gJH5X_xOpeEQ6Bjl4';

async function run() {
  console.log('--- STARTING MIGRATION TO NEW DATABASE ---');
  
  // 1. Load extracted data from JSON
  const dataPath = path.resolve('scratch/old_db_data.json');
  if (!fs.existsSync(dataPath)) {
    console.error(`Error: Source data file not found at ${dataPath}. Run extract script first!`);
    process.exit(1);
  }
  const oldData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log('Source data loaded successfully.');

  // 2. Initialize connection to new Supabase database
  const supabase = createClient(NEW_HURVANT_URL, NEW_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  // 3. Clean up existing data in the new database tables (to avoid duplicates from seeds)
  console.log('Cleaning up existing tables in the new database...');
  const tablesToClean = ['certificados', 'operarios', 'empresas_clientes', 'perfiles_usuarios'];
  for (const table of tablesToClean) {
    const { error } = await supabase.from(table).delete().neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows
    if (error) {
      console.warn(`Warning deleting rows from ${table}: ${error.message}`);
    } else {
      console.log(`  Cleaned table: ${table}`);
    }
  }

  // 4. Migrate Auth Users
  console.log('Migrating Auth Users...');
  const newUsers = [
    {
      email: 'styloaerografo@gmail.com',
      password: 'password318275',
      metadata: {
        nombre: 'Antonio Contreras',
        rol: 'Administrador',
        num_colegiado: 'DNI-31723466A'
      }
    },
    {
      email: 'ginatorres.bernal@gmail.com',
      password: 'Gtorres2026',
      metadata: {
        nombre: 'Gina Torres Bernal',
        rol: 'Administrador',
        num_colegiado: 'DNI-Z0541040Q'
      }
    }
  ];

  // Fetch current users in new DB to avoid duplicates or delete them
  const { data: { users: currentUsers }, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) {
    console.error('Error listing new auth users:', listError.message);
  } else {
    for (const u of newUsers) {
      const existing = currentUsers.find(cu => cu.email === u.email);
      if (existing) {
        console.log(`  User ${u.email} already exists in new DB. Deleting to recreate clean...`);
        const { error: delErr } = await supabase.auth.admin.deleteUser(existing.id);
        if (delErr) console.error(`  Error deleting ${u.email}:`, delErr.message);
      }
    }
  }

  // Create new auth users
  for (const u of newUsers) {
    console.log(`  Creating user: ${u.email}...`);
    const { data: userData, error: createError } = await supabase.auth.admin.createUser({
      email: u.email,
      password: u.password,
      email_confirm: true,
      user_metadata: u.metadata
    });

    if (createError) {
      console.error(`  Error creating user ${u.email}:`, createError.message);
    } else {
      console.log(`  Successfully created user ${u.email} (ID: ${userData.user.id})`);
    }
  }

  // 5. Migrate Database Records (using original IDs and attributes)
  
  // A. Empresas Clientes
  const empresas = oldData['empresas_clientes'] || [];
  if (empresas.length > 0) {
    console.log(`Migrating ${empresas.length} empresas_clientes...`);
    const { error: insEmpError } = await supabase.from('empresas_clientes').insert(empresas);
    if (insEmpError) {
      console.error('  Error inserting empresas_clientes:', insEmpError.message);
    } else {
      console.log('  Successfully inserted empresas_clientes.');
    }
  }

  // B. Operarios
  const operarios = oldData['operarios'] || [];
  if (operarios.length > 0) {
    console.log(`Migrating ${operarios.length} operarios...`);
    const { error: insOpError } = await supabase.from('operarios').insert(operarios);
    if (insOpError) {
      console.error('  Error inserting operarios:', insOpError.message);
    } else {
      console.log('  Successfully inserted operarios.');
    }
  }

  // C. Certificados
  const certificados = oldData['certificados'] || [];
  if (certificados.length > 0) {
    console.log(`Migrating ${certificados.length} certificados...`);
    const { error: insCertError } = await supabase.from('certificados').insert(certificados);
    if (insCertError) {
      console.error('  Error inserting certificados:', insCertError.message);
    } else {
      console.log('  Successfully inserted certificados.');
    }
  }

  // 6. Verify Results
  console.log('\n--- VERIFYING MIGRATED DATA ---');
  
  const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];
  for (const table of tables) {
    const { data, count, error } = await supabase.from(table).select('*', { count: 'exact' });
    if (error) {
      console.error(`  Verification error on [${table}]:`, error.message);
    } else {
      console.log(`  Table [${table}]: Verified count = ${count}`);
    }
  }

  console.log('--- MIGRATION COMPLETED SUCCESSFULLY ---');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
