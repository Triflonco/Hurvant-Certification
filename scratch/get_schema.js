const OLD_HURVANT_URL = 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_ANON_KEY = 'sb_publishable_ceFQrBlri1WGy6z-81zi9Q_PFmox0Ck';

const AUTOBROKER_URL = 'https://mzcxwjslqzvjqmepdoqn.supabase.co';
const AUTOBROKER_SR_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y3h3anNscXp2anFtZXBkb3FuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTEzMDA4OSwiZXhwIjoyMDk2NzA2MDg5fQ.cBKtshsGwGOd_0Wd4W7Om2STAHuMl3lDaJodECNPqsk';

async function fetchSchema(name, url, key) {
  console.log(`\n=== Fetching OpenAPI Schema for ${name} ===`);
  try {
    const res = await fetch(`${url}/rest/v1/?apikey=${key}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!res.ok) {
      console.log(`  Failed with status: ${res.status} ${res.statusText}`);
      return;
    }
    const schema = await res.json();
    if (schema && schema.definitions) {
      console.log(`  Tables found in schema:`);
      Object.keys(schema.definitions).forEach(table => {
        console.log(`    - ${table}`);
      });
    } else {
      console.log('  No definitions found in schema.');
    }
  } catch (e) {
    console.log(`  Error fetching schema: ${e.message}`);
  }
}

async function run() {
  await fetchSchema('Old Hurvant', OLD_HURVANT_URL, OLD_HURVANT_ANON_KEY);
  await fetchSchema('Autobroker', AUTOBROKER_URL, AUTOBROKER_SR_KEY);
  process.exit(0);
}

run();
