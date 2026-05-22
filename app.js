/* 
   HURVANT | Lógica y Dinamismo de la Plataforma de Cumplimiento Técnico
   Router SPA, Dashboards Interactivos, Pasaporte QR, Simulador de Escaneo y Wizard de Riesgo.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización global
  initRouter();
  initServicesTabs();
  initCompanyDashboard();
  initWorkerScanner();
  initAuditWizard();
  initBlogFilters();
  initModalHandlers();
});

/* ==========================================================================
   1. ROUTER SPA (Basado en Hash)
   ========================================================================== */
function initRouter() {
  const navLinks = document.querySelectorAll('.main-nav li, .footer-col li');
  const views = document.querySelectorAll('.view');
  
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const targetViewId = hash.substring(1) + '-view';
    
    let activeView = document.getElementById(targetViewId);
    
    // Si no existe la vista, redirigir a home
    if (!activeView) {
      window.location.hash = '#home';
      return;
    }
    
    // Ocultar todas las vistas
    views.forEach(view => {
      view.classList.remove('active');
    });
    
    // Activar vista destino
    activeView.classList.add('active');
    
    // Actualizar estados del menú de navegación
    const navItems = document.querySelectorAll('.main-nav li');
    navItems.forEach(item => {
      const link = item.querySelector('a');
      if (link && link.getAttribute('href') === hash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Subir scroll arriba al cambiar de página
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', handleRoute);
  // Carga inicial
  handleRoute();
}

/* ==========================================================================
   2. PESTAÑAS DE SERVICIOS
   ========================================================================== */
function initServicesTabs() {
  const tabBtns = document.querySelectorAll('.service-tab-btn');
  const details = document.querySelectorAll('.service-detail');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetService = btn.getAttribute('data-service');
      
      // Actualizar botones
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Actualizar paneles de detalle
      details.forEach(detail => {
        detail.classList.remove('active');
        if (detail.getAttribute('id') === `service-${targetService}`) {
          // Pequeño retardo para la animación
          setTimeout(() => {
            detail.classList.add('active');
          }, 50);
        }
      });
    });
  });
}

/* ==========================================================================
   3. PORTAL EMPRESA (Dashboard SaaS Interactivo)
   ========================================================================== */
// Datos Iniciales de Operarios
let operariosList = [
  { id: 'HVT-0982', nombre: 'Carlos Gómez', cargo: 'Operador Retráctil T4', estado: 'ACTIVO', vencimiento: '12/10/2026', certHash: 'sha256-4a7b9c...' },
  { id: 'HVT-1143', nombre: 'Marta Ruiz', cargo: 'Espacios Confinados Cat. C', estado: 'ACTIVO', vencimiento: '04/02/2027', certHash: 'sha256-8e2d1f...' },
  { id: 'HVT-0731', nombre: 'Jorge Benítez', cargo: 'Trabajos en Altura Telco', estado: 'VENCIDO', vencimiento: '15/05/2026', certHash: 'sha256-f5c2b9...' },
  { id: 'HVT-1590', nombre: 'Laura Medina', cargo: 'PEMP Tipo 3B (Tijera)', estado: 'PENDIENTE', vencimiento: 'Reevaluación en 5d', certHash: 'PENDIENTE' }
];

// Datos Iniciales de Equipos
const equiposList = [
  { tag: 'EQ-ALM-01', tipo: 'Carretilla Elevadora Frontal', adecuacion: 'RD 1215 OK', inspector: 'Téc. J. Rivas', revision: '18/11/2026' },
  { tag: 'EQ-ENV-03', tipo: 'Línea de Envasado Automatizada', adecuacion: 'RD 1215 OK', inspector: 'Téc. A. Serra', revision: '02/09/2026' },
  { tag: 'EQ-ALT-09', tipo: 'Plataforma Articulada 18m', adecuacion: 'NO ADECUADO', inspector: 'Téc. J. Rivas', revision: 'INMEDIATA' }
];

