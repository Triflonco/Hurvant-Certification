import { createClient } from '@supabase/supabase-js';

const NEW_HURVANT_URL = 'https://wumdgulwvhcgfcbsrjmi.supabase.co';
const NEW_HURVANT_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bWRndWx3dmhjZ2ZjYnNyam1pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTMwMzMzNiwiZXhwIjoyMDk2ODc5MzM2fQ.JhKQjdsaSmZWpduX0xGgRVnzs2gJH5X_xOpeEQ6Bjl4';

async function run() {
  console.log('Connecting to new Hurvant Web database with Service Role key...');
  const supabase = createClient(NEW_HURVANT_URL, NEW_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const tables = ['perfiles_usuarios', 'empresas_clientes', 'operarios', 'certificados'];
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    if (error) {
      console.log(`Table [${table}]: Error - ${error.message} (code: ${error.code})`);
    } else {
      console.log(`Table [${table}]: Success - Table exists! Rows: ${data.length}`);
    }
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
