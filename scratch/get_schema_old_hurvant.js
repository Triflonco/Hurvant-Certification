const OLD_HURVANT_URL = process.env.VITE_SUPABASE_URL || 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_secret_key_here';

async function run() {
  console.log(`\n=== Fetching OpenAPI Schema for Old Hurvant using Service Role ===`);
  try {
    const res = await fetch(`${OLD_HURVANT_URL}/rest/v1/`, {
      headers: {
        'Accept': 'application/json',
        'apikey': OLD_HURVANT_SR_KEY,
        'Authorization': `Bearer ${OLD_HURVANT_SR_KEY}`
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

run();
