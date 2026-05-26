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

const testUsers = [
  { email: 'styloaerografo@gmail.com', password: 'password318275', nombre: 'Antonio Contreras', rol: 'Administrador', num_colegiado: 'DNI-31723466A' },
  { email: 'ginatorres.bernal@gmail.com', password: 'Gtorres2026', nombre: 'Gina Torres Bernal', rol: 'Administrador', num_colegiado: 'DNI-Z0541040Q' },
  { email: 'felipe10pinedatorres@gmail.com', password: 'Ppineda2026', nombre: 'David Felipe Pineda', rol: 'Inspector Técnico', num_colegiado: 'CC-1002366081' },
  { email: 'admin@hurvant.com', password: 'hurvant2026', nombre: 'Carlos Valenzuela', rol: 'Inspector Técnico', num_colegiado: '9843-COITI' }
];

async function run() {
  for (const user of testUsers) {
    console.log(`Registering ${user.email}...`);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            nombre: user.nombre,
            rol: user.rol,
            num_colegiado: user.num_colegiado
          }
        }
      });
      if (error) {
        console.error(`Error registering ${user.email}:`, error.message);
      } else {
        console.log(`Successfully registered ${user.email}! User ID:`, data.user?.id);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

run();
