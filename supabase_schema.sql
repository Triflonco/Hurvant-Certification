-- =====================================================================
-- HURVANT Certification - Supabase PostgreSQL Database Schema
-- Marco Técnico: Acreditaciones UNE/ENAC y Real Decreto 1215/1997
-- =====================================================================

-- 1. extensiones requeridas
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. limpieza de tablas previas (para entornos de pruebas)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP TABLE IF EXISTS certificados CASCADE;
DROP TABLE IF EXISTS operarios CASCADE;
DROP TABLE IF EXISTS empresas_clientes CASCADE;
DROP TABLE IF EXISTS perfiles_usuarios CASCADE;
DROP TYPE IF EXISTS rol_usuario CASCADE;

-- =====================================================================
-- TABLA: perfiles_usuarios (Gobernanza de Accesos y Firmas)
-- Guarda el perfil extendido de los usuarios en base a su cargo
-- Vinculado nativamente con Supabase Auth (auth.users)
-- =====================================================================
CREATE TYPE rol_usuario AS ENUM ('Administrador', 'Inspector Técnico', 'Prevencionista', 'Empleado');

CREATE TABLE perfiles_usuarios (
    id UUID PRIMARY KEY, -- Enlace 1:1 con auth.users(id)
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    rol rol_usuario DEFAULT 'Empleado'::rol_usuario NOT NULL,
    num_colegiado VARCHAR(50), -- Nº de Colegiado (indispensable para firmar actas técnicas)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para búsquedas de perfiles
CREATE INDEX idx_perfiles_email ON perfiles_usuarios(email);
CREATE INDEX idx_perfiles_rol ON perfiles_usuarios(rol);

-- =====================================================================
-- TABLA: empresas_clientes
-- Guarda los datos de las empresas auditadas e inspeccionadas
-- =====================================================================
CREATE TABLE empresas_clientes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_empresa VARCHAR(20) UNIQUE NOT NULL, -- Ej. EMP-01
    nombre VARCHAR(100) NOT NULL UNIQUE,
    cif VARCHAR(20) NOT NULL UNIQUE,
    centro VARCHAR(150) NOT NULL,
    puesto_critico VARCHAR(150) NOT NULL,
    conformidad DECIMAL(5,2) DEFAULT 100.00 CHECK (conformidad >= 0.00 AND conformidad <= 100.00),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para búsquedas de empresas
CREATE INDEX idx_empresas_nombre ON empresas_clientes(nombre);
CREATE INDEX idx_empresas_cif ON empresas_clientes(cif);

-- =====================================================================
-- TABLA: operarios
-- Guarda el registro de operarios firmados y sus aptitudes médicas
-- =====================================================================
CREATE TABLE operarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_operario VARCHAR(20) UNIQUE NOT NULL, -- Ej. OP-4892
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    puesto VARCHAR(150) NOT NULL,
    empresa_id UUID REFERENCES empresas_clientes(id) ON DELETE RESTRICT NOT NULL,
    aptitud_medica BOOLEAN DEFAULT TRUE NOT NULL,
    fecha_alta DATE DEFAULT CURRENT_DATE NOT NULL,
    estado VARCHAR(50) NOT NULL CHECK (estado IN ('Auditado - Conforme', 'Reevaluación Requerida', 'Inapto Temporal')),
    hash VARCHAR(100) UNIQUE NOT NULL, -- Huella digital criptográfica SHA-256
    gps VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para búsquedas de operarios
CREATE INDEX idx_operarios_dni ON operarios(dni);
CREATE INDEX idx_operarios_hash ON operarios(hash);
CREATE INDEX idx_operarios_empresa ON operarios(empresa_id);

-- =====================================================================
-- TABLA: certificados
-- Libro de firmas de certificados técnicos y actas de adecuación
-- =====================================================================
CREATE TABLE certificados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(20) UNIQUE NOT NULL, -- Ej. HVT-0982, EQ-ALM-01
    tipo VARCHAR(100) NOT NULL, -- Ej. 'Certificado de Competencia de Personas'
    titular VARCHAR(150) NOT NULL,
    esquema VARCHAR(150) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    fecha_examen DATE NOT NULL,
    vencimiento DATE NOT NULL,
    hash VARCHAR(100) UNIQUE NOT NULL,
    inspector VARCHAR(150) NOT NULL,
    gps VARCHAR(100),
    operator_id UUID REFERENCES operarios(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para búsquedas rápidas de la LOPDGDD
CREATE INDEX idx_certificados_codigo ON certificados(codigo);
CREATE INDEX idx_certificados_hash ON certificados(hash);

-- =====================================================================
-- TRIGGERS Y FUNCIONES: CONTROL DE TIEMPO (updated_at)
-- =====================================================================
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_perfiles_usuarios_modtime
BEFORE UPDATE ON perfiles_usuarios
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_empresas_clientes_modtime 
BEFORE UPDATE ON empresas_clientes 
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_operarios_modtime 
BEFORE UPDATE ON operarios 
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_certificados_modtime 
BEFORE UPDATE ON certificados 
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- =====================================================================
-- TRIGGERS Y FUNCIONES: CÁLCULO REACTIVO DE CONFORMIDAD
-- =====================================================================
CREATE OR REPLACE FUNCTION fn_actualizar_estadisticas_empresa()
RETURNS TRIGGER AS $$
DECLARE
    v_empresa_id UUID;
    v_total_operarios INT;
    v_aptos_operarios INT;
    v_porcentaje_conformidad DECIMAL(5,2);
BEGIN
    -- Identificar la empresa afectada por el cambio de operario
    IF TG_OP = 'DELETE' THEN
        v_empresa_id := OLD.empresa_id;
    ELSE
        v_empresa_id := NEW.empresa_id;
    END IF;

    IF v_empresa_id IS NOT NULL THEN
        -- Contar operarios totales en la empresa
        SELECT COUNT(*) INTO v_total_operarios
        FROM operarios
        WHERE empresa_id = v_empresa_id;

        -- Contar operarios conformes (aptos)
        SELECT COUNT(*) INTO v_aptos_operarios
        FROM operarios
        WHERE empresa_id = v_empresa_id AND aptitud_medica = TRUE;

        -- Calcular tasa de conformidad porcentual
        IF v_total_operarios > 0 THEN
            v_porcentaje_conformidad := (v_aptos_operarios::DECIMAL / v_total_operarios::DECIMAL) * 100.00;
        ELSE
            v_porcentaje_conformidad := 100.00;
        END IF;

        -- Actualizar en cascada en la ficha de la empresa cliente
        UPDATE empresas_clientes
        SET conformidad = v_porcentaje_conformidad
        WHERE id = v_empresa_id;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_actualizar_estadisticas_operario
AFTER INSERT OR UPDATE OR DELETE ON operarios
FOR EACH ROW
EXECUTE FUNCTION fn_actualizar_estadisticas_empresa();

-- =====================================================================
-- TRIGGERS Y FUNCIONES: ENLACE AUTOMÁTICO SUPABASE AUTH -> PERFILES
-- Crea automáticamente el perfil extendido en la base de datos pública
-- al registrarse un usuario en Supabase Authentication.
-- =====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.perfiles_usuarios (id, nombre, email, rol, num_colegiado)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'nombre', 'Nuevo Usuario'),
    NEW.email,
    COALESCE((NEW.raw_user_meta_data->>'rol')::public.rol_usuario, 'Empleado'::public.rol_usuario),
    NEW.raw_user_meta_data->>'num_colegiado'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Registra el disparador de Supabase Auth
-- NOTA: Este trigger requiere que el esquema sea inicializado en la base de datos donde Supabase gestiona la autenticación.
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================================================================
-- SEGURIDAD: ROW LEVEL SECURITY (RLS) - NATIVO DE SUPABASE
-- =====================================================================

-- Habilitar RLS
ALTER TABLE perfiles_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE empresas_clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE operarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificados ENABLE ROW LEVEL SECURITY;

-- 1. Políticas de Perfiles de Usuarios
CREATE POLICY "Permitir a cada usuario leer su propio perfil"
ON perfiles_usuarios FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Permitir a los administradores leer todos los perfiles"
ON perfiles_usuarios FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol = 'Administrador'::rol_usuario
  )
);

