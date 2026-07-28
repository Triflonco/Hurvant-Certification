-- =====================================================================
-- HURVANT - SOLUCIÓN A ALERTA DE SEGURIDAD SUPABASE (rls_disabled_in_public)
-- Proyecto: Hurvant Web (wumdgulwvhcgfcbsrjmi)
-- =====================================================================
-- Instrucciones de aplicación:
-- 1. Copia todo este contenido SQL.
-- 2. Abre tu panel de Supabase en la sección SQL Editor:
--    https://supabase.com/dashboard/project/wumdgulwvhcgfcbsrjmi/sql/new
-- 3. Pega este código y haz clic en "Run" (Ejecutar).
-- =====================================================================

-- 1. HABILITAR ROW LEVEL SECURITY (RLS) EN TODAS LAS TABLAS DEL ESQUEMA PÚBLICO
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'ALTER TABLE public.' || quote_ident(r.tablename) || ' ENABLE ROW LEVEL SECURITY;';
    END LOOP;
END $$;

-- 2. TABLA DE CONTACTOS Y FORMULARIOS DE LA WEB (hurvant_contacts)
CREATE TABLE IF NOT EXISTS public.hurvant_contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50),
    service VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'nuevo' CHECK (status IN ('nuevo', 'contactado', 'archivado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.hurvant_contacts ENABLE ROW LEVEL SECURITY;

-- 3. POLÍTICAS RLS PARA FORMULARIO DE CONTACTO (hurvant_contacts)
-- Permitir que visitantes anónimos de la web envíen formularios
DROP POLICY IF EXISTS "Permitir insercion publica de contactos" ON public.hurvant_contacts;
CREATE POLICY "Permitir insercion publica de contactos"
ON public.hurvant_contacts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Permitir consultar contactos solo a usuarios autenticados (Panel Admin)
DROP POLICY IF EXISTS "Permitir lectura de contactos a usuarios autenticados" ON public.hurvant_contacts;
CREATE POLICY "Permitir lectura de contactos a usuarios autenticados"
ON public.hurvant_contacts FOR SELECT
TO authenticated
USING (true);

-- Permitir actualizar estado de contactos a usuarios autenticados
DROP POLICY IF EXISTS "Permitir actualizacion de contactos a usuarios autenticados" ON public.hurvant_contacts;
CREATE POLICY "Permitir actualizacion de contactos a usuarios autenticados"
ON public.hurvant_contacts FOR UPDATE
TO authenticated
USING (true);

-- Permitir eliminar contactos a usuarios autenticados
DROP POLICY IF EXISTS "Permitir eliminacion de contactos a usuarios autenticados" ON public.hurvant_contacts;
CREATE POLICY "Permitir eliminacion de contactos a usuarios autenticados"
ON public.hurvant_contacts FOR DELETE
TO authenticated
USING (true);

-- 4. POLÍTICAS RLS PARA LAS DEMÁS TABLAS DE LA BASE DE DATOS
DO $$
BEGIN
    -- Certificados (Lectura pública activa para validación QR en inspección)
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'certificados') THEN
        DROP POLICY IF EXISTS "Permitir lectura publica de certificados" ON public.certificados;
        CREATE POLICY "Permitir lectura publica de certificados" 
        ON public.certificados FOR SELECT 
        USING (true);
    END IF;

    -- Empresas Clientes (Acceso restringido a usuarios autenticados)
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'empresas_clientes') THEN
        DROP POLICY IF EXISTS "Permitir lectura de empresas a autenticados" ON public.empresas_clientes;
        CREATE POLICY "Permitir lectura de empresas a autenticados" 
        ON public.empresas_clientes FOR SELECT 
        TO authenticated 
        USING (true);
    END IF;

    -- Operarios (Acceso restringido a usuarios autenticados)
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'operarios') THEN
        DROP POLICY IF EXISTS "Permitir lectura de operarios a autenticados" ON public.operarios;
        CREATE POLICY "Permitir lectura de operarios a autenticados" 
        ON public.operarios FOR SELECT 
        TO authenticated 
        USING (true);
    END IF;
END $$;
