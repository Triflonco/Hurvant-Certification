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
    console.log('Inserting test company anonymously...');
    const { data, error } = await supabase
      .from('empresas_clientes')
      .insert([
        {
          codigo_empresa: 'TEST-99',
          nombre: 'Empresa Test Anonima',
          cif: 'B-99999999',
          centro: 'Centro de Pruebas',
          puesto_critico: 'Operador de Carretillas',
          conformidad: 100.00
        }
      ])
      .select();

    if (error) {
      console.error('Insert error:', error.message);
    } else {
      console.log('Insert successful:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

run();
