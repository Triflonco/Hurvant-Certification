import { createClient } from '@supabase/supabase-js';

const OLD_HURVANT_URL = process.env.VITE_SUPABASE_URL || 'https://agwvbhbisniufhtmjqlj.supabase.co';
const OLD_HURVANT_SR_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_secret_key_here';

async function run() {
  console.log('Connecting to old Hurvant with Service Role key...');
  const supabase = createClient(OLD_HURVANT_URL, OLD_HURVANT_SR_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  console.log('Fetching auth users...');
  const { data: { users }, error } = await supabase.auth.admin.listUsers();
  if (error) {
    console.error('Error fetching auth users:', error.message);
  } else {
    console.log(`Auth users count: ${users.length}`);
    users.forEach(user => {
      console.log(`- ID: ${user.id}, Email: ${user.email}, Created At: ${user.created_at}, Meta: ${JSON.stringify(user.user_metadata)}`);
    });
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
