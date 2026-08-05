import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const OLD_HURVANT_URL = 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = 'sb_secret_fJi9A68EDrfDeehc7spC2A_xtU-Ckx-';

async function run() {
  console.log('Connecting to old Hurvant database using Service Role key...');
  const supabase = createClient(OLD_HURVANT_URL, OLD_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const results = {};
  const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];

  for (const table of tables) {
    console.log(`Fetching table [${table}]...`);
    const { data, error } = await supabase.from(table).select('*');
    if (error) {
      console.error(`Error fetching table [${table}]:`, error.message);
    } else {
      console.log(`Successfully fetched ${data.length} rows from [${table}]`);
      results[table] = data;
    }
  }

  // Also extract auth users that belong to Hurvant
  console.log('Fetching auth users...');
  const { data: { users }, error: authError } = await supabase.auth.admin.listUsers();
  if (authError) {
    console.error('Error fetching auth users:', authError.message);
  } else {
    // Filter users that have Hurvant metadata or are styloaerografo@gmail.com
    const hurvantUsers = users.filter(u => {
      const isStylo = u.email === 'styloaerografo@gmail.com';
      const hasHurvantMeta = u.user_metadata && (u.user_metadata.rol || u.user_metadata.num_colegiado);
      return isStylo || hasHurvantMeta;
    });
    console.log(`Filtered ${hurvantUsers.length} Hurvant auth users out of ${users.length} total`);
    results['auth_users'] = hurvantUsers;
  }

  const outputPath = path.resolve('scratch/old_db_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Saved old database data to: ${outputPath}`);
  process.exit(0);
}

run().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
