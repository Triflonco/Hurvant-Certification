import { createClient } from '@supabase/supabase-js';

const OLD_HURVANT_URL = process.env.VITE_SUPABASE_URL || 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_secret_key_here';

async function run() {
  console.log('Connecting to old Hurvant with Service Role key...');
  const supabase = createClient(OLD_HURVANT_URL, OLD_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];
  for (const table of tables) {
    const { data, error, count } = await supabase
      .from(table)
      .select('*', { count: 'exact' });
    if (error) {
      console.error(`Error on table [${table}]:`, error.message);
    } else {
      console.log(`Table [${table}]: Found ${data.length} rows (total count: ${count})`);
      if (data.length > 0) {
        console.log(`  Sample row:`, JSON.stringify(data[0]));
      }
    }
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
