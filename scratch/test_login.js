import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Manual env parsing
const envPath = path.resolve('.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim();
    env[key] = val;
  }
});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  try {
    console.log('Logging in...');
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'styloaerografo@gmail.com',
      password: 'password318275'
    });

    if (authError) {
      console.error('Login error:', authError.message);
      return;
    }

    console.log('Login successful! User:', authData.user?.email, 'ID:', authData.user?.id);

    // Now try to select companies
    const { data: companies, error: compError } = await supabase
      .from('empresas_clientes')
      .select('*');
    if (compError) throw compError;
    console.log('empresas_clientes with auth:', companies);

    const { data: profiles, error: profError } = await supabase
      .from('perfiles_usuarios')
      .select('*');
    if (profError) throw profError;
    console.log('perfiles_usuarios with auth:', profiles);
  } catch (err) {
    console.error('Query error:', err);
  }
}

run();
