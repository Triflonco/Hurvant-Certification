/* 
   HURVANT | Lógica del Portal Institucional y de Gobernanza Técnica
   Implementación de Router SPA, Validador Seguro de Certificaciones (GDPR)
   y Registro Oficial de Quejas y Apelaciones (ISO 17024 / 17020).
*/

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización global
  initRouter();
  initCertificateVerification();
  initComplaintRegistry();
});

/* ==========================================================================
   1. ROUTER SPA (Navegación Basada en Hash)
   ========================================================================== */
function initRouter() {
  const views = document.querySelectorAll('.view');
  
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const cleanHash = hash.substring(1);
    const targetViewId = cleanHash + '-view';
    
    let activeView = document.getElementById(targetViewId);
    
    // Si la vista no existe en el DOM, redirigir por defecto a #home
    if (!activeView) {
      window.location.hash = '#home';
      return;
    }
    
    // Ocultar todas las vistas y remover clases activas
    views.forEach(view => {
      view.classList.remove('active');
    });
    
    // Activar vista destino
    activeView.classList.add('active');
    
    // Actualizar estados del menú de navegación de la cabecera
    const navItems = document.querySelectorAll('#nav-list li');
    navItems.forEach(item => {
      const link = item.querySelector('a');
      if (link && link.getAttribute('href') === hash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Sincronizar también enlaces especiales de pie de página si es necesario
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Escuchar cambios de hash e inicialización en carga
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

/* ==========================================================================
   2. VALIDADOR SEGURO DE CERTIFICACIONES (GDPR-Compliant)
   ========================================================================== */
// Registro técnico simulado de certificaciones válidas e inalterables
const CERTIFICATES_REGISTRY = {
  'HVT-0982': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Carlos Gómez Sánchez',
    esquema: 'UNE-EN ISO/IEC 17024 - Operador Retráctil T4',
    estado: 'ACTIVO - CONFORME',
    estadoClase: 'status-badge-active',
    fechaExamen: '12/10/2025',
    vencimiento: '12/10/2030',
    hash: 'sha256-4a7b9c9d8e7f6a5b4c3d2e1f9876543210abcdef0123456789abcdef012345',
    inspector: 'Fdo. José Rivas (Nº Col. 9843-COITI)',
    gps: '40.416775, -3.703790 (Madrid Sur)'
  },
  'HVT-1143': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Marta Ruiz Calvo',
    esquema: 'UNE-EN ISO/IEC 17024 - Espacios Confinados Cat. C',
    estado: 'ACTIVO - CONFORME',
    estadoClase: 'status-badge-active',
    fechaExamen: '04/02/2026',
    vencimiento: '04/02/2029',
    hash: 'sha256-8e2d1f9d8c7b6a5a4c3b2a1a0987654321fedcba0123456789abcdef987654',
    inspector: 'Fdo. Amparo Serra (Nº Col. 11202-COITI)',
    gps: '41.385064, 2.173403 (Planta Barcelona)'
  },
  'EQ-ALM-01': {
    tipo: 'Acta de Inspección y Adecuación de Maquinaria',
    titular: 'Carretilla Elevadora Frontal - Modelo FL-3000',
    esquema: 'Real Decreto 1215/1997 Anexo I y II (UNE-EN ISO/IEC 17020)',
    estado: 'ADECUADO - REGISTRO CONFORME',
    estadoClase: 'status-badge-active',
    fechaExamen: '18/11/2025',
    vencimiento: '18/11/2028',
    hash: 'sha256-e2a12b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a',
    inspector: 'Fdo. Dirección Técnica de Inspección Hurvant',
    gps: '37.389092, -5.984459 (Sector Logística Sevilla)'
  },
  'HVT-0731': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Jorge Benítez Ortiz',
    esquema: 'UNE-EN ISO/IEC 17024 - Trabajos en Altura Telco',
    estado: 'VENCIDO - REQUIERE REEVALUACIÓN',
    estadoClase: 'status-badge-inactive',
    fechaExamen: '15/05/2023',
    vencimiento: '15/05/2026',
    hash: 'sha256-f5c2b9f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0',
    inspector: 'Fdo. José Rivas (Nº Col. 9843-COITI)',
    gps: '39.469907, -0.376288 (Zona Levante)'
  }
};

function initCertificateVerification() {
  const searchForm = document.getElementById('certificate-search-form');
  const searchInput = document.getElementById('verification-search-input');
  const resultBox = document.getElementById('search-result-box');

  if (!searchForm || !searchInput || !resultBox) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = searchInput.value.trim().toUpperCase();

    if (!query) {
      alert('Por favor, introduzca un código de certificado.');
      return;
    }

    // Efecto de carga suave en botón
    const btn = document.getElementById('btn-verify-search');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Buscando en Registro...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;

      const matchedCert = CERTIFICATES_REGISTRY[query];

      if (matchedCert) {
        // Encontrado: Renderizar detalles con formato técnico oficial
        resultBox.innerHTML = `
          <div style="border-bottom: 2px solid var(--color-accent); padding-bottom: 0.8rem; margin-bottom: 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-text); margin: 0;">EVIDENCIA DE CONFORMIDAD DETECTADA</h4>
            <span class="status-badge ${matchedCert.estadoClase}">${matchedCert.estado}</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.8rem; font-size: 0.9rem; color: var(--color-text-muted);">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Tipo de Expediente:</strong></span>
              <span style="color: var(--color-text); font-weight: 500;">${matchedCert.tipo}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Referencia/Sujeto:</strong></span>
              <span style="color: var(--color-text); font-weight: 600;">${matchedCert.titular}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Esquema Técnico Aplicado:</strong></span>
              <span style="color: var(--color-text); font-weight: 500;">${matchedCert.esquema}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Fecha de Examen/Auditoría:</strong></span>
              <span style="color: var(--color-text); font-weight: 500;">${matchedCert.fechaExamen}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Vigencia y Validez:</strong></span>
              <span style="color: var(--color-text); font-weight: 600;">${matchedCert.vencimiento}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Inspector Técnico Evaluador:</strong></span>
              <span style="color: var(--color-text); font-weight: 500;">${matchedCert.inspector}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem;">
              <span><strong>Coordenadas GPS de Evaluación:</strong></span>
              <span style="color: var(--color-accent); font-family: monospace; font-size: 0.8rem;">${matchedCert.gps}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.3rem; margin-top: 0.5rem;">
              <span style="font-size: 0.8rem; color: var(--color-text-muted);"><strong>Firma Hash Digital (Inmutable):</strong></span>
              <span style="font-family: monospace; font-size: 0.75rem; background: var(--color-surface); padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border); word-break: break-all; color: var(--color-accent);">${matchedCert.hash}</span>
            </div>
          </div>

          <div style="background: hsla(160, 84%, 30%, 0.06); border: 1px solid hsla(160, 84%, 30%, 0.2); border-radius: var(--radius-sm); padding: 0.8rem; font-size: 0.8rem; color: var(--color-success); font-weight: 600; text-align: center; margin-top: 1.2rem;">
            🔐 Firma Criptográfica de Tercera Parte de Hurvant Oficialmente Trazada
          </div>

          <button class="btn-action" style="width: 100%; margin-top: 1rem; padding: 0.7rem; font-size: 0.85rem;" onclick="alert('Descarga de resolución técnica firmada digitalmente (Simulada)...')">
            Descargar Dictamen Técnico Oficial (PDF)
          </button>
        `;
      } else {
        // No encontrado
        resultBox.innerHTML = `
          <div style="text-align: center; padding: 1.5rem 0;">
            <span style="font-size: 2rem; display: block; margin-bottom: 0.8rem;">⚠️</span>
            <strong style="color: var(--color-error); font-size: 1rem; display: block; margin-bottom: 0.5rem;">CÓDIGO DE CERTIFICACIÓN NO CONFORME</strong>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin: 0 auto; max-width: 450px;">
              El identificador introducido **no se encuentra registrado** en el Registro General de Resoluciones de HURVANT, o ha sido anulado por resolución extraordinaria del Comité de Salvaguarda.
            </p>
          </div>
        `;
      }

      // Mostrar el bloque
      resultBox.style.display = 'block';
    }, 600);
  });
}