function initCompanyDashboard() {
  const dbNavBtns = document.querySelectorAll('.db-nav-btn');
  const dbViews = document.querySelectorAll('.db-view');

  // Alternar vistas internas del Dashboard (Personal / Equipos / CAE)
  dbNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetViewId = btn.getAttribute('data-db-view') + '-db-view';
      
      dbNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      dbViews.forEach(view => {
        view.classList.remove('active');
        if (view.getAttribute('id') === targetViewId) {
          view.classList.add('active');
        }
      });
    });
  });

  // Renderizar listas en tablas
  renderOperariosTable();
  renderEquiposTable();

  // Gestor del Formulario de Operarios
  const addWorkerForm = document.getElementById('add-worker-form');
  if (addWorkerForm) {
    addWorkerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombreInput = document.getElementById('worker-name');
      const cargoInput = document.getElementById('worker-role');
      
      if (!nombreInput.value || !cargoInput.value) return;

      // Crear nuevo operario
      const newId = 'HVT-' + Math.floor(1000 + Math.random() * 9000);
      const newWorker = {
        id: newId,
        nombre: nombreInput.value,
        cargo: cargoInput.value,
        estado: 'PENDIENTE',
        vencimiento: 'Examen Práctico Pendiente',
        certHash: 'PENDIENTE'
      };

      operariosList.unshift(newWorker);
      
      // Limpiar inputs
      nombreInput.value = '';
      cargoInput.value = '';

      // Volver a renderizar
      renderOperariosTable();
      updateDashboardKPIs();
      
      // Efecto visual de feedback
      const alertBox = document.createElement('div');
      alertBox.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:var(--color-accent);color:var(--color-dark-900);padding:1rem 1.5rem;border-radius:6px;font-weight:700;z-index:9999;box-shadow:0 10px 25px rgba(0,0,0,0.3);animation:slideUp 0.3s ease;';
      alertBox.textContent = `Operario registrado correctamente con ID temporal ${newId}.`;
      document.body.appendChild(alertBox);
      
      setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.transition = 'opacity 0.4s';
        setTimeout(() => alertBox.remove(), 400);
      }, 3500);
    });
  }

  // Simulador de Drag and Drop CAE
  const caeUpload = document.getElementById('cae-upload-box');
  const uploadProgress = document.getElementById('cae-progress-container');
  const uploadProgressBar = document.getElementById('cae-progress-bar');
  const uploadStatus = document.getElementById('cae-status-text');

  if (caeUpload) {
    caeUpload.addEventListener('click', () => {
      // Simular apertura de selector de archivos y posterior subida
      caeUpload.style.borderColor = 'var(--color-accent)';
      simulateCAEUpload();
    });

    // Drag-Over
    caeUpload.addEventListener('dragover', (e) => {
      e.preventDefault();
      caeUpload.classList.add('dragover');
    });

    caeUpload.addEventListener('dragleave', () => {
      caeUpload.classList.remove('dragover');
    });

    caeUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      caeUpload.classList.remove('dragover');
      simulateCAEUpload();
    });
  }

  function simulateCAEUpload() {
    uploadProgress.style.display = 'block';
    uploadStatus.style.display = 'block';
    uploadStatus.textContent = 'Verificando firma digital y validez técnica de la subcontrata...';
    uploadProgressBar.style.width = '0%';
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        uploadProgressBar.style.width = '100%';
        uploadStatus.textContent = 'CONFORME: Documentación CAE del subcontratista validada y cargada con éxito.';
        uploadStatus.style.color = 'var(--color-accent)';
        caeUpload.style.borderColor = 'var(--color-accent)';
        
        // Agregar fila simulada en CAE
        const caeTableBody = document.querySelector('#cae-table tbody');
        if (caeTableBody) {
          const newCaeRow = document.createElement('tr');
          newCaeRow.innerHTML = `
            <td>CON-902</td>
            <td>Estructuras Metálicas S.A.</td>
            <td>Instalación de Vigas en Altura</td>
            <td><span class="status-badge status-badge-active">CONFORME</span></td>
            <td>Aprobación Técnica Hurvant</td>
            <td><button class="action-btn" onclick="openTraceModal('CON-902')">Historial</button></td>
          `;
          newCaeRow.style.animation = 'slideUp 0.4s ease';
          caeTableBody.insertBefore(newCaeRow, caeTableBody.firstChild);
        }
      } else {
        uploadProgressBar.style.width = progress + '%';
      }
    }, 150);
  }
}

