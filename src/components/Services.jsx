import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, FileText, Sliders, GraduationCap, Wrench, Shield, ArrowRight, Cpu,
  Award, ShieldCheck, BookOpen, Search, Code, Camera, Sparkles, Layers
} from 'lucide-react';
import PageMeta from './shared/PageMeta';

export default function Services() {
  const [activeDivision, setActiveDivision] = useState('all');

  const divisions = [
    { id: 'all', name: 'Todas las Divisiones', icon: Layers },
    { id: 'certification', name: 'HURVANT CERTIFICATION', icon: Award },
    { id: 'inspection', name: 'HURVANT INSPECTION', icon: ShieldCheck },
    { id: 'academy', name: 'HURVANT ACADEMY', icon: BookOpen },
    { id: 'trace', name: 'HURVANT TRACE', icon: Search },
    { id: 'digital', name: 'HURVANT DIGITAL', icon: Code },
    { id: 'photo', name: 'HURVANT PHOTO', icon: Camera }
  ];

  const ecosystemServices = [
    {
      id: 'cert-personas',
      divisionId: 'certification',
      divisionName: 'HURVANT CERTIFICATION',
      title: 'Certificación de Personas (ISO 17024)',
      subtitle: 'Evaluación objetiva y examen de competencias operativas',
      link: '/servicios/evaluacion-operativa',
      icon: Award,
      image: '/eval_interview.jpg',
      color: 'from-indigo-600 to-hurvant-navy',
      textColor: 'text-hurvant-indigo',
      badge: 'UNE-EN ISO/IEC 17024',
      description: 'Evaluamos y certificamos las competencias técnicas reales de operarios, supervisores y técnicos en entornos exigentes.',
      details: [
        'Exámenes prácticos y teóricos bajo esquemas acreditados ISO 17024.',
        'Observación directa de desempeño y hábitos seguros en campo.',
        'Evaluación funcional y de capacidad real en contexto de fatiga y presión.',
        'Emisión de certificados individuales con firma digital inmutable SHA-256.',
        'Inclusión en el Registro Público Nacional de Competencias Verificables.'
      ]
    },
    {
      id: 'cert-maquinaria',
      divisionId: 'certification',
      divisionName: 'HURVANT CERTIFICATION',
      title: 'Certificación y Adecuación de Equipos (RD 1215/97)',
      subtitle: 'Validación reglamentaria de seguridad en maquinaria industrial',
      link: '/servicios/inspeccion-equipos',
      icon: Wrench,
      image: '/heavy_machinery_loader.png',
      color: 'from-indigo-700 to-slate-900',
      textColor: 'text-hurvant-navy',
      badge: 'UNE-EN ISO/IEC 17020 | RD 1215/1997',
      description: 'Inspección técnica reglamentaria y adecuación de maquinaria pesada, equipos de elevación e instalaciones conforme a la norma UNE-EN ISO/IEC 17020 y Ley 31/1995 LPRL.',
      details: [
        'Inspección reglamentaria de carretillas, grúas, PEMP y plataformas.',
        'Dictámenes de adecuación según Real Decreto 1215/1997 Anexo I y II.',
        'Pruebas mecánicas de estabilidad y dispositivos de seguridad.',
        'Marcado con código QR único para inspección inmediata de autoridades.',
        'Informe técnico con plena validez jurídica e institucional.'
      ]
    },
    {
      id: 'insp-ndt',
      divisionId: 'inspection',
      divisionName: 'HURVANT INSPECTION',
      title: 'Ensayos No Destructivos (NDT / END)',
      subtitle: 'Inspección volumétrica y superficial de estructuras (ISO 9712)',
      link: '/servicios/ensayos-no-destructivos',
      icon: ShieldCheck,
      image: '/ndt_testing_weld.png',
      color: 'from-cyan-600 to-slate-900',
      textColor: 'text-hurvant-cyan',
      badge: 'UNE-EN ISO 9712',
      description: 'Detección de defectos estructurales, discontinuidades en soldadura y fatiga de materiales críticos sin alterar el activo.',
      details: [
        'Ultrasonidos (UT), Partículas Magnéticas (MT) y Líquidos Penetrantes (PT).',
        'Inspectores cualificados Nivel II / III bajo norma UNE-EN ISO 9712.',
        'Inspección visual avanzada (VT) según norma UNE-EN ISO 17637.',
        'Supervisión de líneas de vida y puntos de anclaje (UNE-EN 795).',
        'Inspección de estanterías metálicas de almacén (UNE-EN 15635).'
      ]
    },
    {
      id: 'acad-ia',
      divisionId: 'academy',
      divisionName: 'HURVANT ACADEMY',
      title: 'Capacitación Técnica Avanzada y Plataforma IA',
      subtitle: 'e-Learning adaptativo y generación de contenidos con IA',
      link: '/contacto',
      icon: BookOpen,
      color: 'from-emerald-600 to-slate-900',
      textColor: 'text-emerald-600',
      badge: 'Plataforma IA Adaptativa',
      description: 'Formación técnica reglada y programas de reacondicionamiento operativo mediante algoritmos de generación de contenidos asistidos por Inteligencia Artificial.',
      details: [
        'Cursos técnicos interactivos adaptados al nivel del operario.',
        'Generación automatizada de casos de prueba y simulaciones operativas.',
        'Formación reglada en prevención de riesgos operativos específicos.',
        'Certificación de superación e integración con el portal de acreditación.',
        'Evaluación continua del progreso técnico sin interferir en el turno.'
      ]
    },
    {
      id: 'trace-osint',
      divisionId: 'trace',
      divisionName: 'HURVANT TRACE',
      title: 'Investigación Técnica, Due Diligence y OSINT',
      subtitle: 'Verificación documental inmutable e inteligencia de fuentes abiertas',
      link: 'https://trace.hurvant.com',
      icon: Search,
      color: 'from-amber-600 to-slate-900',
      textColor: 'text-amber-600',
      badge: 'Verification & OSINT IA',
      description: 'Verificación de autenticidad documental, Due Diligence técnica y análisis de reputación y riesgo respaldados por IA.',
      details: [
        'Verificación inalterable de firmas criptográficas e historial de certificados.',
        'Auditoría de integridad documental para licitaciones y aseguradoras.',
        'Análisis OSINT de fuentes abiertas para evaluar solvencia técnica.',
        'Detección de fraudes en credenciales profesionales o diplomas.',
        'Informes ejecutivos de riesgo documental e idoneidad corporativa.'
      ]
    },
    {
      id: 'digital-saas',
      divisionId: 'digital',
      divisionName: 'HURVANT DIGITAL',
      title: 'Soluciones Digitales, ERP/CRM e Inteligencia Artificial',
      subtitle: 'El habilitador tecnológico del Grupo Hurvant y clientes externos',
      link: '/servicios',
      icon: Code,
      color: 'from-indigo-600 to-slate-900',
      textColor: 'text-indigo-600',
      badge: 'Software & SaaS Corporativo',
      description: 'Hurvant Digital es la división tecnológica que desarrolla el software, los sistemas ERP/CRM y los motores de IA que impulsan todo el Ecosistema Hurvant y ofrece soluciones SaaS a clientes externos.',
      details: [
        'Desarrollo de Plataformas SaaS de Gestión de Inspección y Registro.',
        'Sistemas ERP y CRM a medida orientados al cumplimiento ISO.',
        'Integración de Algoritmos de Inteligencia Artificial en Procesos.',
        'Automatización de Flujos de Trabajo e Infraestructura en la Nube.',
        'Consultoría de Transformación Digital para Entidades Industriales.'
      ]
    },
    {
      id: 'photo-doc',
      divisionId: 'photo',
      divisionName: 'HURVANT PHOTO',
      title: 'Documentación Fotográfica Técnica e Industrial',
      subtitle: 'Contenido visual profesional e imagen corporativa de alta calidad',
      link: 'https://www.hurvantphoto.com',
      icon: Camera,
      color: 'from-purple-600 to-slate-900',
      textColor: 'text-purple-600',
      badge: 'Contenido Visual Profesional',
      description: 'Servicios de fotografía técnica para inspección de activos, así como fotografía industrial, corporativa, inmobiliaria y cobertura de eventos.',
      details: [
        'Documentación fotográfica de precisión para informes de inspección.',
        'Fotografía de instalaciones industriales, maquinaria y procesos.',
        'Fotografía corporativa para equipos directivos y comunicación.',
        'Fotografía inmobiliaria y de patrimonio arquitectónico.',
        'Cobertura visual completa de eventos corporativos e institucionales.'
      ]
    }
  ];

  const filteredServices = activeDivision === 'all' 
    ? ecosystemServices 
    : ecosystemServices.filter(s => s.divisionId === activeDivision);

  return (
    <>
      <PageMeta 
        title="Divisiones y Catálogo del Ecosistema | GRUPO HURVANT"
        description="Conozca el catálogo de divisiones del Grupo Hurvant: Hurvant Certification, Hurvant Inspection, Hurvant Academy, Hurvant Trace, Hurvant Digital y Hurvant Photo."
        canonicalPath="/servicios"
        ogImage="https://www.hurvant.com/institutional_authority_hero.png"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 animate-slide-up" aria-labelledby="services-title">
        {/* Cabecera */}
        <header className="border-b-3 border-hurvant-navy pb-6 mb-8 sm:mb-12">
          <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Ecosistema Empresarial</span>
          <h2 id="services-title" className="text-2xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
            Divisiones Especializadas del Grupo Hurvant
          </h2>
          <p className="text-slate-500 font-medium mt-1.5 text-xs sm:text-base">
            Cada división responde a un área de excelencia técnica respaldada por una única gobernanza de calidad e innovación.
          </p>
        </header>

        {/* Filtro por División con scroll horizontal suave en móvil */}
        <div className="overflow-x-auto pb-2 mb-8 sm:mb-12 scrollbar-none">
          <div className="flex flex-nowrap md:flex-wrap gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200/80 min-w-max md:min-w-0">
            {divisions.map((div) => {
              const Icon = div.icon;
              const active = activeDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivision(div.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] ${
                    active
                      ? 'bg-hurvant-navy text-white shadow-md'
                      : 'text-slate-700 hover:text-hurvant-navy hover:bg-white/80 active:bg-white'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{div.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Servicios y Divisiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={service.id}
                className="bg-white rounded-custom-lg border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden relative border-b border-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-hurvant-cyan text-[10px] font-black uppercase px-3 py-1 rounded-full border border-slate-700 tracking-wider">
                      {service.badge}
                    </div>
                  </div>
                )}

                <div className="p-8 space-y-6 flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-hurvant-indigo">
                      <IconComponent className="h-4 w-4" />
                      <span>{service.divisionName}</span>
                    </div>
                    <h3 className="text-xl font-black text-hurvant-navy tracking-tight">{service.title}</h3>
                    <span className="text-xs font-semibold text-slate-500 block">{service.subtitle}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block">Características Destacadas:</span>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className={`font-black shrink-0 ${service.textColor}`}>✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  {service.link.startsWith('http') ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-hurvant-navy hover:text-hurvant-indigo transition-colors"
                    >
                      <span>Acceder al Portal de {service.divisionName}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-hurvant-navy hover:text-hurvant-indigo transition-colors"
                    >
                      <span>Más información sobre {service.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Módulo de HURVANT DIGITAL como Habilitador Tecnológico */}
        <div className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 shadow-lg border-l-4 border-hurvant-indigo space-y-6">
          <div className="flex items-center gap-3">
            <Code className="h-7 w-7 text-hurvant-cyan" />
            <div>
              <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block">Habilitador Tecnológico Transversal</span>
              <h3 className="text-2xl font-black text-white">HURVANT DIGITAL</h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-medium">
            HURVANT DIGITAL es la división encargada del desarrollo de la tecnología de vanguardia, software de trazabilidad inmutable, motores de Inteligencia Artificial y plataformas SaaS que impulsan a todas las demás divisiones del Grupo Hurvant. Además, ofrece estos mismos desarrollos a organizaciones externas que buscan la máxima excelencia digital.
          </p>

          <a
            href="https://digital.hurvant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-hurvant-indigo to-hurvant-cyan text-white font-bold text-xs px-6 py-3 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <span>Ir a digital.hurvant.com</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
