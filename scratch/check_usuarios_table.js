import { createClient } from '@supabase/supabase-js';

const OLD_HURVANT_URL = process.env.VITE_SUPABASE_URL || 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_secret_key_here';

async function run() {
  console.log('Connecting to old Hurvant with Service Role key...');
  const supabase = createClient(OLD_HURVANT_URL, OLD_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  console.log('Fetching public.usuarios...');
  const { data, error } = await supabase.from('usuarios').select('*');
  if (error) {
    console.error('Error fetching public.usuarios:', error.message);
  } else {
    console.log(`public.usuarios count: ${data.length}`);
    console.log('Data:', JSON.stringify(data, null, 2));
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