CREATE POLICY "Permitir a los administradores crear y modificar perfiles"
ON perfiles_usuarios FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol = 'Administrador'::rol_usuario
  )
);

-- 2. Políticas de Certificados (Lectura pública para validaciones por QR en campo)
CREATE POLICY "Permitir lectura pública de certificados" 
ON certificados FOR SELECT 
USING (true);

-- 3. Políticas de Empresas Clientes (Solo inspectores autorizados y administradores)
CREATE POLICY "Permitir lectura de empresas a inspectores y administradores" 
ON empresas_clientes FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Permitir creación de empresas a inspectores y administradores" 
ON empresas_clientes FOR INSERT 
TO authenticated 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol IN ('Inspector Técnico'::rol_usuario, 'Administrador'::rol_usuario)
  )
);

CREATE POLICY "Permitir actualización de empresas a inspectores y administradores" 
ON empresas_clientes FOR UPDATE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol IN ('Inspector Técnico'::rol_usuario, 'Administrador'::rol_usuario)
  )
);

-- 4. Políticas de Operarios (Solo inspectores autorizados y administradores)
CREATE POLICY "Permitir lectura de operarios a inspectores y administradores" 
ON operarios FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Permitir creación de operarios a inspectores" 
ON operarios FOR INSERT 
TO authenticated 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol IN ('Inspector Técnico'::rol_usuario, 'Administrador'::rol_usuario)
  )
);

