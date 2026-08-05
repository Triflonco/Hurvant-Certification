import { createClient } from '@supabase/supabase-js';

const OLD_HURVANT_URL = 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = 'sb_secret_fJi9A68EDrfDeehc7spC2A_xtU-Ckx-';

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
