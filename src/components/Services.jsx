import React, { useState } from 'react';
import { Activity, FileText, Sliders, GraduationCap, Wrench, Shield, ArrowRight, Cpu } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('services');

  const initialServices = [
    {
      id: 'evaluacion-operativa',
      title: 'Evaluación Operativa de Personas',
      subtitle: 'Análisis práctico y observacional en el entorno real',
      icon: Activity,
      image: '/eval_interview.jpg',
      color: 'from-indigo-500 to-indigo-600',
      textColor: 'text-indigo-600',
      bgLight: 'bg-indigo-50/50',
      borderColor: 'hover:border-indigo-500/30',
      description: 'Evaluamos directamente el comportamiento, adaptación y desempeño en el puesto físico de trabajo para identificar brechas reales.',
      details: [
        'Observación de campo estructurada mediante inspectores técnicos.',
        'Entrevistas operativas breves sin interferir en la productividad.',
        'Evaluación funcional y de capacidad real en contexto real de estrés.',
        'Análisis en profundidad de riesgos conductuales y de seguridad.',
        'Detección temprana de desajustes críticos entre la persona y el puesto.'
      ]
    },
    {
      id: 'informes-desempeno',
      title: 'Informes de Desempeño y Riesgo',
      subtitle: 'Entregables ejecutivos claros y orientados a la acción',
      icon: FileText,
      color: 'from-cyan-500 to-cyan-600',
      textColor: 'text-cyan-600',
      bgLight: 'bg-cyan-50/50',
      borderColor: 'hover:border-cyan-500/30',
      description: 'Proveemos visibilidad absoluta sobre los factores de riesgo humano e ineficiencias antes de que impacten en los resultados.',
      details: [
        'Mapeo de puntos críticos y cuellos de botella de desempeño.',
        'Matriz cuantitativa de riesgos de seguridad detectados.',
        'Identificación de fortalezas del equipo y mejores prácticas in situ.',
        'Detección de necesidades de adecuación funcional.',
        'Recomendaciones operativas concretas de optimización y seguridad.'
      ]
    },
    {
      id: 'inspeccion-equipos',
      title: 'Inspección de Equipos y NDT',
      subtitle: 'Ensayos no destructivos y validación física',
      icon: Wrench,
      image: '/ndt_testing_weld.png',
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-600',
      bgLight: 'bg-amber-50/50',
      borderColor: 'hover:border-amber-500/30',
      description: 'Ensayos No Destructivos (NDT) e inspección reglamentaria para certificar la seguridad estructural de maquinaria pesada e izaje.',
      details: [
        'Inspección reglamentaria de grúas, eslingas y accesorios de izaje.',
        'Ensayos NDT: ultrasonidos, partículas magnéticas y líquidos penetrantes.',
        'Inspección y adecuación de maquinaria según el RD 1215/1997.',
        'Pruebas mecánicas de fatiga y estabilidad estructural in-situ.',
        'Emisión de dictámenes técnicos y firma digital inmutable en el ledger.'
      ]
    },
    {
      id: 'programas-piloto',
      title: 'Programas Piloto de Validación',
      subtitle: 'Implementación controlada y de cero fricción',
      icon: Sliders,
      color: 'from-slate-700 to-hurvant-navy',
      textColor: 'text-hurvant-navy',
      bgLight: 'bg-slate-100/50',
      borderColor: 'hover:border-hurvant-navy/30',
      description: 'Validamos el encaje de la metodología en áreas delimitadas sin interrumpir las operaciones en curso.',
      details: [
        'Despliegue ágil en un área específica o sección crítica.',
        'Evaluación en equipos concretos (ej. un turno de trabajo específico).',
        'Validación y modelado de problemas en un entorno de prueba acotado.',
        'Demostración medible de la reducción de incidencias en semanas.',
        'Diseño de planes de escala progresivos según los resultados.'
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="services-title">
      {/* Cabecera */}
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Portafolio Técnico y Gobernanza</span>
        <h2 id="services-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Servicios y Hoja de Ruta de Certificación
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Validación operativa inmediata y plan de transición regulada hacia esquemas de certificación bajo estándares internacionales.
        </p>
      </header>

      {/* Selector de Sección: Servicios vs Hoja de Ruta ISO */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-slate-100 p-1.5 rounded-custom-lg border border-slate-200/80">
        <button
          onClick={() => setActiveTab('services')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-custom-md font-bold text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'services'
              ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-md'
              : 'text-slate-650 hover:text-hurvant-navy hover:bg-white/80'
          }`}
        >
          <Activity className="h-5 w-5" />
          <span>Servicios Operativos Iniciales</span>
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-custom-md font-bold text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'roadmap'
              ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-cyan text-white shadow-md'
              : 'text-slate-650 hover:text-hurvant-navy hover:bg-white/80'
          }`}
        >
          <GraduationCap className="h-5.5 w-5.5" />
          <span>Hoja de Ruta Técnica (ISO 17024 / 17020)</span>
        </button>
      </div>

      {activeTab === 'services' ? (
        <div className="space-y-12">
          {/* Introducción a los Servicios */}
          <div className="bg-indigo-50/40 border border-indigo-100/60 p-6 rounded-custom-lg mb-8">
            <h3 className="text-base font-bold text-hurvant-navy mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-hurvant-indigo shrink-0" />
              ¿Por qué evaluar el desempeño en la operación real?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Muchas empresas cumplen formalmente con cursos de prevención de riesgos o formación teórica, pero siguen sufriendo alta rotación, fallos costosos o accidentes. Hurvant interviene precisamente en ese punto crítico: evaluando de manera objetiva el comportamiento, la capacidad funcional y el encaje persona-puesto directamente en la actividad diaria.
            </p>
          </div>

          {/* Grid de Servicios como Filas Horizontales Premium */}
          <div className="space-y-8">
            {initialServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <article
                  key={service.id}
                  className={`glass-card rounded-custom-lg p-6 lg:p-8 border border-slate-200/60 shadow-xs flex flex-col ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center transition-all duration-300 glass-card-hover border-l-4 border-l-slate-300 overflow-hidden ${service.borderColor}`}
                >
                  {service.image && (
                    <div className="w-full lg:w-5/12 h-52 lg:h-64 rounded-custom-md overflow-hidden relative border border-slate-200/60 shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                    </div>
                  )}
                  
                  <div className="flex-grow space-y-4 w-full">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-custom-md bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-sm shrink-0`}>
                        <IconComp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-hurvant-navy leading-tight">{service.title}</h3>
                        <span className="text-xs text-slate-400 font-medium block mt-0.5">{service.subtitle}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{service.description}</p>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Detalles Técnicos de Campo:</span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                            <span className={`h-4.5 w-4.5 rounded-full ${service.bgLight} ${service.textColor} flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5`}>
                              ✓
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Banner de Posicionamiento ENAC/Roadmap */}
          <div className="bg-slate-900 text-white p-6 lg:p-8 rounded-custom-lg border-l-4 border-amber-500 relative overflow-hidden shadow-md space-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase block">Gobernanza y Transición de Calidad</span>
              <span className="text-[9px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Cataluña · Pre-Acreditación 2026
              </span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-2">Visión de Acreditación como Entidad de Certificación de Tercera Parte</h3>
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                <strong>HURVANT Certification</strong> es una entidad técnica de nueva creación que iniciará sus operaciones de campo en los próximos meses, enfocándose inicialmente en el mercado de <strong>Cataluña (provincias de Barcelona, Tarragona, Girona y Lleida)</strong>. Nuestra metodología, manuales e instrucciones técnicas han sido estructurados desde el primer día bajo los rigurosos requisitos de las normas internacionales de calidad.
              </p>
              <p>
                Declaramos con absoluta transparencia y sinceridad que <strong>actualmente nos encontramos en fase de lanzamiento comercial y no disponemos todavía de la acreditación formal otorgada por la Entidad Nacional de Acreditación (ENAC)</strong>. Nuestra hoja de ruta estratégica contempla la consolidación inicial de operaciones en Cataluña y la subsiguiente solicitud de acreditación técnica bajo las normas <strong>UNE-EN ISO/IEC 17024</strong> (certificación de personas) e <strong>ISO/IEC 17020</strong> (organismo de inspección) ante ENAC.
              </p>
            </div>
          </div>

          {/* Acordeones / Paneles Técnicos de los Esquemas de la Hoja de Ruta */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Esquema 1 */}
            <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">Futuro Esquema 17024</span>
                    <h4 className="text-base sm:text-lg font-black text-hurvant-navy mt-1.5 leading-tight">
                      Esquema E-HVT-01: Certificación de Competencia de Personas
                    </h4>
                  </div>
                  <GraduationCap className="h-8 w-8 text-hurvant-indigo shrink-0 bg-indigo-50 p-1.5 rounded-custom-md" />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Diseñado para evaluar y certificar de manera inalterable la competencia técnica de operarios especializados en equipos exigentes como carretillas elevadoras, plataformas y grúas de carga, alineado con la norma <strong>UNE-EN ISO/IEC 17024</strong>.
                </p>

                <div className="bg-slate-50 p-4 rounded-custom-md border border-slate-200/60 space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Parámetros del Esquema Técnico:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-indigo shrink-0">1. Pre-requisito:</span>
                      <span>Revisión de aptitud médica laboral y formación básica de operador.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-indigo shrink-0">2. Examen Teórico:</span>
                      <span>Evaluación controlada sobre seguridad en cargas y física de estabilidad.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-indigo shrink-0">3. Examen Práctico:</span>
                      <span>Examen presencial individual de maniobras y simulación de fallos in-situ.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-indigo shrink-0">4. Mantenimiento:</span>
                      <span>Vigencia por 5 años sujeta a informe anual de siniestralidad de la empresa.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Esquema 2 */}
            <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full uppercase">Futuro Esquema 17020</span>
                    <h4 className="text-base sm:text-lg font-black text-hurvant-navy mt-1.5 leading-tight">
                      Esquema E-HVT-02: Inspección y Adecuación (RD 1215/97)
                    </h4>
                  </div>
                  <Wrench className="h-8 w-8 text-hurvant-cyan shrink-0 bg-cyan-50 p-1.5 rounded-custom-md" />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Procedimiento independiente para la validación física de maquinaria de trabajo de acuerdo a las exigencias legales del <strong>Real Decreto 1215/1997</strong>, estructurado para futuras acreditaciones de tipo <strong>ISO/IEC 17020</strong>.
                </p>

                <div className="bg-slate-50 p-4 rounded-custom-md border border-slate-200/60 space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Parámetros del Esquema Técnico:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-cyan shrink-0">1. Auditoría Inicial:</span>
                      <span>Examen minucioso de manuales de uso, marcado CE y fichas de mantenimiento.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-cyan shrink-0">2. Examen Físico:</span>
                      <span>Pruebas mecánicas y eléctricas de sistemas de parada y resguardos físicos.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-cyan shrink-0">3. Emisión de Acta:</span>
                      <span>Informe estructurado y placa de identificación física con código QR único.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-hurvant-cyan shrink-0">4. Inspección Trienal:</span>
                      <span>Seguimiento de seguridad obligatorio cada 3 años para mantener la validez.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Esquema 3 */}
            <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase">Futuro Esquema 17020/9712</span>
                    <h4 className="text-base sm:text-lg font-black text-hurvant-navy mt-1.5 leading-tight">
                      Esquema E-HVT-03: Ensayos END y Grúas de Elevación
                    </h4>
                  </div>
                  <Cpu className="h-8 w-8 text-amber-500 shrink-0 bg-amber-50 p-1.5 rounded-custom-md" />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Procedimiento instrumental para la validación de integridad física en grúas e izaje bajo normas UNE e <strong>ISO 9712 / ISO 17020</strong>, preparado para futuros reconocimientos.
                </p>

                <div className="bg-slate-50 p-4 rounded-custom-md border border-slate-200/60 space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Parámetros del Esquema Técnico:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-amber-600 shrink-0">1. Inspección Visual (VT):</span>
                      <span>Control de soldaduras según norma UNE-EN ISO 17637.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-amber-600 shrink-0">2. Ensayos NDT (MT/PT):</span>
                      <span>Detección de fisuras por partículas magnéticas y líquidos penetrantes.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-amber-600 shrink-0">3. Ultrasonidos (UT):</span>
                      <span>Evaluación volumétrica de espesores y soldaduras críticas (UNE-EN ISO 17640).</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="font-bold text-amber-600 shrink-0">4. Inspectores Certificados:</span>
                      <span>Operadores certificados bajo UNE-EN ISO 9712 Nivel II/III.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