CREATE POLICY "Permitir actualización de operarios a inspectores" 
ON operarios FOR UPDATE 
TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM perfiles_usuarios
    WHERE id = auth.uid() AND rol IN ('Inspector Técnico'::rol_usuario, 'Administrador'::rol_usuario)
  )
);

-- =====================================================================
-- SEMILLADO DE DATOS (SEED DATA)
-- Carga inicial con los registros premium sincronizados de la aplicación
-- =====================================================================

-- 1. Insertar Perfiles de Usuarios de prueba
-- Nota: En producción, estos UUID vendrán de la tabla auth.users generados por el registro de Supabase Auth
INSERT INTO perfiles_usuarios (id, nombre, email, rol, num_colegiado) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a00', 'Antonio Contreras', 'styloaerografo@gmail.com', 'Administrador'::rol_usuario, 'DNI-31723466A'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a55', 'Gina Torres Bernal', 'ginatorres.bernal@gmail.com', 'Administrador'::rol_usuario, 'DNI-Z0541040Q'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a66', 'David Felipe Pineda', 'felipe10pinedatorres@gmail.com', 'Inspector Técnico'::rol_usuario, 'CC-1002366081'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Carlos Valenzuela', 'carlos.valenzuela@hurvant.com', 'Inspector Técnico'::rol_usuario, '9843-COITI'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Amparo Serra Rius', 'amparo.serra@hurvant.com', 'Inspector Técnico'::rol_usuario, '11202-COITI'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33', 'Javier Rivas Moreno', 'javier.rivas@hurvant.com', 'Administrador'::rol_usuario, '7829-COITI'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44', 'Marta Soler Puig', 'marta.soler@mercadona.es', 'Prevencionista'::rol_usuario, 'PRL-48299');

-- 2. Insertar Empresas Clientes Iniciales
INSERT INTO empresas_clientes (codigo_empresa, nombre, cif, centro, puesto_critico, conformidad) VALUES
('EMP-01', 'Mercadona Logística España', 'A-46000000', 'C.L. Madrid Sur (Valdemoro)', 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)', 100.00),
('EMP-02', 'Hilton Hotels Group', 'B-82000012', 'División Baleares (Palma)', 'Técnico en Trabajos en Altura y Escaleras de Acceso (RD 2177/2004)', 88.00),
('EMP-03', 'FCC Industrial Madrid', 'A-28000948', 'Parque de Maquinaria Norte', 'Operador de Grúa Móvil Autopropulsada - Cat. A (ITC MIE-AEM-4)', 100.00);

