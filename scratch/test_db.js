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

console.log('Connecting to:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  try {
    const { data: companies, error: compError } = await supabase
      .from('empresas_clientes')
      .select('*');
    if (compError) throw compError;
    console.log('empresas_clientes in database:', companies);

    const { data: operarios, error: opError } = await supabase
      .from('operarios')
      .select('*');
    if (opError) throw opError;
    console.log('operarios in database count:', operarios.length);

    const { data: certificados, error: certError } = await supabase
      .from('certificados')
      .select('*');
    if (certError) throw certError;
    console.log('certificados in database:', certificados);
  } catch (err) {
    console.error('Error fetching from Supabase:', err);
  }
}

run();
