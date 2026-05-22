import React, { useState } from 'react';
import { Activity, FileText, Sliders, GraduationCap, Wrench, Shield, ArrowRight } from 'lucide-react';

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
              : 'text-slate-600 hover:text-hurvant-navy hover:bg-white/80'
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
              : 'text-slate-600 hover:text-hurvant-navy hover:bg-white/80'
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

          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initialServices.map((service) => {
              const IconComp = service.icon;
              return (
                <article
                  key={service.id}
                  className={`glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs flex flex-col justify-between transition-all duration-300 glass-card-hover border-t-4 border-t-slate-300 overflow-hidden ${service.borderColor}`}
                >
                  {service.image && (
                    <div className="h-44 -mx-6 -mt-6 mb-6 overflow-hidden relative border-b border-slate-200/60">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className={`h-12 w-12 rounded-custom-md bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-sm`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-hurvant-navy leading-tight">{service.title}</h3>
                      <span className="text-xs text-slate-400 font-medium block mt-1">{service.subtitle}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <span className={`h-4.5 w-4.5 rounded-full ${service.bgLight} ${service.textColor} flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5`}>
                            ✓
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Banner de Posicionamiento ENAC/Roadmap */}
          <div className="bg-slate-900 text-white p-6 rounded-custom-lg border-l-4 border-hurvant-cyan relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-cyan/15 to-transparent rounded-bl-full pointer-events-none" />
            <span className="text-[10px] font-bold tracking-widest text-hurvant-cyan uppercase block mb-1">Gobernanza y Transición de Calidad</span>
            <h3 className="text-lg font-bold mb-2">Visión de Acreditación como Entidad de Certificación de Tercera Parte</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Hurvant Certification nace con una metodología robusta e independiente de evaluación objetiva. Aunque actualmente operamos en fase de validación de mercado (sin acreditar), nuestra estructura, manuales y comisiones técnicas han sido diseñados desde el primer día bajo los rigurosos requisitos internacionales para auditorías e inspecciones de calidad. Esto garantiza a nuestros clientes el máximo rigor hoy, y una transición fluida hacia el reconocimiento de ENAC mañana.
            </p>
          </div>

          {/* Acordeones / Paneles Técnicos de los Esquemas de la Hoja de Ruta */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Esquema 1 */}
            <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6">
              <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">Futuro Esquema 17024</span>
                  <h4 className="text-base sm:text-lg font-black text-hurvant-navy mt-1.5 leading-tight">
                    Esquema E-HVT-01: Certificación de Competencia de Personas
                  </h4>
                </div>
                <GraduationCap className="h-8 w-8 text-hurvant-indigo shrink-0 bg-indigo-50 p-1.5 rounded-custom-md" />
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
            </article>

            {/* Esquema 2 */}
            <article className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6">
              <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full uppercase">Futuro Esquema 17020</span>
                  <h4 className="text-base sm:text-lg font-black text-hurvant-navy mt-1.5 leading-tight">
                    Esquema E-HVT-02: Inspección y Adecuación (RD 1215/97)
                  </h4>
                </div>
                <Wrench className="h-8 w-8 text-hurvant-cyan shrink-0 bg-cyan-50 p-1.5 rounded-custom-md" />
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Procedimiento independiente para la validación física de maquinaria de trabajo de acuerdo a las exigencias legales del <strong>Real Decreto 1215/1997</strong>, estructurado para futuras acreditaciones de tipo **ISO/IEC 17020**.
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
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