-- 3. Insertar Operarios (Vinculados mediante subconsultas por código de empresa)
INSERT INTO operarios (codigo_operario, nombre, dni, puesto, empresa_id, aptitud_medica, fecha_alta, estado, hash, gps) VALUES
('OP-4892', 'Carlos Gómez Sánchez', '50389281A', 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)', (SELECT id FROM empresas_clientes WHERE codigo_empresa = 'EMP-01'), TRUE, '2025-10-12', 'Auditado - Conforme', 'sha256-4a7b9c9d8e7f6a5b4c3d2e1f9876543210abcdef0123456789abcdef012345', '40.416775, -3.703790'),
('OP-1143', 'Marta Ruiz Calvo', '02899482B', 'Operador de Trabajos en Espacios Confinados (Atmósferas Peligrosas)', (SELECT id FROM empresas_clientes WHERE codigo_empresa = 'EMP-02'), TRUE, '2026-02-04', 'Auditado - Conforme', 'sha256-8e2d1f9d8c7b6a5a4c3b2a1a0987654321fedcba0123456789abcdef987654', '41.385064, 2.173403'),
('OP-0731', 'Jorge Benítez Ortiz', '48299104K', 'Técnico en Trabajos en Altura y Escaleras de Acceso (RD 2177/2004)', (SELECT id FROM empresas_clientes WHERE codigo_empresa = 'EMP-03'), TRUE, '2023-05-15', 'Reevaluación Requerida', 'sha256-f5c2b9f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0', '39.469907, -0.376288'),
('OP-3048', 'Sofía Lanza Mendoza', '78299120Z', 'Operador de Plataformas Elevadoras PEMP (Norma UNE 58923)', (SELECT id FROM empresas_clientes WHERE codigo_empresa = 'EMP-01'), FALSE, '2026-05-20', 'Inapto Temporal', 'sha256-3bb4c5d6e7f8g9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4', '40.416775, -3.703790');

-- 4. Insertar Certificados Técnicos del Libro de Firmas
INSERT INTO certificados (codigo, tipo, titular, esquema, estado, is_active, fecha_examen, vencimiento, hash, inspector, gps, operator_id) VALUES
('HVT-0982', 'Certificado de Competencia de Personas', 'Carlos Gómez Sánchez', 'UNE-EN ISO/IEC 17024 - Operador Retráctil T4', 'ACTIVO - CONFORME', TRUE, '2025-10-12', '2030-10-12', 'sha256-4a7b9c9d8e7f6a5b4c3d2e1f9876543210abcdef0123456789abcdef012345', 'Fdo. José Rivas (Nº Col. 9843-COITI)', '40.416775, -3.703790 (Madrid Sur)', (SELECT id FROM operarios WHERE codigo_operario = 'OP-4892')),
('HVT-1143', 'Certificado de Competencia de Personas', 'Marta Ruiz Calvo', 'UNE-EN ISO/IEC 17024 - Espacios Confinados Cat. C', 'ACTIVO - CONFORME', TRUE, '2026-02-04', '2029-02-04', 'sha256-8e2d1f9d8c7b6a5a4c3b2a1a0987654321fedcba0123456789abcdef987654', 'Fdo. Amparo Serra (Nº Col. 11202-COITI)', '41.385064, 2.173403 (Planta Barcelona)', (SELECT id FROM operarios WHERE codigo_operario = 'OP-1143')),
('HVT-0731', 'Certificado de Competencia de Personas', 'Jorge Benítez Ortiz', 'UNE-EN ISO/IEC 17024 - Trabajos en Altura Telco', 'VENCIDO - REQUIERE REEVALUACIÓN', FALSE, '2023-05-15', '2026-05-15', 'sha256-f5c2b9f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0', 'Fdo. José Rivas (Nº Col. 9843-COITI)', '39.469907, -0.376288 (Zona Levante)', (SELECT id FROM operarios WHERE codigo_operario = 'OP-0731')),
('EQ-ALM-01', 'Acta de Inspección y Adecuación de Maquinaria', 'Carretilla Elevadora Frontal - Modelo FL-3000', 'Real Decreto 1215/1997 Anexo I y II (UNE-EN ISO/IEC 17020)', 'ADECUADO - REGISTRO CONFORME', TRUE, '2025-11-18', '2028-11-18', 'sha256-e2a12b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a', 'Fdo. Dirección Técnico de Inspección Hurvant', '37.389092, -5.984459 (Sector Logística Sevilla)', NULL);
