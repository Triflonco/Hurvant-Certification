import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, ArrowRight, Award, ShieldCheck, Code, Layers
} from 'lucide-react';
import PageMeta from './shared/PageMeta';

export default function Services() {
  const [activeDivision, setActiveDivision] = useState('all');

  const divisions = [
    { id: 'all', name: 'Todas las Divisiones', icon: Layers },
    { id: 'certification', name: 'HURVANT CERTIFICATION', icon: Award },
    { id: 'inspection', name: 'HURVANT INSPECTION', icon: ShieldCheck },
    { id: 'digital', name: 'HURVANT DIGITAL', icon: Code }
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
      description: 'Evaluamos y certificamos las competencias técnicas reales de operarios, supervisores y técnicos en entornos laborales de alta exigencia.',
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
      badge: 'UNE-EN ISO/IEC 17020 | RD 1215/97',
      description: 'Inspección técnica reglamentaria y adecuación de maquinaria pesada, equipos de elevación e instalaciones conforme a UNE-EN ISO/IEC 17020 y Ley 31/1995 LPRL.',
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
      link: '/servicios/ensayos-no-destructivos-ndt',
      icon: ShieldCheck,
      image: '/ndt_testing_weld.png',
      color: 'from-cyan-600 to-slate-900',
      textColor: 'text-hurvant-cyan',
      badge: 'UNE-EN ISO 9712',
      description: 'Detección de defectos estructurales, discontinuidades en soldadura y fatiga de materiales críticos sin alterar la integridad del activo.',
      details: [
        'Ultrasonidos (UT), Partículas Magnéticas (MT) y Líquidos Penetrantes (PT).',
        'Inspectores cualificados Nivel II / III bajo norma UNE-EN ISO 9712.',
        'Inspección visual avanzada (VT) según norma UNE-EN ISO 17637.',
        'Supervisión de líneas de vida y puntos de anclaje (UNE-EN 795).',
        'Inspección de estanterías metálicas de almacén (UNE-EN 15635).'
      ]
    },
    {
      id: 'digital-saas',
      divisionId: 'digital',
      divisionName: 'HURVANT DIGITAL',
      title: 'Soluciones Digitales, ERP/CRM e Inteligencia Artificial',
      subtitle: 'El habilitador tecnológico del Grupo Hurvant y clientes externos',
      link: 'https://digital.hurvant.com',
      icon: Code,
      image: '/digital_saas_platform.png',
      color: 'from-indigo-600 to-slate-900',
      textColor: 'text-indigo-600',
      badge: 'Software SaaS & IA',
      description: 'Hurvant Digital desarrolla plataformas SaaS de gestión, sistemas ERP/CRM y motores de Inteligencia Artificial para el Ecosistema Hurvant y organizaciones industriales.',
      details: [
        'Desarrollo de Plataformas SaaS de Gestión de Inspección y Registro.',
        'Sistemas ERP y CRM a medida orientados al cumplimiento ISO.',
        'Integración de Algoritmos de Inteligencia Artificial en Procesos.',
        'Automatización de Flujos de Trabajo e Infraestructura en la Nube.',
        'Consultoría de Transformación Digital para Entidades Industriales.'
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
        description="Conozca el catálogo de divisiones del Grupo Hurvant: Hurvant Certification, Hurvant Inspection y Hurvant Digital."
        canonicalPath="/servicios"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="services-title">
        {/* Cabecera */}
        <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
          <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Ecosistema Empresarial</span>
          <h2 id="services-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
            Divisiones Especializadas del Grupo Hurvant
          </h2>
          <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
            Cada división responde a un área de excelencia técnica respaldada por una única gobernanza de calidad e innovación.
          </p>
        </header>

        {/* Filtro por División Simétrico */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12 bg-slate-100/90 p-2.5 rounded-custom-lg border border-slate-200/80">
          {divisions.map((div) => {
            const Icon = div.icon;
            const active = activeDivision === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setActiveDivision(div.id)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-custom-md text-xs font-bold transition-all ${
                  active
                    ? 'bg-hurvant-navy text-white shadow-md'
                    : 'text-slate-650 hover:text-hurvant-navy hover:bg-white/80'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{div.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid 2x2 Simétrico de Servicios y Divisiones */}
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

                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-hurvant-indigo">
                      <IconComponent className="h-4 w-4 shrink-0" />
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
        <div className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 shadow-lg border-l-4 border-hurvant-indigo flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <Code className="h-7 w-7 text-hurvant-cyan shrink-0" />
              <div>
                <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block">Habilitador Tecnológico Transversal</span>
                <h3 className="text-2xl font-black text-white">HURVANT DIGITAL</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              HURVANT DIGITAL es la división encargada del desarrollo de la tecnología de vanguardia, software de trazabilidad inmutable, motores de Inteligencia Artificial y plataformas SaaS que impulsan a todas las divisiones del Grupo Hurvant y a organizaciones externas.
            </p>
          </div>

          <a
            href="https://digital.hurvant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-hurvant-indigo to-hurvant-cyan text-white font-bold text-xs px-6 py-3.5 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider shrink-0 shadow-md"
          >
            <span>Ir a digital.hurvant.com</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
