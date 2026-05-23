import React, { useState } from 'react';
import { 
  Building, Users, FileText, Database, ShieldAlert, 
  TrendingUp, Search, Plus, UserPlus, LogOut, Lock, 
  CheckCircle2, AlertTriangle, Compass, Cpu, Download, Key,
  HelpCircle, Trash2
} from 'lucide-react';

export const REGULATED_JOBS = [
  {
    category: "Equipos de Elevación e Izaje (UNE / ITC)",
    options: [
      "Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)",
      "Operador de Carretillas Elevadoras >10t (Norma UNE 58451)",
      "Operador de Plataformas Elevadoras PEMP (Norma UNE 58923)",
      "Operador de Grúa Móvil Autopropulsada - Cat. A (ITC MIE-AEM-4)",
      "Operador de Grúa Móvil Autopropulsada - Cat. B (ITC MIE-AEM-4)",
      "Operador de Grúa Torre y Pluma (ITC MIE-AEM-2)",
      "Operador de Puente Grúa, Pórticos y Semipórticos (Norma UNE 58140-1)",
      "Operador de Manipuladoras Telescópicas (Norma UNE 58451 / UNE-EN 1459)",
      "Operador de Maquinaria de Movimiento de Tierras y Excavadoras (UNE-EN 474)"
    ]
  },
  {
    category: "Seguridad Industrial y Trabajos de Riesgo Especial",
    options: [
      "Técnico en Trabajos en Altura y Escaleras de Acceso (RD 2177/2004)",
      "Técnico en Trabajos Verticales y Acceso por Cuerda - ANETVA / IRATA",
      "Operador de Trabajos en Espacios Confinados (Atmósferas Peligrosas)",
      "Técnico Supervisor de Líneas de Vida y Puntos de Anclaje (UNE-EN 795)",
      "Operador de Rescate Industrial en Altura y Espacios Confinados",
      "Supervisor de Trabajos en Atmósferas Explosivas (Directiva ATEX)"
    ]
  },
  {
    category: "Ensayos No Destructivos (END / NDT - ISO 9712)",
    options: [
      "Técnico END - Inspección Visual (VT) Nivel II / III (UNE-EN ISO 9712)",
      "Técnico END - Partículas Magnéticas (MT) Nivel II / III (UNE-EN ISO 9712)",
      "Técnico END - Líquidos Penetrantes (PT) Nivel II / III (UNE-EN ISO 9712)",
      "Técnico END - Ultrasonidos (UT) Nivel II / III (UNE-EN ISO 9712)",
      "Técnico END - Radiografía Industrial (RT) Nivel II (UNE-EN ISO 9712)",
      "Inspector Técnico de Soldaduras y Construcción (UNE-EN ISO 17637)"
    ]
  },
  {
    category: "Organismos de Inspección y Adecuación (ISO 17020 / RD 1215)",
    options: [
      "Inspector Técnico de Adecuación de Equipos de Trabajo (RD 1215/1997)",
      "Inspector Técnico de Estanterías Metálicas y Almacenes (UNE-EN 15635)",
      "Inspector de Seguridad en Máquinas e Integración Robotizada (ISO 12100)"
    ]
  }
];