// Renderizadores de Tablas
function renderOperariosTable() {
  const tbody = document.querySelector('#operarios-table tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  operariosList.forEach(op => {
    let statusClass = 'status-badge-active';
    if (op.estado === 'PENDIENTE') statusClass = 'status-badge-pending';
    if (op.estado === 'VENCIDO') statusClass = 'status-badge-inactive';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${op.id}</strong></td>
      <td>${op.nombre}</td>
      <td>${op.cargo}</td>
      <td><span class="status-badge ${statusClass}">${op.estado}</span></td>
      <td>${op.vencimiento}</td>
      <td>
        <button class="action-btn" onclick="openTraceModal('${op.id}')">Ver Evidencias</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderEquiposTable() {
  const tbody = document.querySelector('#equipos-table tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  equiposList.forEach(eq => {
    let statusClass = 'status-badge-active';
    if (eq.adecuacion === 'NO ADECUADO') statusClass = 'status-badge-inactive';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${eq.tag}</strong></td>
      <td>${eq.tipo}</td>
      <td><span class="status-badge ${statusClass}">${eq.adecuacion}</span></td>
      <td>${eq.inspector}</td>
      <td>${eq.revision}</td>
      <td>
        <button class="action-btn" onclick="openTraceModal('${eq.tag}')">Dossier RD 1215</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateDashboardKPIs() {
  const kpiTotal = document.getElementById('kpi-total-workers');
  const kpiPendientes = document.getElementById('kpi-pending-workers');
  
  if (kpiTotal) kpiTotal.textContent = operariosList.length;
  if (kpiPendientes) {
    const pendCount = operariosList.filter(o => o.estado === 'PENDIENTE').length;
    kpiPendientes.textContent = pendCount;
  }
}

/* ==========================================================================
   4. PORTAL TRABAJADOR Y SIMULADOR ESCÁNER QR
   ========================================================================== */
function initWorkerScanner() {
  const qrBox = document.getElementById('passport-qr-trigger');
  const simView = document.getElementById('sim-camera-view');
  const scanPrompt = document.getElementById('sim-scan-prompt');
  const resultPanel = document.getElementById('sim-result-panel');
  const startScanBtn = document.getElementById('start-scan-simulator-btn');

  function triggerScannerSimulation() {
    if (!simView || !resultPanel) return;
    
    // Ocultar resultados previos
    resultPanel.style.display = 'none';
    
    // Mostrar simulación de escaneo activo
    simView.innerHTML = `
      <div class="camera-scan-line"></div>
      <div class="camera-scan-box"></div>
      <div style="position:absolute;color:white;font-size:0.8rem;bottom:10px;font-weight:600;">Cámara en vivo (Simulada)...</div>
    `;
    scanPrompt.textContent = 'Leyendo y validando criptográficamente el código QR...';
    
    // 2 segundos de retraso para el escaneo
    setTimeout(() => {
      simView.innerHTML = `
        <div style="font-size:3rem;color:var(--color-accent);animation:pulse 1.5s infinite;">✓</div>
        <div style="position:absolute;color:var(--color-accent);font-size:0.85rem;bottom:10px;font-weight:700;">QR VERIFICADO CON ÉXITO</div>
      `;
      scanPrompt.textContent = 'Alineación de datos del servidor: Conforme.';
      
      // Mostrar Página de Verificación Pública
      setTimeout(() => {
        renderScannerResult('HVT-0982'); // Cargar Carlos Gómez por defecto
      }, 800);
    }, 2000);
  }

  if (qrBox) qrBox.addEventListener('click', triggerScannerSimulation);
  if (startScanBtn) startScanBtn.addEventListener('click', triggerScannerSimulation);
}

function renderScannerResult(workerId) {
  const resultPanel = document.getElementById('sim-result-panel');
  if (!resultPanel) return;

  const worker = operariosList.find(o => o.id === workerId) || operariosList[0];

  let statusHtml = '<span class="status-badge status-badge-active">ACTIVO - CONFORME</span>';
  if (worker.estado === 'PENDIENTE') statusHtml = '<span class="status-badge status-badge-pending">EVALUACIÓN PENDIENTE</span>';
  if (worker.estado === 'VENCIDO') statusHtml = '<span class="status-badge status-badge-inactive">EXCLUIDO - VENCIDO</span>';

  resultPanel.innerHTML = `
    <div class="validation-result-header">
      <h4 style="font-weight:800;color:var(--color-text);">EVIDENCIA TÉCNICA PÚBLICA</h4>
      ${statusHtml}
    </div>
    <div style="display:flex;gap:1.5rem;align-items:center;background:var(--color-bg-subtle);padding:1rem;border-radius:6px;border:1px solid var(--color-border);">
      <div style="font-size:2rem;width:55px;height:55px;border-radius:4px;background:var(--color-dark-800);border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;">👤</div>
      <div>
        <h5 style="font-size:1.1rem;font-weight:700;color:var(--color-text);">${worker.nombre}</h5>
        <p style="font-size:0.8rem;color:var(--color-slate-500);">ID Operativo: <strong>${worker.id}</strong></p>
      </div>
    </div>
    <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;">
      <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--color-border);padding-bottom:0.4rem;">
        <span style="color:var(--color-slate-500);">Competencia Evaluada:</span>
        <span style="font-weight:600;">${worker.cargo}</span>
      </div>
      <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--color-border);padding-bottom:0.4rem;">
        <span style="color:var(--color-slate-500);">Fecha de Evaluación:</span>
        <span style="font-weight:600;">12/10/2025</span>
      </div>
      <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--color-border);padding-bottom:0.4rem;">
        <span style="color:var(--color-slate-500);">Vence el Criterio:</span>
        <span style="font-weight:600;color:${worker.estado === 'VENCIDO' ? 'var(--color-error)' : 'inherit'};">${worker.vencimiento}</span>
      </div>
      <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--color-border);padding-bottom:0.4rem;">
        <span style="color:var(--color-slate-500);">Código Hash del Certificado:</span>
        <span style="font-family:monospace;font-size:0.75rem;color:var(--color-accent);">${worker.certHash}</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:var(--color-slate-500);">Inspector Validador:</span>
        <span style="font-weight:600;">Fdo. Técnico de Tercera Parte - Hurvant</span>
      </div>
    </div>
    <div style="background:hsla(160,84%,39%,0.05);border:1px solid hsla(160,84%,39%,0.2);border-radius:6px;padding:0.8rem;font-size:0.8rem;color:var(--color-accent);text-align:center;font-weight:600;margin-top:0.5rem;">
      🔐 Firma Digital Criptográfica Trazable de Conformidad Emitida en España
    </div>
  `;

  resultPanel.style.display = 'flex';
}

/* ==========================================================================
   5. WIZARD INTERACTIVO DE AUDITORÍA (Riesgo Legal)
   ========================================================================== */
function initAuditWizard() {
  const wizardPanels = document.querySelectorAll('.wizard-step-panel');
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const progressBar = document.querySelector('.wizard-progress-bar');
  
  let currentStep = 1;
  const totalSteps = 4;

  if (!nextBtn) return;

  function updateWizard() {
    // Actualizar paneles
    wizardPanels.forEach(panel => {
      panel.classList.remove('active');
      if (parseInt(panel.getAttribute('data-step')) === currentStep) {
        panel.classList.add('active');
      }
    });

    // Actualizar nodos visuales arriba
    stepNodes.forEach(node => {
      const stepVal = parseInt(node.textContent);
      node.className = 'wizard-step-node';
      if (stepVal === currentStep) {
        node.classList.add('active');
      } else if (stepVal < currentStep) {
        node.classList.add('completed');
      }
    });

    // Actualizar barra de progreso superior
    const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
    progressBar.style.width = progressPercent + '%';

    // Manejar visibilidad de botones
    if (currentStep === 1) {
      prevBtn.style.visibility = 'hidden';
    } else {
      prevBtn.style.visibility = 'visible';
    }

    if (currentStep === totalSteps) {
      nextBtn.textContent = 'Nueva Evaluación';
    } else {
      nextBtn.textContent = 'Siguiente Paso';
    }
  }

  nextBtn.addEventListener('click', () => {
    if (currentStep === totalSteps) {
      // Resetear
      currentStep = 1;
      // Resetear inputs del form
      document.querySelectorAll('.audit-wizard-container input').forEach(input => input.value = '');
      document.getElementById('risk-result-box').style.display = 'none';
      document.getElementById('wizard-inputs-form').style.display = 'flex';
      updateWizard();
      return;
    }

    // Validaciones básicas de campos obligatorios
    if (currentStep === 1) {
      const selectedSector = document.getElementById('wizard-sector-select').value;
      if (!selectedSector) {
        alert('Por favor, selecciona un sector primario.');
        return;
      }
    }

    if (currentStep === 2) {
      const numWorkers = document.getElementById('w-workers-num').value;
      if (!numWorkers) {
        alert('Por favor, indica un número estimado de trabajadores en planta.');
        return;
      }
    }

    if (currentStep === 3) {
      const email = document.getElementById('w-email').value;
      const compName = document.getElementById('w-company-name').value;
      if (!email || !compName) {
        alert('Por favor, introduce el nombre de la empresa y tu correo electrónico de contacto.');
        return;
      }
      
      // Procesar e ir al paso 4 (Cálculo del riesgo)
      calculateAndShowRisk();
    }

    currentStep++;
    updateWizard();
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizard();
    }
  });

  function calculateAndShowRisk() {
    const sector = document.getElementById('wizard-sector-select').value;
    const workers = parseInt(document.getElementById('w-workers-num').value) || 0;
    const machinery = parseInt(document.getElementById('w-machinery-num').value) || 0;
    const caeStatus = document.getElementById('w-cae-status').value;

    // Fórmula del cálculo de riesgo simulado
    let riskFactor = 15; // Base del 15% de riesgo inherente
    
    if (sector === 'construccion') riskFactor += 30;
    if (sector === 'logistica') riskFactor += 20;
    if (sector === 'industria') riskFactor += 25;
    if (sector === 'renovables') riskFactor += 18;
    if (sector === 'agro') riskFactor += 15;

    if (workers > 50) riskFactor += 10;
    if (machinery > 15) riskFactor += 15;
    if (caeStatus === 'no') riskFactor += 18; // Falta de CAE eleva riesgo legal radicalmente

    if (riskFactor > 95) riskFactor = 95; // Coto máximo

    // Renderizar círculo gauge interactivo
    const circleFill = document.getElementById('risk-svg-fill');
    const circleVal = document.getElementById('risk-svg-value');
    const riskLabel = document.getElementById('risk-severity-label');
    const riskDesc = document.getElementById('risk-descr-text');

    if (circleFill && circleVal) {
      // Longitud del círculo es 2 * pi * r (r=70) => 440 aprox.
      const strokeOffset = 440 - (440 * riskFactor) / 100;
      
      circleVal.textContent = riskFactor + '%';
      
      // Animación suave de pintado
      setTimeout(() => {
        circleFill.style.strokeDashoffset = strokeOffset;
      }, 300);

      // Evaluar severidad
      if (riskFactor >= 75) {
        circleFill.style.stroke = 'var(--color-error)';
        riskLabel.textContent = 'NIVEL CRÍTICO: Exposición a Responsabilidad Penal Elevada';
        riskLabel.style.color = 'var(--color-error)';
        riskDesc.textContent = 'Tu empresa cuenta con una alta densidad de operarios de riesgo y uso de maquinaria con un control de actividades descentralizado. Un accidente grave supondría una alta probabilidad de recargo de prestaciones de hasta el 50% y derivación penal directa para los administradores.';
      } else if (riskFactor >= 45) {
        circleFill.style.stroke = 'var(--color-warning)';
        riskLabel.textContent = 'RIESGO MODERADO: Brecha de Trazabilidad Documental';
        riskLabel.style.color = 'var(--color-warning)';
        riskDesc.textContent = 'Existen deficiencias de verificación en la adecuación de equipos o en los esquemas prácticos de las contratas concurrentes. Te sugerimos implantar auditorías RD 1215 de tercera parte y el Pasaporte Técnico QR para mitigar la responsabilidad solidaria.';
      } else {
        circleFill.style.stroke = 'var(--color-accent)';
        riskLabel.textContent = 'RIESGO CONTROLADO: Margen de Optimización Técnica';
        riskLabel.style.color = 'var(--color-accent)';
        riskDesc.textContent = 'La exposición es baja, pero existe margen de mejora de cara a la digitalización del CAE y alineación con estándares UNE ISO 17024 de competencias de operarios.';
      }
    }
  }
}

/* ==========================================================================
   6. FILTRADO DINÁMICO EN BLOG Y LEAD MAGNETS
   ========================================================================== */
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const postCards = document.querySelectorAll('.blog-post-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      postCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
        
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        }
      });
    });
  });
}