/* ==========================================================================
   3. GESTIÓN OFICIAL DE QUEJAS Y APELACIONES (UNE-EN ISO/IEC 17024 / 17020)
   ========================================================================== */
function initComplaintRegistry() {
  const complaintForm = document.getElementById('official-complaint-form');
  const feedbackBox = document.getElementById('complaint-feedback-box');
  const ticketIdLabel = document.getElementById('complaint-ticket-id');

  if (!complaintForm || !feedbackBox) return;

  complaintForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validaciones técnicas manuales de campos requeridos
    const category = document.getElementById('complaint-category').value;
    const name = document.getElementById('complaint-name').value.trim();
    const email = document.getElementById('complaint-email').value.trim();
    const details = document.getElementById('complaint-details').value.trim();
    const gdpr = document.getElementById('complaint-gdpr').checked;

    if (!category || !name || !email || !details) {
      alert('Por favor, cumplimente todos los campos obligatorios del formulario de reclamación.');
      return;
    }

    if (!gdpr) {
      alert('Es obligatorio aceptar el tratamiento oficial de sus datos para registrar el expediente de queja/apelación.');
      return;
    }

    // Efecto visual de envío
    const submitBtn = document.getElementById('btn-submit-complaint');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Registrando Expediente...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Generar código de ticket oficial único
      const prefix = category === 'apelacion' ? 'A' : 'Q';
      const year = new Date().getFullYear();
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const officialTicketId = `EXP-${prefix}-${year}-${randomId}`;

      // Inyectar Ticket e intercambiar vistas
      ticketIdLabel.textContent = officialTicketId;
      complaintForm.style.display = 'none';
      feedbackBox.style.display = 'block';

      // Efecto suave de scroll hacia la respuesta
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
  });
}
