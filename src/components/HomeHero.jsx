import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Award, ShieldAlert, Cpu, Eye, CheckCircle2, ArrowRight, 
  AlertTriangle, Users, Layers, Globe, ShieldCheck, BookOpen, Search, 
  Camera, Code, Sparkles, Building2, Scale, Zap, Check, ExternalLink,
  Shield, KeyRound, Lock, FileCheck2, Activity, ArrowUpRight
} from 'lucide-react';
import SocialProof from './SocialProof';
import PageMeta from './shared/PageMeta';

export default function HomeHero() {
  // Estado para el Showcase de Banners Interactivo
  const [activeBanner, setActiveBanner] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Estado para el Widget de Verificación Instantánea de Certificados
  const [certQuery, setCertQuery] = useState('');
  const [certResult, setCertResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const bannerSlides = [
    {
      id: 'team',
      badge: 'EQUIPO TÉCNICO REGISTRADO',
      badgeColor: 'bg-indigo-50 text-hurvant-indigo border-indigo-200',
      title: 'Equipo de Inspección y Certificación In Situ',
      subtitle: 'Inspectores técnicos cualificados realizando auditorías de conformidad y verificación de competencia operativa.',
      image: '/hurvant_team_inspection_hero.png',
      alt: 'Equipo de Inspectores Técnicos Hurvant',
      pill: 'Inspección & Certificación In Situ'
    },
    {
      id: 'cert',
      badge: 'ISO/IEC 17024',
      badgeColor: 'bg-indigo-50 text-hurvant-indigo border-indigo-200',
      title: 'Certificación de Personas y Competencia Operativa',
      subtitle: 'Evaluación objetiva in situ de la capacidad técnica de operarios bajo estándar internacional ISO 17024.',
      image: '/institutional_authority_hero.png',
      alt: 'Certificación de Personas e Inspección Técnica Hurvant',
      pill: 'Certificación Tercera Parte'
    },
    {
      id: 'machinery',
      badge: 'RD 1215/1997',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Adecuación e Inspección Técnica de Maquinaria',
      subtitle: 'Auditoría física rigorosa de equipos de trabajo y marcado QR inmutable de conformidad jurídica.',
      image: '/heavy_machinery_loader.png',
      alt: 'Inspección de Maquinaria y Equipos Industriales RD 1215/1997',
      pill: 'Seguridad Industrial'
    },
    {
      id: 'ndt',
      badge: 'ISO 9712 | END',
      badgeColor: 'bg-cyan-50 text-hurvant-cyan-dark border-cyan-200',
      title: 'Ensayos No Destructivos e Integridad de Activos',
      subtitle: 'Inspección avanzada (UT, MT, PT, VT) para la prevención de fallos críticos en infraestructuras.',
      image: '/hero_engineers_inspection.png',
      alt: 'Inspectores realizando Ensayos No Destructivos in situ',
      pill: 'Ensayos de Precisión'
    },
    {
      id: 'crypto',
      badge: 'SHA-256 Criptográfico',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Gobernanza Criptográfica e Inmutabilidad',
      subtitle: 'Firma digital SHA-256 en cada dictamen técnico, garantizando máxima evidencia probatoria.',
      image: '/hero_stamp_document.png',
      alt: 'Dictamen Oficial y Sello Criptográfico Inmutable Hurvant',
      pill: 'Trazabilidad Inalterable'
    }
  ];

  // Rotación automática suave del banner hero
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, bannerSlides.length]);

  // Manejador de búsqueda rápida de certificados
  const handleCertSearch = (e) => {
    e.preventDefault();
    if (!certQuery.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setCertResult({
        code: certQuery.toUpperCase(),
        valid: true,
        holder: 'REGISTRO ACTIVO & VERIFICADO',
        standard: 'UNE-EN ISO/IEC 17024 / RD 1215/1997',
        hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        issuedDate: '2026-01-15',
        status: 'Válido e Inalterado'
      });
    }, 400);
  };

  const loadSampleCode = (code) => {
    setCertQuery(code);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setCertResult({
        code: code,
        valid: true,
        holder: 'OPERADOR TÉCNICO REGISTRADO',
        standard: 'UNE-EN ISO/IEC 17024 (COMPETENCIA OPERATIVA)',
        hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284ddd200126d9069e',
        issuedDate: '2026-02-01',
        status: 'Válido e Inalterado'
      });
    }, 300);
  };

  const brandQuotes = [
    {
      text: '“Impulsamos la competencia técnica de personas, empresas y organizaciones.”',
      sub: 'Ecosistema global de certificación, inspección, formación e innovación tecnológica.'
    },
    {
      text: '“Evaluamos competencias reales bajo estándares internacionales ISO.”',
      sub: 'Validación observacional de capacidades de tercera parte libre de conflictos de interés.'
    },
    {
      text: '“La tecnología no es nuestro fin; es el habilitador que potencia cada división.”',
      sub: 'Plataformas de IA y trazabilidad criptográfica al servicio de la excelencia operativa.'
    },
    {
      text: '“Detectamos riesgos conductuales y técnicos antes de que impacten en la operación.”',
      sub: 'Inspección rigurosa y evaluación de la conformidad in situ.'
    },
    {
      text: '“Gobernanza transparente e imparcialidad garantizada.”',
      sub: 'Separación estricta de actividades evaluadoras e investigadoras.'
    }
  ];

  const primaryDivisions = [
    {
      id: 'certification',
      name: 'HURVANT CERTIFICATION',
      tag: 'División Matriz / Estandarte Principal',
      tagColor: 'bg-indigo-50 text-hurvant-indigo border-indigo-200/80',
      badge: 'ISO 17024 | ISO 17020 | ISO 9001',
      icon: Award,
      color: 'from-indigo-600 to-hurvant-navy',
      textColor: 'text-hurvant-indigo',
      borderColor: 'border-hurvant-indigo/30',
      isFlagship: true,
      description: 'División principal del grupo encargada de la evaluación de la conformidad y la certificación de personas, maquinaria, sistemas y organizaciones.',
      services: [
        'Certificación de Personas (Norma UNE-EN ISO/IEC 17024)',
        'Certificación de Maquinaria y Equipos (Real Decreto 1215/1997)',
        'Certificación de Sistemas de Gestión (ISO 9001, ISO 14001, ISO 45001)',
        'Evaluación de la Conformidad, Auditorías Técnicas y Competencia',
        'Seguridad Industrial, Equipos de Elevación y Formación Reglada'
      ],
      link: '/servicios'
    },
    {
      id: 'inspection',
      name: 'HURVANT INSPECTION',
      tag: 'Inspección & Ensayos',
      tagColor: 'bg-cyan-50 text-hurvant-cyan-dark border-cyan-200/80',
      badge: 'ISO 9712 | NDT / END',
      icon: ShieldCheck,
      color: 'from-cyan-600 to-slate-800',
      textColor: 'text-hurvant-cyan-dark',
      borderColor: 'border-hurvant-cyan/30',
      isFlagship: false,
      description: 'Inspección industrial de alta especialización técnica, Ensayos No Destructivos (END/NDT) e inspecciones reglamentarias de infraestructura.',
      services: [
        'Ensayos No Destructivos (UT, MT, PT, VT bajo ISO 9712)',
        'Inspección Técnica Reglamentaria e Integridad de Activos',
        'Supervisión de Líneas de Vida y Puntos de Anclaje (UNE-EN 795)',
        'Adecuación e Inspección de Estanterías Industriales (UNE-EN 15635)',
        'Dictámenes Técnicos con Firma Criptográfica Inmutable'
      ],
      link: '/servicios/inspeccion-equipos'
    },
    {
      id: 'academy',
      name: 'HURVANT ACADEMY',
      tag: 'Formación & Plataforma IA',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      badge: 'e-Learning | Generación IA',
      icon: BookOpen,
      color: 'from-emerald-600 to-slate-800',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-500/30',
      isFlagship: false,
      description: 'Capacitación técnica avanzada, e-Learning adaptativo y generación automatizada de contenidos mediante Inteligencia Artificial.',
      services: [
        'Plataforma de Capacitación Técnica en Seguridad Operativa',
        'Generación Automatizada de Contenidos Formativos con IA',
        'Simulación de Entornos Críticos y Evaluación Adaptativa',
        'Capacitación Continuada para Operarios e Inspectores',
        'Programas de Reciclaje y Especialización Industrial'
      ],
      link: '/contacto'
    }
  ];

  const secondaryDivisions = [
    {
      id: 'trace',
      name: 'HURVANT TRACE',
      tag: 'Investigación & OSINT',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
      badge: 'OSINT | Verification IA',
      icon: Search,
      color: 'from-amber-600 to-slate-900',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-500/30',
      isFlagship: false,
      description: 'Servicios de investigación técnica, verificación documental, Due Diligence corporativa y análisis OSINT potenciados con Inteligencia Artificial.',
      services: [
        'Investigación y Verificación Documental Criptográfica',
        'Due Diligence Técnica y Análisis de Riesgos Corporativos',
        'Inteligencia de Fuentes Abiertas (OSINT) e IA Avanzada',
        'Auditoría de Inalterabilidad de Certificados y Títulos',
        'Análisis Forense de Credenciales y Registros Públicos'
      ],
      link: 'https://trace.hurvant.com'
    },
    {
      id: 'digital',
      name: 'HURVANT DIGITAL',
      tag: 'Habilitador Tecnológico & SaaS',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      badge: 'ERP / CRM | Software IA',
      icon: Code,
      color: 'from-indigo-600 to-slate-900',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-500/30',
      isFlagship: false,
      description: 'Desarrollador del software e Inteligencia Artificial que impulsa todo el Ecosistema Hurvant y proveedor de soluciones digitales SaaS a clientes externos.',
      services: [
        'Plataformas SaaS de Gestión de Inspección y Certificación',
        'Sistemas ERP y CRM Especializados en Gobernanza ISO',
        'Desarrollo de Soluciones de IA e Integraciones a Medida',
        'Infraestructura Web y Automatización Digital Avanzada',
        'Transformación Digital Integral para Entidades Industriales'
      ],
      link: 'https://digital.hurvant.com'
    },
    {
      id: 'photo',
      name: 'HURVANT PHOTO',
      tag: 'Fotografía Técnica & Corporativa',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
      badge: 'Industrial | Inmobiliario',
      icon: Camera,
      color: 'from-purple-600 to-slate-900',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-500/30',
      isFlagship: false,
      description: 'Fotografía corporativa, industrial, inmobiliaria, de eventos y documentación visual técnica de alta resolución.',
      services: [
        'Documentación Fotográfica Técnica de Inspección e Instalaciones',
        'Fotografía Corporativa e Imagen Institucional de Marca',
        'Fotografía Industrial, Maquinaria e Infraestructuras',
        'Fotografía Inmobiliaria y Cobertura de Eventos de Empresa',
        'Producción de Contenido Visual de Alta Precisión'
      ],
      link: 'https://www.hurvantphoto.com'
    }
  ];

  const technicalSpecialties = [
    {
      id: 'renewables',
      title: 'Energías Renovables & Fotovoltaica',
      scope: 'Inspección termográfica, adecuación técnica de parques fotovoltaicos y verificación de líneas de evacuación.',
      standard: 'UNE-EN 62446 / ISO 17020',
      category: 'Sector Energético',
      categoryColor: 'bg-cyan-50 text-hurvant-cyan-dark border-cyan-200'
    },
    {
      id: 'robotics',
      title: 'Seguridad en Robótica & Marcado CE',
      scope: 'Auditoría de células robotizadas, adecuación a directiva de máquinas y análisis de seguridad funcional.',
      standard: 'ISO 10218 / ISO 13849',
      category: 'Seguridad de Máquinas',
      categoryColor: 'bg-indigo-50 text-hurvant-indigo border-indigo-200'
    },
    {
      id: 'forensics',
      title: 'Peritaje Técnico e Investigación de Siniestros',
      scope: 'Dictámenes periciales en fallos mecánicos, rotura de componentes críticos y siniestralidad laboral.',
      standard: 'Peritaje Técnico Judicial',
      category: 'Dictamen Pericial',
      categoryColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'environmental',
      title: 'Sostenibilidad & Eficiencia Energética',
      scope: 'Auditorías de rendimiento operativo, verificación técnica de consumos y adecuación ambiental.',
      standard: 'ISO 14064 / ISO 50001',
      category: 'Gestión y Eficiencia',
      categoryColor: 'bg-amber-50 text-amber-800 border-amber-200'
    }
  ];

  return (
    <>
      <PageMeta 
        title="HURVANT - Impulsando la Competencia Técnica | Ecosistema Global"
        description="Hurvant es un ecosistema empresarial internacional especializado en Certificación, Inspección Industrial, Formación Técnica, Investigación e Innovación Tecnológica con IA."
        canonicalPath="/"
      />
      <div className="space-y-16">
        
        {/* 1. SECCIÓN HERO INSTITUCIONAL: SOBRIA, ELEGANTE Y DE MÁXIMA CONFIANZA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 animate-slide-up" aria-labelledby="home-title">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50/95 to-indigo-50/30 border border-slate-200/90 shadow-xl p-6 sm:p-10 lg:p-12 text-slate-800">
            
            {/* Efectos de Luz Ambiental Sobrios en Fondo */}
            <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-hurvant-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {/* Contenido Grid Principal (12 Columnas) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Mensaje Central Institucional */}
              <div className="lg:col-span-6 space-y-6">
                {/* Badges superiores de la Marca Matriz */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-black bg-indigo-50 text-hurvant-indigo border border-indigo-200/80 uppercase tracking-widest">
                    <Globe className="h-3.5 w-3.5" />
                    Ecosistema Empresarial Internacional
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white text-slate-700 border border-slate-200/90 shadow-2xs uppercase tracking-wider">
                    <Award className="h-3.5 w-3.5 text-hurvant-cyan-dark" />
                    Organismo Tercera Parte Neutral
                  </span>
                </div>

                {/* Título Principal Institucional Nativo */}
                <div className="space-y-3">
                  <h1 id="home-title" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-hurvant-navy leading-[1.08]">
                    EVALUAMOS COMPETENCIAS. <span className="text-gradient-brand">GARANTIZAMOS CONFIANZA.</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-650 font-medium leading-relaxed max-w-xl">
                    Soluciones de <strong className="text-hurvant-navy font-black">Certificación, Inspección e Innovación Tecnológica</strong> diseñadas para hacer su organización más segura, eficiente y jurídicamente blindada.
                  </p>
                </div>

                {/* Resumen Ejecutivo de Independencia y Marco Normativo */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                  Como Entidad Independiente de <strong>Inspección (UNE-EN ISO/IEC 17020)</strong> y <strong>Certificación (UNE-EN ISO/IEC 17024)</strong>, HURVANT garantiza estricta imparcialidad, adecuación al <strong>Real Decreto 1215/1997</strong> e inmutabilidad criptográfica en cada dictamen emitido.
                </p>

                {/* Botones de Acción CTA Directos */}
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md hover:shadow-lg active:scale-98 transition-all hover:brightness-110 uppercase tracking-wider"
                  >
                    <span>Contactar con el Grupo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/verificacion"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-custom-md border border-slate-200 shadow-2xs active:scale-98 transition-all"
                  >
                    <Eye className="h-4 w-4 text-hurvant-indigo" />
                    <span>Verificar Registro Criptográfico</span>
                  </Link>
                </div>
              </div>

              {/* Columna Derecha: Showcase Visual de Banners Interactivo */}
              <div 
                className="lg:col-span-6 relative space-y-3"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Selector Tabulado de Banners Visuales */}
                <div className="flex items-center justify-between gap-1.5 p-1 bg-slate-200/60 rounded-custom-md border border-slate-200">
                  {bannerSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveBanner(idx)}
                      className={`flex-1 py-1.5 px-2 text-[10.5px] font-bold rounded-custom-sm transition-all duration-200 text-center ${
                        activeBanner === idx
                          ? 'bg-white text-hurvant-navy shadow-xs border border-slate-200/80 font-black'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                      }`}
                    >
                      {slide.badge.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Tarjeta Principal del Banner Activo */}
                <div className="relative group overflow-hidden rounded-custom-lg border border-slate-200 shadow-md bg-white">
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img 
                      src={bannerSlides[activeBanner].image} 
                      alt={bannerSlides[activeBanner].alt} 
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-103 banner-slide-enter"
                    />
                    
                    {/* Gradiente de overlay sutil para máxima legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Badge Flotante Superior */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border backdrop-blur-md shadow-xs ${bannerSlides[activeBanner].badgeColor}`}>
                      <Sparkles className="h-3 w-3" />
                      {bannerSlides[activeBanner].badge}
                    </span>
                  </div>

                  {/* Leyenda y Título del Banner en la parte inferior */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 space-y-1 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-hurvant-cyan-light">
                      {bannerSlides[activeBanner].pill}
                    </span>
                    <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                      {bannerSlides[activeBanner].title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed">
                      {bannerSlides[activeBanner].subtitle}
                    </p>
                  </div>
                </div>

                {/* Mini Indicador de Progreso del Slider */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Inspección e Imparcialidad Evaluada
                  </span>
                  <div className="flex items-center gap-1">
                    {bannerSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveBanner(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeBanner === idx ? 'w-6 bg-hurvant-indigo' : 'w-2 bg-slate-300'
                        }`}
                        aria-label={`Ir a banner ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Fila Completa Inferior: Los 5 Pilares Fundamentales (Ampliados y Centrados en la Página) */}
              <div className="lg:col-span-12 pt-8 border-t border-slate-200/80">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
                  {[
                    { title: 'INDEPENDENCIA', desc: 'Tercera Parte', icon: ShieldCheck, color: 'text-hurvant-indigo', bg: 'bg-indigo-50/80 border-indigo-100' },
                    { title: 'INSPECCIÓN', desc: 'UNE-EN ISO 17020', icon: ShieldAlert, color: 'text-hurvant-cyan-dark', bg: 'bg-cyan-50/80 border-cyan-100' },
                    { title: 'CERTIFICACIÓN', desc: 'UNE-EN ISO 17024', icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50/80 border-indigo-100' },
                    { title: 'ADECUACIÓN', desc: 'RD 1215/1997', icon: Scale, color: 'text-emerald-600', bg: 'bg-emerald-50/80 border-emerald-100' },
                    { title: 'INMUTABILIDAD', desc: 'Firma SHA-256', icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50/80 border-amber-100' }
                  ].map((p, idx) => {
                    const PillarIcon = p.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-hurvant-indigo/30 hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <div className={`h-10 w-10 sm:h-11 sm:w-11 rounded-xl ${p.bg} border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 shadow-2xs`}>
                          <PillarIcon className={`h-5 w-5 ${p.color}`} />
                        </div>
                        <span className="text-xs sm:text-[12.5px] font-black tracking-wide text-hurvant-navy uppercase block text-center w-full leading-snug">
                          {p.title}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold block text-center w-full mt-1">
                          {p.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. BARRA HORIZONTAL DE ACREDITACIONES Y MARCO NORMATIVO INTERNACIONAL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Acreditaciones y Estándares ISO">
          <div className="bg-slate-900 text-white rounded-custom-lg p-5 border border-slate-800 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3 shrink-0">
                <div className="h-10 w-10 rounded-custom-md bg-hurvant-indigo/20 border border-hurvant-indigo/40 text-hurvant-cyan flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-hurvant-cyan uppercase tracking-widest block">Estándares Internacionales</span>
                  <strong className="text-xs sm:text-sm font-black text-white block">Gobernanza y Acreditación de 3ª Parte</strong>
                </div>
              </div>

              {/* Grid de 4 Normas Fundamentales */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-custom-md px-3 py-2 text-center">
                  <span className="text-[11px] font-black text-white block">UNE-EN ISO/IEC 17024</span>
                  <span className="text-[9px] text-slate-400 font-medium block">Certificación de Personas</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-custom-md px-3 py-2 text-center">
                  <span className="text-[11px] font-black text-white block">UNE-EN ISO/IEC 17020</span>
                  <span className="text-[9px] text-slate-400 font-medium block">Organismo de Inspección</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-custom-md px-3 py-2 text-center">
                  <span className="text-[11px] font-black text-white block">RD 1215/1997</span>
                  <span className="text-[9px] text-slate-400 font-medium block">Adecuación de Maquinaria</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-custom-md px-3 py-2 text-center">
                  <span className="text-[11px] font-black text-emerald-400 block">SHA-256 Verified</span>
                  <span className="text-[9px] text-slate-400 font-medium block">Trazabilidad Criptográfica</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. WIDGET INTERACTIVO DE VERIFICACIÓN INSTANTÁNEA DE REGISTROS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-gradient-to-br from-white via-indigo-50/20 to-slate-50 border border-slate-200 rounded-custom-lg p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-200 uppercase tracking-wider">
                  <KeyRound className="h-3 w-3" />
                  Registro Criptográfico Inmutable
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy tracking-tight">
                  Verificación Instantánea de Certificados
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Compruebe la autenticidad y vigencia de cualquier certificado, carné técnico o informe de inspección emitido por el Grupo Hurvant.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span>Probar códigos de muestra:</span>
                  <button 
                    onClick={() => loadSampleCode('HRV-2026-8891')}
                    className="text-hurvant-indigo font-mono font-bold hover:underline bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100"
                  >
                    HRV-2026-8891
                  </button>
                </div>
              </div>

              {/* Formulario y Resultados */}
              <div className="lg:col-span-7 space-y-4">
                <form onSubmit={handleCertSearch} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input 
                      type="text"
                      value={certQuery}
                      onChange={(e) => setCertQuery(e.target.value)}
                      placeholder="Ingrese código de certificado (Ej: HRV-2026-8891)..."
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-custom-md text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-hurvant-indigo/50 focus:border-hurvant-indigo shadow-2xs"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSearching}
                    className="inline-flex items-center justify-center gap-2 bg-hurvant-navy hover:bg-hurvant-navy-dark text-white font-bold text-xs px-6 py-3 rounded-custom-md transition-colors shadow-xs shrink-0"
                  >
                    {isSearching ? (
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4 text-hurvant-cyan" />
                        <span>Verificar Registro</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Tarjeta de Resultado de Verificación */}
                {certResult && (
                  <div className="bg-emerald-50/90 border border-emerald-200 rounded-custom-md p-4 space-y-2 animate-fade-in shadow-2xs">
                    <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                        <span className="text-xs font-black text-emerald-900 uppercase tracking-wider">{certResult.status}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">{certResult.code}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-emerald-700 block font-bold">Titular / Estado:</span>
                        <strong className="text-emerald-950 font-bold">{certResult.holder}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-emerald-700 block font-bold">Estándar Aplicado:</span>
                        <span className="text-emerald-950 font-medium">{certResult.standard}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px]">
                      <div className="font-mono text-emerald-800 truncate max-w-md">
                        <strong>HASH SHA-256:</strong> {certResult.hash.substring(0, 32)}...
                      </div>
                      <Link 
                        to="/verificacion" 
                        className="inline-flex items-center gap-1 text-hurvant-indigo font-bold hover:underline shrink-0"
                      >
                        <span>Ver Ficha Completa</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECCIÓN DE PRUEBA SOCIAL / INDICADORES DE CONFIANZA */}
        <SocialProof />

        {/* 5. SECCIÓN PRINCIPAL: SERVICIOS Y DIVISIONES NÚCLEO */}
        <section id="ecosistema" className="bg-slate-100/80 border-y border-slate-200/80 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <header className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-indigo-50 text-hurvant-indigo border border-indigo-200/80 uppercase tracking-widest">
                <Layers className="h-3.5 w-3.5" />
                Estructura Operativa del Holding
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-hurvant-navy tracking-tight">
                Nuestras Divisiones Principales
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Tres áreas centrales de actuación diseñadas para evaluar la conformidad, certificar la competencia técnica, auditar la seguridad operativa y formar a profesionales bajo estándares internacionales.
              </p>
            </header>

            {/* Grid de 3 Tarjetas de las Divisiones Principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {primaryDivisions.map((div) => {
                const IconComponent = div.icon;
                return (
                  <article 
                    key={div.id}
                    className={`bg-white rounded-custom-lg border ${
                      div.isFlagship ? 'border-2 border-hurvant-indigo shadow-lg ring-1 ring-indigo-500/20' : 'border-slate-200/80 shadow-xs hover:shadow-md'
                    } p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group`}
                  >
                    {div.isFlagship && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-hurvant-indigo to-hurvant-navy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-custom-md tracking-widest shadow-xs">
                        División Matriz
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Cabecera de la Tarjeta */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`h-12 w-12 rounded-custom-md bg-gradient-to-br ${div.color} text-white flex items-center justify-center shadow-sm shrink-0`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${div.tagColor}`}>
                            {div.badge}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{div.tag}</span>
                          <h3 className="text-xl font-black text-hurvant-navy tracking-tight">{div.name}</h3>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {div.description}
                      </p>

                      {/* Lista de Servicios / Especialidades */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block">Áreas Clave & Especialidades:</span>
                        <ul className="space-y-2">
                          {div.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-650">
                              <span className={`font-black shrink-0 ${div.textColor}`}>▪</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Botón CTA */}
                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <Link 
                        to={div.link}
                        className={`inline-flex items-center justify-between w-full text-xs font-bold py-2.5 px-4 rounded-custom-md bg-slate-50 hover:bg-slate-100 ${div.textColor} transition-colors border border-slate-200/60`}
                      >
                        <span>Explorar División</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN SECUNDARIA: DIVISIONES TECNOLÓGICAS Y ESPECIALIZADAS HABILITADORAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-12">
            <header className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                <Cpu className="h-3.5 w-3.5 text-hurvant-cyan-dark" />
                Habilitadores Tecnológicos & Especialidades
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-hurvant-navy tracking-tight">
                Divisiones Tecnológicas y Habilitadoras del Grupo
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                Unidades altamente especializadas encargadas del soporte tecnológico con IA, investigación forense criptográfica y documentación visual de precisión.
              </p>
            </header>

            {/* Grid Secundario para Trace, Digital y Photo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondaryDivisions.map((div) => {
                const IconComponent = div.icon;
                return (
                  <article 
                    key={div.id}
                    className="bg-white/80 rounded-custom-lg border border-slate-200/90 shadow-2xs hover:shadow-sm p-6 flex flex-col justify-between transition-all hover:border-slate-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`h-10 w-10 rounded-custom-md bg-gradient-to-br ${div.color} text-white flex items-center justify-center shadow-2xs shrink-0`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${div.tagColor}`}>
                          {div.badge}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">{div.tag}</span>
                        <h4 className="text-lg font-black text-hurvant-navy tracking-tight">{div.name}</h4>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {div.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider block">Servicios Habilitadores:</span>
                        <ul className="space-y-1">
                          {div.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                              <span className={`font-black shrink-0 ${div.textColor}`}>▪</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100">
                      {div.link.startsWith('http') ? (
                        <a 
                          href={div.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-between w-full text-xs font-bold py-2 px-3 rounded-custom-md bg-slate-50 hover:bg-slate-100 ${div.textColor} transition-colors border border-slate-200/60`}
                        >
                          <span>Visitar {div.name}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <Link 
                          to={div.link}
                          className={`inline-flex items-center justify-between w-full text-xs font-bold py-2 px-3 rounded-custom-md bg-slate-50 hover:bg-slate-100 ${div.textColor} transition-colors border border-slate-200/60`}
                        >
                          <span>Explorar Servicio</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bloque: Escalabilidad Técnica a 5 Años (Tema Claro de Alto Contraste) */}
            <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/20 text-slate-800 rounded-custom-lg p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                  <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">
                    Escalabilidad Corporativa a 5 Años
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-hurvant-navy tracking-tight">
                    Plan de Escalabilidad y Ampliación de Competencias Técnicas
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 shrink-0 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-hurvant-indigo" />
                  <span>Arquitectura Modular a 5 Años</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                Marco de escalabilidad estructurado a 5 años para la incorporación planificada de nuevos alcances regulatorios e industriales, consolidando nuestras divisiones bajo un único estándar de gobernanza técnica e imparcialidad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {technicalSpecialties.map((spec) => (
                  <div 
                    key={spec.id} 
                    className="bg-white border border-slate-200/90 hover:border-hurvant-indigo/40 rounded-xl p-5 flex flex-col justify-between space-y-4 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10.5px] font-mono font-bold uppercase px-2.5 py-1 rounded-md border ${spec.categoryColor}`}>
                          {spec.category}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-[15px] font-black text-hurvant-navy leading-snug">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {spec.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-hurvant-indigo">
                      <span>{spec.standard}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN DE PROPÓSITO, MISIÓN, VISIÓN Y VALORES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna Izquierda: Manifiesto y Propósito */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Manifiesto de Grupo</span>
              <h2 className="text-3xl font-black text-hurvant-navy tracking-tight leading-tight">
                No vendemos servicios. Impulsamos la competencia técnica.
              </h2>
              <blockquote className="border-l-4 border-hurvant-indigo pl-5 py-3 font-medium text-slate-700 italic text-sm sm:text-base leading-relaxed bg-slate-50 rounded-r-custom-md">
                “Nuestra misión consiste en ayudar a organizaciones, profesionales e industrias a alcanzar los máximos estándares de competencia técnica mediante certificación, inspección, formación, innovación tecnológica e inteligencia artificial.”
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Aspiramos a convertirnos en uno de los principales referentes nacionales e internacionales en certificación, inspección, formación e innovación tecnológica, construyendo la identidad digital de un grupo preparado para liderar las próximas décadas.
              </p>
            </div>

            {/* Columna Derecha: Los 11 Valores Corporativos Oficiales */}
            <div className="lg:col-span-7 bg-white rounded-custom-lg border border-slate-200/80 p-8 shadow-xs space-y-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-3">
                Los 11 Valores del Grupo Hurvant
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Competencia Técnica', desc: 'Evaluación y rigor fundamentado en estándares internacionales ISO.' },
                  { title: 'Integridad', desc: 'Ética inquebrantable en cada proceso de auditoría y examen.' },
                  { title: 'Independencia', desc: 'Separación radical de tercera parte sin presiones comerciales.' },
                  { title: 'Innovación', desc: 'Inteligencia Artificial y firma digital inmutable de vanguardia.' },
                  { title: 'Excelencia', desc: 'Superación continua de los estándares de la industria.' },
                  { title: 'Compromiso', desc: 'Dedicación total con la seguridad humana y la calidad.' },
                  { title: 'Conocimiento', desc: 'Comités técnicos de expertos de alto nivel regulatorio.' },
                  { title: 'Confianza', desc: 'Relaciones institucionales duraderas basadas en evidencia.' },
                  { title: 'Transparencia', desc: 'Registros públicos verificables con estricto respeto RGPD.' },
                  { title: 'Calidad', desc: 'Gobernanza continua alineada con los máximos organismos.' },
                  { title: 'Responsabilidad', desc: 'Protección activa del bienestar operativo y laboral.' }
                ].map((val, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-custom-md space-y-1">
                    <strong className="text-xs font-black text-hurvant-navy block flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-hurvant-indigo inline-block" />
                      {val.title}
                    </strong>
                    <p className="text-[11px] text-slate-500 font-medium leading-normal">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FRASES ESTRATÉGICAS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Principios Estratégicos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy">Pilares de Comunicación Institucional</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandQuotes.map((quote, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-custom-md p-6 border border-slate-200/60 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-hurvant-indigo/30 bg-white"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />
                <p className="text-xs sm:text-sm font-black text-hurvant-navy leading-snug">{quote.text}</p>
                <span className="text-[11px] text-slate-500 font-semibold block mt-2">{quote.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. LLAMADA A LA ACCIÓN CORPORATIVA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 shadow-xl relative overflow-hidden border-t-4 border-hurvant-cyan flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block">Contacto Institucional Corporativo</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">¿Desea impulsar la competencia técnica de su organización?</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Póngase en contacto con la Dirección Corporativa del Grupo Hurvant para evaluar programas de certificación, inspección reglamentaria o proyectos de innovación tecnológica.
              </p>
            </div>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-hurvant-cyan to-hurvant-cyan-light text-slate-950 font-black text-xs sm:text-sm px-7 py-4 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110 shrink-0 uppercase tracking-wider"
            >
              <span>Contactar con el Grupo</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