/* ==========================================================================
   7. VENTANA MODAL PARA TRAZABILIDAD Y CERTIFICADOS
   ========================================================================== */
function initModalHandlers() {
  const overlay = document.getElementById('trace-modal-overlay');
  const closeBtn = document.querySelector('.close-modal-btn');
  
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  }
}

// Ventana modal dinámica para ver evidencias y trazabilidad criptográfica
window.openTraceModal = function(id) {
  const overlay = document.getElementById('trace-modal-overlay');
  const modalContent = document.getElementById('trace-modal-dynamic-content');
  
  if (!overlay || !modalContent) return;

  // Cargar contenido adaptado según el ID
  if (id.startsWith('HVT-')) {
    const worker = operariosList.find(o => o.id === id);
    
    modalContent.innerHTML = `
      <div style="background:var(--color-dark-800);border:1px solid var(--color-border);border-radius:8px;padding:1.5rem;display:flex;flex-direction:column;gap:1.2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h5 style="font-size:1.1rem;font-weight:700;color:var(--color-text);">${worker.nombre}</h5>
            <p style="font-size:0.8rem;color:var(--color-slate-500);">Puesto de Trabajo Evaluado</p>
          </div>
          <span class="status-badge ${worker.estado === 'ACTIVO' ? 'status-badge-active' : 'status-badge-pending'}">${worker.estado}</span>
        </div>
        <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:0.6rem;">
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Normativa de Referencia:</span>
            <strong>UNE-EN ISO/IEC 17024 Concept</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Tipo de Competencia:</span>
            <strong>${worker.cargo}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Examen Práctico Realizado:</span>
            <strong>Apto con Conformidad de Campo</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Localización del Examen (GPS):</span>
            <strong style="color:var(--color-accent);">40.416775, -3.703790 (Madrid Sur Planta A)</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Firma del Inspector Evaluador:</span>
            <strong>Fdo. José Rivas (Nº Col. 9843-COITI)</strong>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.2rem;margin-top:0.5rem;">
            <span style="color:var(--color-slate-500);font-size:0.75rem;">Firma Hash del Certificado:</span>
            <span style="font-family:monospace;font-size:0.75rem;background:var(--color-dark-900);padding:0.4rem;border-radius:4px;border:1px solid var(--color-border);word-break:break-all;color:var(--color-accent);">${worker.certHash}</span>
          </div>
        </div>
        <button class="btn-portal btn-portal-primary w-full flex-center" style="margin-top:0.5rem;" onclick="alert('Descargando Evidencia de Cumplimiento Técnico PDF (Simulado)...')">Descargar Expediente Completo de Evidencias (ZIP)</button>
      </div>
    `;
  } else if (id.startsWith('EQ-')) {
    const equip = equiposList.find(e => e.tag === id);
    modalContent.innerHTML = `
      <div style="background:var(--color-dark-800);border:1px solid var(--color-border);border-radius:8px;padding:1.5rem;display:flex;flex-direction:column;gap:1.2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h5 style="font-size:1.1rem;font-weight:700;color:var(--color-text);">${equip.tipo}</h5>
            <p style="font-size:0.8rem;color:var(--color-slate-500);">Tag Identificador: <strong>${equip.tag}</strong></p>
          </div>
          <span class="status-badge ${equip.adecuacion.includes('OK') ? 'status-badge-active' : 'status-badge-inactive'}">${equip.adecuacion}</span>
        </div>
        <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:0.6rem;">
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Legislación Aplicable:</span>
            <strong>Real Decreto 1215/1997 Anexo I y II</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Tipo de Inspección:</span>
            <strong>Adecuación y Validación de Condiciones de Trabajo</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Estado de Puntos de Control:</span>
            <strong>42 Conformes / 0 Deficiencias Críticas</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Último Informe Técnico:</span>
            <strong style="color:var(--color-accent);">INF-1215-${equip.tag}-V1</strong>
          </div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:0.4rem;">
            <span>Siguiente Auditoría de Control:</span>
            <strong>${equip.revision}</strong>
          </div>
        </div>
        <button class="btn-portal btn-portal-primary w-full flex-center" style="margin-top:0.5rem;" onclick="alert('Descargando Certificado RD 1215 PDF Firmado Digitalmente (Simulado)...')">Descargar Informe y Placa de Conformidad (PDF)</button>
      </div>
    `;
  } else {
    // CAE o General
    modalContent.innerHTML = `
      <div style="background:var(--color-dark-800);border:1px solid var(--color-border);border-radius:8px;padding:1.5rem;text-align:center;display:flex;flex-direction:column;gap:1rem;">
        <div style="font-size:2.5rem;color:var(--color-accent);">📄</div>
        <h5 style="font-size:1.1rem;font-weight:700;color:var(--color-text);">Trazabilidad Documental de Contratas Concurrentes</h5>
        <p style="font-size:0.85rem;color:var(--color-slate-300);">La documentación técnica cargada ha sido auditada conforme por el sistema de verificación inteligente Hurvant. Todos los metadatos de firmas cualificadas han sido validados.</p>
        <div style="font-family:monospace;font-size:0.75rem;background:var(--color-dark-900);padding:0.5rem;border-radius:4px;border:1px solid var(--color-border);color:var(--color-accent);">
          HASH-ID: SHA256-${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}
        </div>
        <button class="btn-portal btn-portal-primary w-full flex-center" onclick="overlay.classList.remove('active')">Aceptar y Cerrar</button>
      </div>
    `;
  }

  // Activar modal
  overlay.classList.add('active');
}
