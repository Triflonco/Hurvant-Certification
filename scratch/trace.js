import { createClient } from '@supabase/supabase-js';

const OLD_HURVANT_URL = 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_ANON_KEY = 'sb_publishable_ceFQrBlri1WGy6z-81zi9Q_PFmox0Ck';

const AUTOBROKER_URL = 'https://mzcxwjslqzvjqmepdoqn.supabase.co';
const AUTOBROKER_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y3h3anNscXp2anFtZXBkb3FuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTEzMDA4OSwiZXhwIjoyMDk2NzA2MDg5fQ.cBKtshsGwGOd_0Wd4W7Om2STAHuMl3lDaJodECNPqsk';

async function checkDb(name, url, key) {
  console.log(`\n=== Checking Database: ${name} ===`);
  const client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];
  for (const table of tables) {
    try {
      const { data, error, count } = await Promise.race([
        client.from(table).select('*', { count: 'exact' }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout after 4s')), 4000))
      ]);
      if (error) {
        console.log(`  Table [${table}]: Error - ${error.message}`);
      } else {
        console.log(`  Table [${table}]: Success - Count: ${count}, Row count: ${data.length}`);
        if (data.length > 0) {
          console.log(`    First row: ${JSON.stringify(data[0])}`);
        }
      }
    } catch (e) {
      console.log(`  Table [${table}]: Exception - ${e.message}`);
    }
  }
}

async function run() {
  await checkDb('Old Hurvant (Anon Key)', OLD_HURVANT_URL, OLD_HURVANT_ANON_KEY);
  await checkDb('Autobroker (Service Role)', AUTOBROKER_URL, AUTOBROKER_SR_KEY);
  console.log('\nDone.');
  process.exit(0);
}

run();