export default function ClientDashboard() {
  // 1. Estados de Autenticación
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    token2FA: ''
  });
  const [loginError, setLoginError] = useState('');

  // 2. Estado de Navegación del Panel de Control
  const [activeTab, setActiveTab] = useState('overview');

  // 3. Base de Datos en Memoria de Operarios (Con datos iniciales e inserción reactiva)
  const [operators, setOperators] = useState([
    {
      id: 'OP-4892',
      nombre: 'Carlos Gómez Sánchez',
      dni: '50389281A',
      puesto: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)',
      empresa: 'Mercadona Logística España',
      aptitudMedica: true,
      fechaAlta: '12/10/2025',
      estado: 'Auditado - Conforme',
      hash: 'sha256-4a7b9c9d8e7f6a5b4c3d2e1f9876543210abcdef0123456789abcdef012345'
    },
    {
      id: 'OP-1143',
      nombre: 'Marta Ruiz Calvo',
      dni: '02899482B',
      puesto: 'Operador de Trabajos en Espacios Confinados (Atmósferas Peligrosas)',
      empresa: 'Hilton Hotels Group',
      aptitudMedica: true,
      fechaAlta: '04/02/2026',
      estado: 'Auditado - Conforme',
      hash: 'sha256-8e2d1f9d8c7b6a5a4c3b2a1a0987654321fedcba0123456789abcdef987654'
    },
    {
      id: 'OP-0731',
      nombre: 'Jorge Benítez Ortiz',
      dni: '48299104K',
      puesto: 'Técnico en Trabajos en Altura y Escaleras de Acceso (RD 2177/2004)',
      empresa: 'FCC Industrial Madrid',
      aptitudMedica: true,
      fechaAlta: '15/05/2023',
      estado: 'Reevaluación Requerida',
      hash: 'sha256-f5c2b9f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0'
    },
    {
      id: 'OP-3048',
      nombre: 'Sofía Lanza Mendoza',
      dni: '78299120Z',
      puesto: 'Operador de Plataformas Elevadoras PEMP (Norma UNE 58923)',
      empresa: 'Mercadona Logística España',
      aptitudMedica: false,
      fechaAlta: '20/05/2026',
      estado: 'Inapto Temporal',
      hash: 'sha256-3bb4c5d6e7f8g9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4'
    }
  ]);

  // 4. Base de Datos de Empresas Clientes
  const [companies, setCompanies] = useState([
    {
      id: 'EMP-01',
      nombre: 'Mercadona Logística España',
      cif: 'A-46000000',
      centro: 'C.L. Madrid Sur (Valdemoro)',
      operarios: 14,
      conformidad: '100%',
      puestoCritico: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)'
    },
    {
      id: 'EMP-02',
      nombre: 'Hilton Hotels Group',
      cif: 'B-82000012',
      centro: 'División Baleares (Palma)',
      operarios: 12,
      conformidad: '88%',
      puestoCritico: 'Técnico en Trabajos en Altura y Escaleras de Acceso (RD 2177/2004)'
    },
    {
      id: 'EMP-03',
      nombre: 'FCC Industrial Madrid',
      cif: 'A-28000948',
      centro: 'Parque de Maquinaria Norte',
      operarios: 6,
      conformidad: '100%',
      puestoCritico: 'Operador de Grúa Móvil Autopropulsada - Cat. A (ITC MIE-AEM-4)'
    }
  ]);

  // 5. Estado para Filtrados / Buscadores
  const [companySearch, setCompanySearch] = useState('');
  const [operatorSearch, setOperatorSearch] = useState('');
  const [traceSearch, setTraceSearch] = useState('');

  // 6. Formulario de Alta de Operario
  const [newOperator, setNewOperator] = useState({
    nombre: '',
    dni: '',
    puesto: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)',
    empresa: 'Mercadona Logística España',
    aptitudMedica: true
  });

  const [registerSuccess, setRegisterSuccess] = useState(false);

  // 6b. Formulario de Alta de Empresa Cliente
  const [newCompany, setNewCompany] = useState({
    nombre: '',
    cif: '',
    centro: '',
    puestoCritico: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)'
  });

  const [companySuccess, setCompanySuccess] = useState(false);
  const [showCompanyGuide, setShowCompanyGuide] = useState(false);

  // 6c. Estados para Gestión de Usuarios
  const [users, setUsers] = useState([
    {
      id: 'USR-3172',
      nombre: 'Antonio Contreras',
      email: 'styloaerografo@gmail.com',
      rol: 'Gerente (Superusuario)',
      numColegiado: 'DNI-31723466A',
      fechaAlta: '23/05/2026'
    },
    {
      id: 'USR-9843',
      nombre: 'Carlos Valenzuela',
      email: 'carlos.valenzuela@hurvant.com',
      rol: 'Inspector Técnico',
      numColegiado: '9843-COITI',
      fechaAlta: '10/01/2025'
    },
    {
      id: 'USR-1120',
      nombre: 'Amparo Serra Rius',
      email: 'amparo.serra@hurvant.com',
      rol: 'Inspector Técnico',
      numColegiado: '11202-COITI',
      fechaAlta: '02/02/2025'
    },
    {
      id: 'USR-0021',
      nombre: 'Javier Rivas Moreno',
      email: 'javier.rivas@hurvant.com',
      rol: 'Administrador',
      numColegiado: '7829-COITI',
      fechaAlta: '15/12/2024'
    },
    {
      id: 'USR-3049',
      nombre: 'Marta Soler Puig',
      email: 'marta.soler@mercadona.es',
      rol: 'Prevencionista',
      numColegiado: 'PRL-48299',
      fechaAlta: '18/10/2025'
    }
  ]);
  const [userSearch, setUserSearch] = useState('');
  const [newUser, setNewUser] = useState({
    nombre: '',
    email: '',
    rol: 'Inspector Técnico',
    numColegiado: ''
  });
  const [userSuccess, setUserSuccess] = useState(false);

  // 6d. Usuario actualmente activo logueado en sesión
  const [currentUser, setCurrentUser] = useState({
    nombre: 'Carlos Valenzuela',
    rol: 'Inspector Técnico',
    numColegiado: '9843-COITI'
  });

  // 7. Gestión de Formularios e Inputs de Login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Credenciales de Control y Gobernanza Hurvant
    if (credentials.email === 'admin@hurvant.com' && credentials.password === 'hurvant2026') {
      setCurrentUser({
        nombre: 'Carlos Valenzuela',
        rol: 'Inspector Técnico',
        numColegiado: '9843-COITI'
      });
      setIsLoggedIn(true);
      setLoginError('');
    } else if (credentials.email === 'styloaerografo@gmail.com' && credentials.password === '318275') {
      setCurrentUser({
        nombre: 'Antonio Contreras',
        rol: 'Gerente (Superusuario)',
        numColegiado: 'GER-31723'
      });
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Credenciales incorrectas. Verifique los datos de acceso proporcionados.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ email: '', password: '', token2FA: '' });
  };

  // 8. Registro reactivo de Operarios
  const handleOperatorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewOperator(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleOperatorSubmit = (e) => {
    e.preventDefault();
    
    if (!newOperator.nombre || !newOperator.dni) {
      alert('Por favor, cumplimente los campos obligatorios del operario.');
      return;
    }

    // Generar hash SHA-256 e ID del operario de forma inalterable y reactiva
    const randomHex = Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('');
    const mockHash = `sha256-${randomHex}`;
    const opId = `OP-${Math.floor(1000 + Math.random() * 9000)}`;

    const freshOp = {
      id: opId,
      nombre: newOperator.nombre,
      dni: newOperator.dni.toUpperCase(),
      puesto: newOperator.puesto,
      empresa: newOperator.empresa,
      aptitudMedica: newOperator.aptitudMedica,
      fechaAlta: new Date().toLocaleDateString('es-ES'),
      estado: newOperator.aptitudMedica ? 'Auditado - Conforme' : 'Inapto Temporal',
      hash: mockHash
    };

    setOperators(prev => [freshOp, ...prev]);
    
    // Incrementar conteo en la base de datos de empresas
    setCompanies(prev => prev.map(comp => {
      if (comp.nombre === newOperator.empresa) {
        return { 
          ...comp, 
          operarios: comp.operarios + 1,
          conformidad: newOperator.aptitudMedica ? comp.conformidad : '83%'
        };
      }
      return comp;
    }));

    setNewOperator({
      nombre: '',
      dni: '',
      puesto: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)',
      empresa: 'Mercadona Logística España',
      aptitudMedica: true
    });

    setRegisterSuccess(true);
    setTimeout(() => setRegisterSuccess(false), 3000);
  };

  // 8b. Registro reactivo de Empresas Clientes
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setNewCompany(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    
    if (!newCompany.nombre || !newCompany.cif || !newCompany.centro) {
      alert('Por favor, cumplimente los campos obligatorios de la empresa.');
      return;
    }

    const compId = `EMP-${Math.floor(10 + Math.random() * 90)}`;
    const freshComp = {
      id: compId,
      nombre: newCompany.nombre,
      cif: newCompany.cif.toUpperCase(),
      centro: newCompany.centro,
      operarios: 0,
      conformidad: '100%',
      puestoCritico: newCompany.puestoCritico
    };

    setCompanies(prev => [freshComp, ...prev]);

    setNewCompany({
      nombre: '',
      cif: '',
      centro: '',
      puestoCritico: 'Operador de Carretillas Elevadoras hasta 10t (Norma UNE 58451)'
    });

    setCompanySuccess(true);
    setTimeout(() => setCompanySuccess(false), 3000);
  };

  // 8c. Baja reactiva de empresas y operarios
  const handleDeleteCompany = (id, nombre) => {
    // Verificar si la empresa tiene operarios asignados en el estado
    const hasOperators = operators.some(op => op.empresa === nombre);
    if (hasOperators) {
      alert(`No se puede dar de baja la empresa "${nombre}" porque tiene operarios asignados en el Onboarding. Por favor, dé de baja a los operarios primero.`);
      return;
    }

    if (window.confirm(`¿Está seguro de que desea dar de baja la empresa "${nombre}"? Esta acción se registrará en el ledger de calidad.`)) {
      setCompanies(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleDeleteOperator = (id, nombre, empresa, aptitudMedica) => {
    if (window.confirm(`¿Está seguro de que desea dar de baja al operario "${nombre}"? Esta acción revocará todas sus firmas criptográficas.`)) {
      setOperators(prev => prev.filter(op => op.id !== id));

      // Decrementar conteo en la base de datos de empresas y recalcular conformidad
      setCompanies(prev => prev.map(comp => {
        if (comp.nombre === empresa) {
          const updatedOperatorsCount = Math.max(0, comp.operarios - 1);
          
          // Recalcular conformidad en base a los operarios restantes
          const remainingOps = operators.filter(o => o.id !== id && o.empresa === empresa);
          const remainingAptos = remainingOps.filter(o => o.aptitudMedica).length;
          const newConformity = updatedOperatorsCount > 0 
            ? `${Math.round((remainingAptos / updatedOperatorsCount) * 100)}%` 
            : '100%';

          return { 
            ...comp, 
            operarios: updatedOperatorsCount,
            conformidad: newConformity
          };
        }
        return comp;
      }));
    }
  };

  // 8d. Gestión de usuarios del sistema
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (!newUser.nombre || !newUser.email) {
      alert('Por favor, cumplimente los campos obligatorios del usuario.');
      return;
    }

    const usrId = `USR-${Math.floor(1000 + Math.random() * 9000)}`;
    const freshUsr = {
      id: usrId,
      nombre: newUser.nombre,
      email: newUser.email.toLowerCase(),
      rol: newUser.rol,
      numColegiado: newUser.rol === 'Inspector Técnico' || newUser.rol === 'Administrador' ? newUser.numColegiado || 'Col-N/A' : 'N/A',
      fechaAlta: new Date().toLocaleDateString('es-ES')
    };

    setUsers(prev => [freshUsr, ...prev]);

    setNewUser({
      nombre: '',
      email: '',
      rol: 'Inspector Técnico',
      numColegiado: ''
    });

    setUserSuccess(true);
    setTimeout(() => setUserSuccess(false), 3000);
  };

  const handleDeleteUser = (id, nombre) => {
    if (nombre === currentUser.nombre) {
      alert(`No se puede dar de baja a sí mismo mientras su sesión de ${currentUser.rol} esté iniciada.`);
      return;
    }

    if (window.confirm(`¿Está seguro de que desea dar de baja al usuario "${nombre}"? Se revocarán todas sus credenciales de firma.`)) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  // 9. Filtrado de datos por buscador
  const filteredCompanies = companies.filter(c => 
    c.nombre.toLowerCase().includes(companySearch.toLowerCase()) || 
    c.cif.toLowerCase().includes(companySearch.toLowerCase())
  );

  const filteredOperators = operators.filter(op => 
    op.nombre.toLowerCase().includes(operatorSearch.toLowerCase()) || 
    op.dni.toLowerCase().includes(operatorSearch.toLowerCase()) || 
    op.empresa.toLowerCase().includes(operatorSearch.toLowerCase())
  );

  const filteredUsers = users.filter(usr => 
    usr.nombre.toLowerCase().includes(userSearch.toLowerCase()) || 
    usr.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const matchedTrace = traceSearch.trim() 
    ? operators.find(op => op.hash.includes(traceSearch.trim())) 
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-slide-up">
      {!isLoggedIn ? (
        /* ======================== PANTALLA DE ACCESO (LOGIN) ======================== */
        <section className="max-w-md mx-auto py-16" aria-labelledby="login-title">
          <div className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-lg relative bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-indigo/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <header className="text-center space-y-2 mb-8">
              <div className="h-12 w-12 bg-indigo-50 border border-indigo-100 text-hurvant-indigo rounded-full flex items-center justify-center mx-auto shadow-xs">
                <Lock className="h-5.5 w-5.5" />
              </div>
              <h2 id="login-title" className="text-xl font-black text-hurvant-navy">Portal Privado Hurvant</h2>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Acceso restringido para empresas clientes, prevencionistas e inspectores técnicos autorizados.
              </p>
            </header>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {loginError && (
                <div className="bg-rose-50 border border-rose-150 p-4 rounded-custom-md text-xs font-semibold text-rose-600 text-center">
                  {loginError}
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 block">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={credentials.email}
                  onChange={handleLoginChange}
                  placeholder="admin@hurvant.com"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350 font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="text-xs font-bold text-slate-700 block">Contraseña de Control</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={credentials.password}
                  onChange={handleLoginChange}
                  placeholder="••••••••"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="token2FA" className="text-xs font-bold text-slate-700 block">Código Token 2FA (Simulado)</label>
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Seguridad Criptográfica</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="token2FA"
                    name="token2FA"
                    value={credentials.token2FA}
                    onChange={handleLoginChange}
                    placeholder="Ej. 123456"
                    className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350 font-mono tracking-widest text-center"
                  />
                  <Key className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110"
              >
                <Lock className="h-4 w-4" />
                <span>Acceder a la Consola</span>
              </button>
            </form>

            <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-custom-md text-[10px] text-slate-500 text-left mt-6 space-y-2 leading-normal font-semibold">
               <span className="text-hurvant-indigo font-bold uppercase block tracking-wider text-center">Acceso de Demostración y Gobernanza:</span>
               
               <div className="border-b border-slate-200/60 pb-1.5">
                 <strong className="text-[9px] text-slate-400 block uppercase">1. Perfil Inspector Técnico</strong>
                 <div>Usuario: <code className="bg-slate-200 px-1 rounded font-mono font-bold text-slate-700">admin@hurvant.com</code></div>
                 <div>Password: <code className="bg-slate-200 px-1 rounded font-mono font-bold text-slate-700">hurvant2026</code></div>
               </div>

               <div>
                 <strong className="text-[9px] text-hurvant-indigo block uppercase">2. Superusuario Gerente (Antonio Contreras)</strong>
                 <div>Usuario: <code className="bg-slate-200 px-1 rounded font-mono font-bold text-slate-700">styloaerografo@gmail.com</code></div>
                 <div>Password: <code className="bg-slate-200 px-1 rounded font-mono font-bold text-slate-700">318275</code></div>
               </div>
             </div>
          </div>
        </section>
      ) : (
        /* ======================== CONSOLA DE CONTROL GENERAL (DASHBOARD) ======================== */
        <section className="space-y-8" aria-labelledby="dashboard-title">
          {/* Cabecera del Panel Privado */}
          <div className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-md bg-white flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-br from-hurvant-navy to-hurvant-indigo text-white rounded-custom-md flex items-center justify-center shadow-sm">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-hurvant-indigo bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Panel de Control Privado
                </span>
                <h2 id="dashboard-title" className="text-xl sm:text-2xl font-black text-hurvant-navy tracking-tight mt-1">
                  Ecosistema de Gobernanza y Actividad Técnica
                </h2>
              </div>
            </div>
            
            <div className="flex items-center gap-4 shrink-0 bg-slate-50 p-2.5 rounded-custom-md border border-slate-200/60">
              <div className="text-right">
                <strong className="text-xs font-black text-slate-800 block">{currentUser.nombre}</strong>
                <span className="text-[10px] text-slate-500 font-semibold block">{currentUser.rol}</span>
              </div>
              <button
                onClick={handleLogout}
                className="h-9 w-9 bg-rose-50 hover:bg-rose-100/80 text-rose-600 border border-rose-200 rounded-custom-sm flex items-center justify-center active:scale-95 transition-all"
                title="Cerrar Sesión"
              >
                <LogOut className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* ESTRUCTURA DE PANTALLA: MENÚ Y CONTENIDO */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 1. BARRA LATERAL (SIDEBAR) */}
            <aside className="lg:w-64 shrink-0">
              <nav className="glass-card rounded-custom-lg p-4 border border-slate-200/60 shadow-xs bg-white flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible" role="navigation">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'overview'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <TrendingUp className="h-4.5 w-4.5" />
                  <span>Resumen Operativo</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('companies')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'companies'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <Building className="h-4.5 w-4.5" />
                  <span>Empresas Clientes</span>
                </button>

                <button
                  onClick={() => setActiveTab('operators')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'operators'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <Users className="h-4.5 w-4.5" />
                  <span>Operarios & Onboarding</span>
                </button>

                <button
                  onClick={() => setActiveTab('users')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'users'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <UserPlus className="h-4.5 w-4.5" />
                  <span>Control de Usuarios</span>
                </button>

                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'documents'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <FileText className="h-4.5 w-4.5" />
                  <span>Dictámenes y Archivos</span>
                </button>

                <button
                  onClick={() => setActiveTab('traceability')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-custom-md text-xs font-bold transition-all shrink-0 w-full text-left ${
                    activeTab === 'traceability'
                      ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-sm'
                      : 'text-slate-650 hover:bg-slate-50 hover:text-hurvant-navy'
                  }`}
                >
                  <Database className="h-4.5 w-4.5" />
                  <span>Base Datos Criptográfica</span>
                </button>
              </nav>
            </aside>

            {/* 2. CONTENEDOR DE CONTENIDO PRINCIPAL */}
            <div className="flex-grow">
              
              {/* SUBVISTA A: RESUMEN OPERATIVO */}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  {/* Banner de Guía Rápida e Inicio */}
                  <div className="glass-card rounded-custom-lg p-5 border border-slate-200/60 bg-gradient-to-r from-hurvant-navy/5 to-indigo-500/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="space-y-1 text-center md:text-left">
                      <h4 className="text-xs font-black text-hurvant-indigo uppercase tracking-wider flex items-center gap-1.5 justify-center md:justify-start">
                        <Building className="h-4 w-4" />
                        Gobernanza y Actividad Técnico-Operativa
                      </h4>
                      <p className="text-xs text-slate-650 font-semibold leading-relaxed">
                        Para iniciar el onboarding de operarios y realizar ensayos o dictámenes, es necesario dar de alta a la empresa cliente asociada primero.
                      </p>
                    </div>
                    <div className="flex gap-2.5 shrink-0">
                      <button
                        onClick={() => {
                          setActiveTab('companies');
                          setShowCompanyGuide(true);
                        }}
                        className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-hurvant-navy border border-slate-200 font-bold text-xs px-4 py-2.5 rounded-custom-md shadow-xs active:scale-97 transition-all"
                      >
                        <HelpCircle className="h-3.5 w-3.5 text-hurvant-indigo" />
                        <span>¿Cómo crear Empresa Cliente?</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('companies')}
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs px-4 py-2.5 rounded-custom-md shadow-xs active:scale-97 transition-all hover:brightness-110"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Alta de Empresa</span>
                      </button>
                    </div>
                  </div>
                  {/* Tarjetas de Métricas en Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <article className="glass-card rounded-custom-lg p-5 border border-slate-200/60 bg-white shadow-xs">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Empresas Clientes</span>
                      <strong className="text-3xl font-black text-hurvant-navy block">{companies.length}</strong>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1 block">✓ Todas con Auditoría Almacén</span>
                    </article>
                    <article className="glass-card rounded-custom-lg p-5 border border-slate-200/60 bg-white shadow-xs">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Operarios Registrados</span>
                      <strong className="text-3xl font-black text-hurvant-navy block">{operators.length}</strong>
                      <span className="text-[10px] text-indigo-600 font-bold mt-1 block">⚡ Onboarding Activo Reactivo</span>
                    </article>
                    <article className="glass-card rounded-custom-lg p-5 border border-slate-200/60 bg-white shadow-xs">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Certificados Conformes</span>
                      <strong className="text-3xl font-black text-emerald-600 block">
                        {operators.filter(o => o.estado.includes('Conforme')).length}
                      </strong>
                      <span className="text-[10px] text-slate-500 font-medium mt-1 block">🔐 Firmas Inalterables SHA-256</span>
                    </article>
                    <article className="glass-card rounded-custom-lg p-5 border border-slate-200/60 bg-white shadow-xs">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Tasa de Conformidad</span>
                      <strong className="text-3xl font-black text-hurvant-navy block">92.4%</strong>
                      <span className="text-[10px] text-rose-500 font-bold mt-1 block">⚠ 1 Operador Inapto Temporal</span>
                    </article>
                  </div>

                  {/* Estado de Calidad y Progreso */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-xs space-y-4">
                      <h3 className="text-sm font-black text-hurvant-navy uppercase tracking-widest border-b border-slate-100 pb-2">
                        Estado de Onboarding por Sector
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                            <span>Sector Logística y Distribución</span>
                            <span>95% Completo</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-hurvant-navy to-hurvant-indigo rounded-full" style={{ width: '95%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                            <span>Sector Hotelería y Servicios</span>
                            <span>83% Completo</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-hurvant-navy to-hurvant-cyan rounded-full" style={{ width: '83%' }} />
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-xs space-y-4">
                      <h3 className="text-sm font-black text-hurvant-navy uppercase tracking-widest border-b border-slate-100 pb-2">
                        Últimos Registros del Ledger Técnico
                      </h3>
                      <ul className="space-y-3">
                        {operators.slice(0, 3).map((op) => (
                          <li key={op.id} className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                            <div>
                              <strong className="text-slate-800 block font-bold">{op.nombre}</strong>
                              <span className="text-slate-400 font-mono text-[9px]">{op.hash.substring(0, 32)}...</span>
                            </div>
                            <span className="text-[10px] font-bold text-hurvant-indigo shrink-0">{op.fechaAlta}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              )}

              {/* SUBVISTA B: EMPRESAS CLIENTES */}
              {activeTab === 'companies' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in items-start">
                  
                  {/* Formulario de Alta de Empresa Cliente a la Izquierda */}
                  <form onSubmit={handleCompanySubmit} className="lg:col-span-5 glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-md space-y-5">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <h3 className="text-sm font-black text-hurvant-navy uppercase tracking-widest flex items-center gap-2">
                        <Building className="h-4.5 w-4.5 text-hurvant-indigo" />
                        Alta de Empresa Cliente
                      </h3>
                      <button
                        type="button"
                        onClick={() => setShowCompanyGuide(true)}
                        className="text-[10px] font-black text-hurvant-indigo bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-indigo-100 active:scale-95 transition-all cursor-pointer"
                        title="Ver instrucciones detalladas"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        ¿Cómo crear?
                      </button>
                    </div>

                    {companySuccess && (
                      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-custom-md text-xs font-bold text-emerald-700 text-center flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                        <span>¡Empresa Cliente Registrada con Éxito!</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="comp-nombre" className="text-xs font-bold text-slate-700 block">Nombre Comercial de la Empresa</label>
                      <input
                        type="text"
                        id="comp-nombre"
                        name="nombre"
                        required
                        value={newCompany.nombre}
                        onChange={handleCompanyChange}
                        placeholder="Ej. Mercadona Logística España"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="comp-cif" className="text-xs font-bold text-slate-700 block">CIF / NIF de la Empresa</label>
                      <input
                        type="text"
                        id="comp-cif"
                        name="cif"
                        required
                        value={newCompany.cif}
                        onChange={handleCompanyChange}
                        placeholder="Ej. A-46000000"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-mono font-bold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="comp-centro" className="text-xs font-bold text-slate-700 block">Centro de Trabajo Principal</label>
                      <input
                        type="text"
                        id="comp-centro"
                        name="centro"
                        required
                        value={newCompany.centro}
                        onChange={handleCompanyChange}
                        placeholder="Ej. C.L. Madrid Sur (Valdemoro)"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="comp-puestoCritico" className="text-xs font-bold text-slate-700 block">Puesto Crítico a Certificar</label>
                      <select
                        id="comp-puestoCritico"
                        name="puestoCritico"
                        value={newCompany.puestoCritico}
                        onChange={handleCompanyChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 bg-white focus:outline-none focus:border-hurvant-indigo transition-all font-semibold"
                      >
                        {REGULATED_JOBS.map((group, gIdx) => (
                          <optgroup key={gIdx} label={group.category} className="font-bold text-slate-800 bg-slate-50">
                            {group.options.map((opt, oIdx) => (
                              <option key={oIdx} value={opt} className="font-normal text-slate-700 bg-white">
                                {opt}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110"
                    >
                      <Plus className="h-4.5 w-4.5" />
                      <span>Registrar Empresa Cliente</span>
                    </button>
                  </form>

                  {/* Directorio de Empresas a la Derecha */}
                  <div className="lg:col-span-7 space-y-4 w-full">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-slate-100 pb-3">
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest shrink-0">Directorio de Empresas Autorizadas</h3>
                      <div className="relative w-full sm:max-w-xs">
                        <input
                          type="text"
                          value={companySearch}
                          onChange={(e) => setCompanySearch(e.target.value)}
                          placeholder="Buscar CIF o Nombre..."
                          className="w-full text-xs px-3.5 py-1.5 pl-8 rounded-custom-md border border-slate-250 focus:outline-none focus:border-hurvant-indigo"
                        />
                        <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2" />
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
                      {filteredCompanies.map(comp => (
                        <article key={comp.id} className="bg-white border border-slate-200/60 rounded-custom-md p-5 shadow-xs hover:border-hurvant-indigo/25 transition-all hover:shadow-sm">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div className="space-y-0.5">
                              <strong className="text-sm font-bold text-hurvant-navy block">{comp.nombre}</strong>
                              <span className="text-[10px] text-slate-400 block font-mono">CIF: {comp.cif} | Registro ID: {comp.id}</span>
                            </div>
                            <span className="text-[10px] font-bold bg-indigo-50 border border-indigo-100 text-hurvant-indigo px-3 py-0.5 rounded-full uppercase shrink-0">
                              {comp.operarios} Operarios
                            </span>
                          </div>

                          <div className="text-xs text-slate-650 space-y-1.5 pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div><span className="font-semibold text-slate-500">Centro:</span> {comp.centro}</div>
                            <div><span className="font-semibold text-slate-500">Puesto Crítico:</span> {comp.puestoCritico}</div>
                          </div>

                          <div className="mt-3 pt-2 border-t border-dashed border-slate-100 flex justify-between items-center text-xs">
                            <div className="flex items-center gap-1">
                              <span className="text-slate-500 font-medium">Tasa Conformidad:</span>
                              <span className="font-black text-emerald-600 uppercase tracking-wide">{comp.conformidad}</span>
                            </div>
                            <button
                              onClick={() => handleDeleteCompany(comp.id, comp.nombre)}
                              className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-150 hover:bg-rose-100 px-2 py-1 rounded flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              title="Dar de baja empresa"
                            >
                              <Trash2 className="h-3 w-3" />
                              <span>Dar de Baja</span>
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUBVISTA C: OPERARIOS & ONBOARDING (ALTA REACTIVA) */}
              {activeTab === 'operators' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in items-start">
                  
                  {/* Formulario de Alta a la Izquierda */}
                  <form onSubmit={handleOperatorSubmit} className="lg:col-span-5 glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-md space-y-5">
                    <h3 className="text-sm font-black text-hurvant-navy uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
                      <UserPlus className="h-4.5 w-4.5 text-hurvant-indigo" />
                      Alta y Onboarding de Operario
                    </h3>

                    {registerSuccess && (
                      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-custom-md text-xs font-bold text-emerald-700 text-center flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                        <span>¡Operario y Hash SHA-256 Registrados!</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="nombre" className="text-xs font-bold text-slate-700 block">Nombre Completo</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={newOperator.nombre}
                        onChange={handleOperatorChange}
                        placeholder="Ej. Ana Belén Ortiz"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="dni" className="text-xs font-bold text-slate-700 block">DNI / NIE</label>
                      <input
                        type="text"
                        id="dni"
                        name="dni"
                        required
                        value={newOperator.dni}
                        onChange={handleOperatorChange}
                        placeholder="Ej. 12345678X"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-mono font-bold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="puesto" className="text-xs font-bold text-slate-700 block">Puesto Técnico de Trabajo</label>
                      <select
                        id="puesto"
                        name="puesto"
                        value={newOperator.puesto}
                        onChange={handleOperatorChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 bg-white focus:outline-none focus:border-hurvant-indigo transition-all font-semibold"
                      >
                        {REGULATED_JOBS.map((group, gIdx) => (
                          <optgroup key={gIdx} label={group.category} className="font-bold text-slate-800 bg-slate-50">
                            {group.options.map((opt, oIdx) => (
                              <option key={oIdx} value={opt} className="font-normal text-slate-700 bg-white">
                                {opt}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="empresa" className="text-xs font-bold text-slate-700 block">Empresa Cliente Asignada</label>
                      <select
                        id="empresa"
                        name="empresa"
                        value={newOperator.empresa}
                        onChange={handleOperatorChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 bg-white focus:outline-none focus:border-hurvant-indigo transition-all font-semibold"
                      >
                        {companies.map(c => (
                          <option key={c.id} value={c.nombre}>{c.nombre}</option>
                        ))}
                      </select>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-slate-400 font-semibold">¿La empresa no figura en la lista?</span>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab('companies');
                            setShowCompanyGuide(true);
                          }}
                          className="text-[10px] font-bold text-hurvant-indigo hover:underline flex items-center gap-0.5 cursor-pointer bg-transparent border-none p-0"
                        >
                          <Plus className="h-3 w-3" />
                          Crear Empresa Cliente
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-custom-md border border-slate-200/60">
                      <input
                        type="checkbox"
                        id="aptitudMedica"
                        name="aptitudMedica"
                        checked={newOperator.aptitudMedica}
                        onChange={handleOperatorChange}
                        className="h-4.5 w-4.5 rounded-custom-sm text-hurvant-indigo border-slate-350 focus:ring-hurvant-indigo"
                      />
                      <label htmlFor="aptitudMedica" className="text-xs text-slate-650 font-bold select-none cursor-pointer leading-normal">
                        Aptitud Médica Laboral Validada en Vigor
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110"
                    >
                      <Plus className="h-4.5 w-4.5" />
                      <span>Registrar y Firmar Operario</span>
                    </button>
                  </form>

                  {/* Tabla / Lista de Operarios Registrados a la Derecha */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex justify-between items-center gap-4 border-b border-slate-100 pb-3">
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Base de Datos de Operarios Firmados</h3>
                      <div className="relative">
                        <input
                          type="text"
                          value={operatorSearch}
                          onChange={(e) => setOperatorSearch(e.target.value)}
                          placeholder="Buscar DNI u operario..."
                          className="text-xs px-3 py-1.5 pl-8 rounded-custom-md border border-slate-250 focus:outline-none focus:border-hurvant-indigo w-44"
                        />
                        <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredOperators.map(op => (
                        <article key={op.id} className="bg-white border border-slate-200/60 rounded-custom-md p-5 shadow-xs hover:border-hurvant-indigo/25 transition-all">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div>
                              <strong className="text-sm font-bold text-hurvant-navy">{op.nombre}</strong>
                              <span className="text-[10px] text-slate-400 block font-mono">DNI: {op.dni} | Registro ID: {op.id}</span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase ${
                                op.aptitudMedica 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}>
                                {op.estado}
                              </span>
                              <button
                                onClick={() => handleDeleteOperator(op.id, op.nombre, op.empresa, op.aptitudMedica)}
                                className="text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-150 p-1.5 rounded flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-xs"
                                title="Dar de baja operario"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-650 space-y-1 pt-2 border-t border-slate-100">
                            <div><span className="font-semibold">Puesto:</span> {op.puesto}</div>
                            <div><span className="font-semibold">Empresa:</span> {op.empresa}</div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-dashed border-slate-100 flex flex-col gap-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                              <Cpu className="h-3.5 w-3.5 text-hurvant-indigo" />
                              Evidencia SHA-256 Ledger:
                            </span>
                            <code className="text-[10px] font-mono bg-slate-900 text-slate-300 p-2 rounded-custom-sm block break-all text-center select-all shadow-inner leading-normal">
                              {op.hash}
                            </code>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUBVISTA C2: GESTIÓN DE USUARIOS */}
              {activeTab === 'users' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in items-start">
                  
                  {/* Formulario de Alta de Usuario a la Izquierda */}
                  <form onSubmit={handleUserSubmit} className="lg:col-span-5 glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-md space-y-5">
                    <h3 className="text-sm font-black text-hurvant-navy uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
                      <UserPlus className="h-4.5 w-4.5 text-hurvant-indigo" />
                      Alta de Usuario del Sistema
                    </h3>

                    {userSuccess && (
                      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-custom-md text-xs font-bold text-emerald-700 text-center flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                        <span>¡Usuario Registrado con Éxito!</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="user-nombre" className="text-xs font-bold text-slate-700 block">Nombre Completo</label>
                      <input
                        type="text"
                        id="user-nombre"
                        name="nombre"
                        required
                        value={newUser.nombre}
                        onChange={handleUserChange}
                        placeholder="Ej. Amparo Serra Rius"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="user-email" className="text-xs font-bold text-slate-700 block">Correo Electrónico</label>
                      <input
                        type="email"
                        id="user-email"
                        name="email"
                        required
                        value={newUser.email}
                        onChange={handleUserChange}
                        placeholder="Ej. amparo.serra@hurvant.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="user-rol" className="text-xs font-bold text-slate-700 block">Cargo / Rol Autorizado</label>
                      <select
                        id="user-rol"
                        name="rol"
                        value={newUser.rol}
                        onChange={handleUserChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 bg-white focus:outline-none focus:border-hurvant-indigo transition-all font-semibold"
                      >
                        <option value="Administrador">Administrador de Sistema</option>
                        <option value="Inspector Técnico">Inspector Técnico (Firmante)</option>
                        <option value="Prevencionista">Técnico de Prevención (PRL)</option>
                        <option value="Empleado">Empleado / Consultor</option>
                      </select>
                    </div>

                    {(newUser.rol === 'Inspector Técnico' || newUser.rol === 'Administrador') && (
                      <div className="space-y-1.5 animate-fade-in">
                        <label htmlFor="user-colegiado" className="text-xs font-bold text-slate-700 block">Nº de Colegiado o Licencia Técnica</label>
                        <input
                          type="text"
                          id="user-colegiado"
                          name="numColegiado"
                          required
                          value={newUser.numColegiado}
                          onChange={handleUserChange}
                          placeholder="Ej. 11202-COITI"
                          className="w-full text-xs px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all font-mono font-bold"
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110"
                    >
                      <Plus className="h-4.5 w-4.5" />
                      <span>Registrar Nuevo Usuario</span>
                    </button>
                  </form>

                  {/* Directorio de Usuarios Autorizados a la Derecha */}
                  <div className="lg:col-span-7 space-y-4 w-full">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-slate-100 pb-3">
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest shrink-0">Directorio de Usuarios de Sistema</h3>
                      <div className="relative w-full sm:max-w-xs">
                        <input
                          type="text"
                          value={userSearch}
                          onChange={(e) => setUserSearch(e.target.value)}
                          placeholder="Buscar nombre o email..."
                          className="w-full text-xs px-3.5 py-1.5 pl-8 rounded-custom-md border border-slate-250 focus:outline-none focus:border-hurvant-indigo"
                        />
                        <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2" />
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
                      {filteredUsers.map(usr => (
                        <article key={usr.id} className="bg-white border border-slate-200/60 rounded-custom-md p-5 shadow-xs hover:border-hurvant-indigo/25 transition-all hover:shadow-sm">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div className="space-y-0.5">
                              <strong className="text-sm font-bold text-hurvant-navy block">{usr.nombre}</strong>
                              <span className="text-[10px] text-slate-400 block font-mono">Email: {usr.email} | ID: {usr.id}</span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase ${
                                usr.rol === 'Administrador'
                                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                                  : usr.rol === 'Inspector Técnico'
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : usr.rol === 'Prevencionista'
                                  ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                                  : 'bg-slate-50 text-slate-700 border-slate-200'
                              }`}>
                                {usr.rol}
                              </span>
                              <button
                                onClick={() => handleDeleteUser(usr.id, usr.nombre)}
                                className="text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-150 p-1.5 rounded flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-xs"
                                title="Dar de baja usuario"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-650 space-y-1.5 pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div><span className="font-semibold text-slate-500">Alta:</span> {usr.fechaAlta}</div>
                            <div><span className="font-semibold text-slate-500">Colegiado / Reg:</span> <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-slate-700">{usr.numColegiado}</code></div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUBVISTA D: GESTIÓN DOCUMENTAL */}
              {activeTab === 'documents' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-base font-black text-hurvant-navy uppercase tracking-widest border-b border-slate-150 pb-2">Dictámenes e Informes Técnicos Vigentes</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-xs flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">ISO 17024 - Personas</span>
                        <h4 className="text-base font-black text-hurvant-navy">Acta General del Comité Técnico Evaluador (E-HVT-01)</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Documento que acredita las calificaciones prácticas y de aptitud correspondientes a la convocatoria de carretilleros T4.
                        </p>
                      </div>
                      <button
                        onClick={() => alert('Descarga de resolución técnica firmada digitalmente (Simulada)...')}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs px-5 py-3 rounded-custom-md hover:brightness-110 active:scale-98 transition-all"
                      >
                        <Download className="h-4.5 w-4.5" />
                        <span>Descargar Acta PDF</span>
                      </button>
                    </article>

                    <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-white shadow-xs flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full uppercase">ISO 17020 - Inspección</span>
                        <h4 className="text-base font-black text-hurvant-navy">Dictamen Técnico de Adecuación FL-3000 Frontal (E-HVT-02)</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Dictamen e informe técnico vinculante conforme a los requisitos de seguridad establecidos en el Real Decreto 1215/1997.
                        </p>
                      </div>
                      <button
                        onClick={() => alert('Descarga de dictamen de adecuación técnica (Simulado)...')}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs px-5 py-3 rounded-custom-md hover:brightness-110 active:scale-98 transition-all"
                      >
                        <Download className="h-4.5 w-4.5" />
                        <span>Descargar Dictamen PDF</span>
                      </button>
                    </article>
                  </div>
                </div>
              )}

              {/* SUBVISTA E: TRAZABILIDAD Y AUDITORÍA (BASE DE DATOS CRIPTOGRÁFICA) */}
              {activeTab === 'traceability' && (
                <div className="space-y-6 animate-fade-in">
                  <header className="space-y-2 max-w-2xl border-b border-slate-150 pb-4">
                    <h3 className="text-base font-black text-hurvant-navy uppercase tracking-widest">Base de Datos de Trazabilidad Criptográfica</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      El Ledger de Trazabilidad de Hurvant firma digitalmente cada evento de evaluación in situ. Puede auditar la veracidad del hash inmutable de cualquier operario para verificar la autenticidad frente a inspecciones ministeriales.
                    </p>
                  </header>

                  <div className="glass-card rounded-custom-lg p-6 border border-slate-200/60 bg-slate-50 shadow-xs max-w-2xl">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3 text-center">Buscador del Libro de Firmas SHA-256</h4>
                    <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={traceSearch}
                          onChange={(e) => setTraceSearch(e.target.value)}
                          placeholder="Introduzca o pegue el código hash del operario..."
                          className="w-full text-xs px-3.5 py-3 pl-9 rounded-custom-md border border-slate-250 focus:outline-none focus:border-hurvant-indigo font-mono text-[10px] sm:text-xs"
                        />
                        <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                      </div>
                    </form>

                    {/* Resultado de Trazabilidad */}
                    {matchedTrace ? (
                      <article className="mt-6 bg-white border border-emerald-200 rounded-custom-md p-5 animate-fade-in space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                            <CheckCircle2 className="h-4.5 w-4.5" />
                            Registro Certificado Conforme
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Ledger ID: {matchedTrace.id}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-650">
                          <div><span className="font-semibold block text-slate-500">Operario Firmado:</span> <strong className="text-slate-850 font-bold">{matchedTrace.nombre}</strong></div>
                          <div><span className="font-semibold block text-slate-500">Identificador DNI:</span> <strong className="text-slate-850 font-mono font-bold">{matchedTrace.dni}</strong></div>
                          <div><span className="font-semibold block text-slate-500">Esquema Aplicado:</span> <strong className="text-slate-850 font-semibold">{matchedTrace.puesto}</strong></div>
                          <div><span className="font-semibold block text-slate-500">Empresa Cliente:</span> <strong className="text-slate-850 font-semibold">{matchedTrace.empresa}</strong></div>
                          <div><span className="font-semibold block text-slate-500">Inspector Firmante:</span> <strong className="text-hurvant-indigo font-bold">Fdo. J. Rivas (Col. 9843-COITI)</strong></div>
                          <div><span className="font-semibold block text-slate-500 flex items-center gap-1"><Compass className="h-3.5 w-3.5" /> GPS de Evaluación in-situ:</span> <strong className="text-slate-850 font-mono">40.416775, -3.703790</strong></div>
                        </div>

                        <div className="bg-slate-900 text-slate-300 p-3.5 rounded-custom-md border border-slate-800 text-center">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Huella Digital Inmutable Validada:</span>
                          <code className="text-[10px] sm:text-xs font-mono break-all font-bold select-all leading-normal text-center">{matchedTrace.hash}</code>
                        </div>
                      </article>
                    ) : traceSearch.trim() ? (
                      <div className="mt-6 bg-white border border-rose-150 rounded-custom-md p-6 text-center animate-fade-in space-y-2">
                        <AlertTriangle className="h-8 w-8 text-rose-500 mx-auto" />
                        <strong className="text-rose-600 text-xs sm:text-sm font-bold uppercase block">Firma Criptográfica No Registrada</strong>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                          El código hash introducido no figura en los registros autorizados de Hurvant. El registro es nulo frente a inspecciones.
                        </p>
                      </div>
                    ) : (
                      <div className="mt-6 text-center p-6 border border-dashed border-slate-200 rounded-custom-md text-xs text-slate-450 font-semibold">
                        Pegue un hash SHA-256 de operario para auditar y desencriptar su trazabilidad de campo.
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Modal Guía Técnica: Cómo crear la Empresa Cliente */}
      {showCompanyGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="guide-title">
          <div className="bg-white border border-slate-200 rounded-custom-lg shadow-2xl max-w-xl w-full overflow-hidden animate-scale-up relative">
            
            {/* Header del Modal */}
            <div className="bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-indigo-200 uppercase tracking-widest block font-sans">Manual de Calidad y Gobernanza</span>
                  <h3 id="guide-title" className="text-lg font-black tracking-tight font-sans">¿Cómo crear una Empresa Cliente?</h3>
                </div>
                <button 
                  onClick={() => setShowCompanyGuide(false)}
                  className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full flex items-center justify-center active:scale-95 transition-all text-sm font-bold cursor-pointer"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido del Modal (Pasos con Íconos) */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto font-sans">
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Para mantener la trazabilidad criptográfica y cumplir con la legislación española (Real Decreto 1215/1997 y normas UNE/ENAC), siga estas directrices para la correcta alta en el ledger de gobernanza de Hurvant:
              </p>

              <div className="space-y-4">
                {/* Paso 1 */}
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-150 text-hurvant-indigo font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    1
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-bold text-hurvant-navy block">Razón Social y CIF/NIF Válido</strong>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Introduzca el Nombre Comercial de la empresa y su CIF/NIF en vigor en España (ej. A-12345678 o B-98765432). El sistema formateará e indexará el CIF en mayúsculas de manera inmutable para futuros dictámenes oficiales.
                    </p>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-150 text-hurvant-indigo font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    2
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-bold text-hurvant-navy block">Definición de Centro Geográfico</strong>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Indique el emplazamiento físico o planta industrial (ej. <em>Planta Martorell, C.L. Girona Norte</em>). Esto permite geolocalizar de forma precisa las evaluaciones de campo in-situ por satélite.
                    </p>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-150 text-hurvant-indigo font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    3
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-bold text-hurvant-navy block">Asignación de Puesto Crítico</strong>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Seleccione el perfil o maquinaria principal a certificar en el centro. El sistema adaptará automáticamente los flujos de idoneidad técnica en base a la norma UNE aplicable (ej. UNE 58451 para carretillas).
                    </p>
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-150 text-hurvant-indigo font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    4
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-bold text-hurvant-navy block">Vinculación de Operarios</strong>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Una vez registrada, la empresa aparecerá reactivamente en el directorio. En ese instante, ya podrá seleccionar esta empresa en la sección de <strong>"Alta y Onboarding de Operario"</strong> para registrar a sus trabajadores y firmar sus firmas criptográficas SHA-256.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nota de Seguridad */}
              <div className="bg-amber-50 border border-amber-150 p-4 rounded-custom-md text-[11px] text-amber-850 leading-relaxed font-semibold flex gap-2.5 items-start">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-900 mb-0.5">Seguridad y Cumplimiento Normativo</strong>
                  Los datos registrados pasan a formar parte del Libro de Registro Digital de Hurvant. Cualquier cambio estructural requiere un dictamen de auditoría firmado por un inspector colegiado.
                </div>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end gap-3 font-sans">
              <button 
                onClick={() => setShowCompanyGuide(false)}
                className="bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs px-5 py-2.5 rounded-custom-md active:scale-97 hover:brightness-110 shadow-sm transition-all cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
