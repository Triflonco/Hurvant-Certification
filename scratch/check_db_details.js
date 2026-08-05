import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Let's define the connection details
const OLD_HURVANT_URL = 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_ANON_KEY = 'sb_publishable_ceFQrBlri1WGy6z-81zi9Q_PFmox0Ck';

const AUTOBROKER_URL = 'https://mzcxwjslqzvjqmepdoqn.supabase.co';
const AUTOBROKER_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y3h3anNscXp2anFtZXBkb3FuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTEzMDA4OSwiZXhwIjoyMDk2NzA2MDg5fQ.cBKtshsGwGOd_0Wd4W7Om2STAHuMl3lDaJodECNPqsk';

const NEW_HURVANT_URL = 'https://wumdgulwvhcgfcbsrjmi.supabase.co';
const NEW_HURVANT_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bWRndWx3dmhjZ2ZjYnNyam1pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTMwMzMzNiwiZXhwIjoyMDk2ODc5MzM2fQ.JhKQjdsaSmZWpduX0xGgRVnzs2gJH5X_xOpeEQ6Bjl4';

const logFile = path.resolve('scratch/db_check_results.txt');
fs.writeFileSync(logFile, 'DATABASE CHECK LOG\n==================\n\n');

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logFile, msg + '\n');
}

async function testConnection(name, url, key) {
  log(`\nTesting database [${name}] - URL: ${url}`);
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false }
    });

    const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];
    for (const table of tables) {
      log(`Checking table [${table}]...`);
      // Use a controller with timeout to avoid hanging indefinitely if there's a networking issue
      const { data, error, count } = await Promise.race([
        supabase.from(table).select('*', { count: 'exact', head: false }).limit(3),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout after 4s')), 4000))
      ]);
      
      if (error) {
        log(`  Error on table [${table}]: ${error.message} (code: ${error.code})`);
      } else {
        log(`  Success on [${table}]: Found ${data.length} rows (total count: ${count})`);
        if (data.length > 0) {
          log(`  Sample: ${JSON.stringify(data)}`);
        }
      }
    }
  } catch (err) {
    log(`  Exception on [${name}]: ${err.message}`);
  }
}

async function main() {
  log('Starting DB inspection...');
  await testConnection('Old Hurvant (Anon Key)', OLD_HURVANT_URL, OLD_HURVANT_ANON_KEY);
  await testConnection('Autobroker (Service Role)', AUTOBROKER_URL, AUTOBROKER_SR_KEY);
  await testConnection('New Hurvant (Service Role)', NEW_HURVANT_URL, NEW_HURVANT_SR_KEY);
  log('\nFinished DB inspection.');
  process.exit(0);
}

main().catch(err => {
  log(`FATAL ERROR: ${err.message}`);
  process.exit(1);
});
