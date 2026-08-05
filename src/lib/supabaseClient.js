import { createClient } from '@supabase/supabase-js';

// Extraer credenciales desde variables de entorno de Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Inicializar el cliente solo si ambas variables de entorno están presentes
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
