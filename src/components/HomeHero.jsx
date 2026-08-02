import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Award, ShieldAlert, Cpu, Eye, CheckCircle2, ArrowRight, 
  AlertTriangle, Users, Layers, Globe, ShieldCheck, BookOpen, Search, 
  Camera, Code, Sparkles, Building2, Scale, Zap
} from 'lucide-react';
import SocialProof from './SocialProof';
import PageMeta from './shared/PageMeta';

export default function HomeHero() {
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

  const ecosystemDivisions = [
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
      textColor: 'text-hurvant-cyan',
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
      textColor: 'text-emerald-600',
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
    },
    {
      id: 'trace',
      name: 'HURVANT TRACE',
      tag: 'Investigación & OSINT',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
      badge: 'OSINT | Verification IA',
      icon: Search,
      color: 'from-amber-600 to-slate-900',
      textColor: 'text-amber-600',
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
      link: '/servicios'
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

  const futureVerticals = [
    'Hurvant Security', 'Hurvant Medical', 'Hurvant Energy', 'Hurvant Engineering',
    'Hurvant Robotics', 'Hurvant Legal', 'Hurvant Environment', 'Hurvant Labs'
  ];

  return (
    <>
      <PageMeta 
        title="HURVANT - Impulsando la Competencia Técnica | Ecosistema Global"
        description="Hurvant es un ecosistema empresarial internacional especializado en Certificación, Inspección Industrial, Formación Técnica, Investigación e Innovación Tecnológica con IA."
        canonicalPath="/"
      />
      <div className="space-y-16">
        {/* 1. SECCIÓN HERO INSTITUCIONAL CLARA Y LUMINOSA DE ALTO IMPACTO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-slide-up" aria-labelledby="home-title">
          {/* Contenedor Principal en Blanco y Tonos Luminosos */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50/90 to-indigo-50/40 border border-slate-200 shadow-xl p-6 sm:p-10 lg:p-12 text-slate-800">
            
            {/* Efectos de Luz Ambiental Suaves en Fondo */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-hurvant-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

            {/* Contenido Principal Grid (12 Col) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Mensaje Central "Soluciones que Generan Valor" */}
              <div className="lg:col-span-7 space-y-6">
                {/* Badges superiores de la Marca Matriz */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-indigo-50 text-hurvant-indigo border border-indigo-200/80 uppercase tracking-widest">
                    <Globe className="h-3.5 w-3.5" />
                    Ecosistema Empresarial Internacional
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs uppercase tracking-wider">
                    <Award className="h-3.5 w-3.5 text-hurvant-cyan-dark" />
                    UNE-EN ISO/IEC 17024 | RD 1215/1997
                  </span>
                </div>

                {/* Título Principal Institucional Nativo */}
                <div className="space-y-3">
                  <h1 id="home-title" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-hurvant-navy leading-[1.08]">
                    SOLUCIONES QUE <span className="text-gradient-brand">GENERAN VALOR</span>
                  </h1>
                  <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                    Evaluamos competencias. Creamos confianza. Impulsamos organizaciones más <strong className="text-hurvant-navy font-black">seguras, eficientes y competitivas</strong>.
                  </p>
                </div>

                {/* Resumen Ejecutivo de Independencia */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-medium">
                  Como Organismo Técnico de Certificación y Validación de tercera parte, HURVANT garantiza máxima imparcialidad, rigor técnico in situ e inmutabilidad criptográfica en cada proceso de auditoría y dictamen.
                </p>

                {/* Botones de Acción CTA Directos */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-7 py-3.5 rounded-custom-md shadow-md hover:shadow-lg active:scale-98 transition-all hover:brightness-110 uppercase tracking-wider"
                  >
                    <span>Contactar con el Grupo</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Link>
                  <Link 
                    to="/verificacion"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-custom-md border border-slate-200 shadow-xs active:scale-98 transition-all"
                  >
                    <Eye className="h-4 w-4 text-hurvant-indigo" />
                    <span>Verificar Registro Criptográfico</span>
                  </Link>
                </div>

                {/* Los 5 Pilares de la Marca (Tarjetas Blancas Nativas) */}
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { title: 'INDEPENDENCIA', desc: 'Tercera parte', icon: ShieldCheck, color: 'text-hurvant-indigo' },
                    { title: 'RIGOR TÉCNICO', desc: 'Comité ISO', icon: Award, color: 'text-hurvant-cyan-dark' },
                    { title: 'TRANSPARENCIA', desc: 'Gobernanza', icon: Eye, color: 'text-indigo-600' },
                    { title: 'COMPETENCIA', desc: 'ISO 17024', icon: Users, color: 'text-emerald-600' },
                    { title: 'EXCELENCIA', desc: 'SHA-256', icon: Sparkles, color: 'text-amber-600' }
                  ].map((p, idx) => {
                    const PillarIcon = p.icon;
                    return (
                      <div key={idx} className="bg-white border border-slate-200/80 rounded-custom-md p-3 text-center space-y-1 shadow-2xs hover:shadow-xs hover:border-indigo-200 transition-all">
                        <PillarIcon className={`h-4 w-4 mx-auto ${p.color}`} />
                        <span className="text-[10px] font-black tracking-wider text-slate-800 block uppercase">{p.title}</span>
                        <span className="text-[9px] text-slate-500 font-medium block">{p.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Columna Derecha: Composición Visual Integrada Luminosa */}
              <div className="lg:col-span-5 relative space-y-4">
                
                {/* Tarjeta 1: Foto Fotográfica de Inspectores / Evaluación in situ */}
                <div className="relative group overflow-hidden rounded-custom-lg border border-slate-200 shadow-md bg-white">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img 
                      src="/hero_engineers_inspection.png" 
                      alt="Evaluación in situ de Operarios e Inspectores Industriales Hurvant" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 border border-slate-200 shadow-xs uppercase tracking-wider backdrop-blur-md">
                      <Camera className="h-3 w-3 text-hurvant-indigo" />
                      Evaluación Técnica In Situ
                    </span>
                    <span className="text-[10px] font-mono font-bold text-hurvant-indigo bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                      ISO 17024
                    </span>
                  </div>
                </div>

                {/* Grid Inferior de 2 Tarjetas Complementarias */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Tarjeta 2: Escudo Digital de Seguridad e Imparcialidad */}
                  <div className="bg-gradient-to-br from-indigo-50/80 via-white to-cyan-50/80 border border-indigo-100 rounded-custom-lg p-4 shadow-sm space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-8 rounded-custom-md bg-indigo-100/80 text-hurvant-indigo border border-indigo-200/80 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <div>
                      <strong className="text-xs font-black text-slate-800 block">Escudo Criptográfico</strong>
                      <span className="text-[10px] text-slate-500 font-medium block">Trazabilidad SHA-256 inalterable en servidor RGPD.</span>
                    </div>
                  </div>

                  {/* Tarjeta 3: Foto del Sello Oficial de Certificación */}
                  <div className="relative group overflow-hidden rounded-custom-lg border border-slate-200 shadow-sm bg-white">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src="/hero_stamp_document.png" 
                        alt="Sello de Validez e Imparcialidad Institucional Hurvant" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 z-10">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-800 bg-white/95 px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                        Dictámenes Oficiales
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 2. SECCIÓN DE PRUEBA SOCIAL / INDICADORES DE CONFIANZA */}
        <SocialProof />

        {/* 3. NUEVA SECCIÓN PRINCIPAL: NUESTRO ECOSISTEMA CORPORATIVO */}
        <section id="ecosistema" className="bg-slate-100 border-y border-slate-200/80 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <header className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-hurvant-indigo border border-indigo-100 uppercase tracking-widest">
                <Layers className="h-3.5 w-3.5" />
                Arquitectura de Marca Matriz
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-hurvant-navy tracking-tight">
                Nuestro Ecosistema Empresarial
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Siete divisiones especializadas unidas por un único propósito: impulsar la competencia técnica, la seguridad, la conformidad y la excelencia mediante certificación, inspección, formación e inteligencia artificial.
              </p>
            </header>

            {/* Grid de Tarjetas de las Divisiones del Ecosistema */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {ecosystemDivisions.map((div) => {
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
                      {div.link.startsWith('http') ? (
                        <a 
                          href={div.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-between w-full text-xs font-bold py-2.5 px-4 rounded-custom-md bg-slate-50 hover:bg-slate-100 ${div.textColor} transition-colors border border-slate-200/60`}
                        >
                          <span>Visitar {div.name}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link 
                          to={div.link}
                          className={`inline-flex items-center justify-between w-full text-xs font-bold py-2.5 px-4 rounded-custom-md bg-slate-50 hover:bg-slate-100 ${div.textColor} transition-colors border border-slate-200/60`}
                        >
                          <span>Explorar División</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bloque Modular para Futuras Divisiones del Holding */}
            <div className="glass-card bg-gradient-to-r from-slate-900 via-slate-950 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-10 border border-slate-800 shadow-lg space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block mb-1">Escalabilidad Corporativa a 15 Años</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Infraestructura Abierta para Futuras Verticales</h3>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-hurvant-cyan/20 text-hurvant-cyan border border-hurvant-cyan/30 uppercase tracking-widest shrink-0">
                  Arquitectura Modular Integrada
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                La arquitectura del Grupo Hurvant está concebida para integrar de forma nativa nuevas unidades de negocio altamente especializadas, garantizando que cada división comparta la misma gobernanza de marca, motor tecnológico de IA e independencia técnica:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {futureVerticals.map((vert, idx) => (
                  <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-custom-md p-3 text-center text-xs font-bold text-slate-200 flex items-center justify-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-hurvant-cyan shrink-0" />
                    <span>{vert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN DE PROPÓSITO, MISIÓN, VISIÓN Y VALORES */}
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

        {/* 5. FRASES ESTRATÉGICAS */}
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

        {/* 6. LLAMADA A LA ACCIÓN CORPORATIVA */}
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
