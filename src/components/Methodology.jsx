import React from 'react';
import { Eye, ShieldAlert, Cpu, Heart, CheckCircle2 } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Observación Estructurada',
      icon: Eye,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      description: 'Nuestros inspectores de campo realizan observaciones directas de la actividad real del operario en su puesto físico sin alterar los ritmos productivos ni interferir en la dinámica corporativa.',
      bullets: [
        'Análisis práctico de movimientos y desplazamientos.',
        'Registro de hábitos operativos y comportamiento técnico.',
        'Identificación de micro-errores repetitivos de manipulación.'
      ]
    },
    {
      num: '02',
      title: 'Evaluación Contextual',
      icon: ShieldAlert,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
      description: 'No evaluamos al operario de manera abstracta o aislada. Analizamos su desempeño en su entorno real bajo los picos reales de presión, ruido, fatiga diaria, y las dinámicas habituales de su equipo.',
      bullets: [
        'Respuesta ante plazos de entrega ajustados.',
        'Desempeño bajo factores ergonómicos adversos.',
        'Gestión del estrés en turnos rotativos exigentes.'
      ]
    },
    {
      num: '03',
      title: 'Análisis Funcional de Riesgo',
      icon: Cpu,
      color: 'text-hurvant-navy bg-slate-100 border-slate-200',
      description: 'Procesamos las observaciones y métricas de campo a través de nuestra matriz técnica de riesgos, clasificando y cuantificando las desviaciones según su criticidad de seguridad y productividad.',
      bullets: [
        'Mapeo de riesgos conductuales en el uso de maquinaria.',
        'Evaluación del encaje funcional psicofísico real con el puesto.',
        'Detección de necesidades de adecuación correctiva inmediata.'
      ]
    },
    {
      num: '04',
      title: 'Enfoque Humano + Operativo',
      icon: Heart,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      description: 'Establecemos que el bienestar en la operación y la productividad van de la mano. Ayudamos a la empresa a comprender las capacidades de su personal de forma empática y científicamente objetiva.',
      bullets: [
        'Recomendaciones de rotación inteligente según perfil.',
        'Adecuación ergonómica y funcional del puesto físico.',
        'Reducción de riesgos humanos y del desgaste mental.'
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="methodology-title">
      {/* Cabecera */}
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Rigor Metodológico</span>
        <h2 id="methodology-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Nuestra Metodología Científico-Operativa
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Un proceso sistemático de análisis en campo para validar competencias observables y mitigar riesgos en entornos de alta exigencia.
        </p>
      </header>

      {/* Introducción de Metodología */}
      <div className="bg-gradient-to-r from-hurvant-navy to-hurvant-navy-dark text-white p-8 rounded-custom-lg mb-16 shadow-md border-l-4 border-hurvant-indigo relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
        <h3 className="text-lg font-bold mb-3">Evaluación Empírica vs Exámenes Convencionales</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          La formación tradicional en prevención de riesgos (PRL) y los cursos teóricos convencionales a menudo se quedan en papel y no garantizan el comportamiento seguro ni el encaje ergonómico del trabajador. La metodología de Hurvant se despliega en el <strong>contexto de trabajo real</strong> y bajo observación objetiva del comportamiento físico y psicofísico directo, facilitando datos inalterables y con valor probatorio para la toma de decisiones empresariales.
        </p>
      </div>

      {/* Grid de Pasos de Metodología */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <article 
              key={step.num}
              className="glass-card rounded-custom-lg p-6 sm:p-8 border border-slate-200/60 shadow-xs relative flex flex-col justify-between glass-card-hover"
            >
              {/* Indicador de número flotante en marca de agua */}
              <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-black text-slate-100/80 pointer-events-none select-none tracking-tighter">
                {step.num}
              </span>

              <div className="space-y-4">
                {/* Encabezado con Icono */}
                <div className="flex items-center gap-3">
                  <div className={`h-11 w-11 rounded-custom-md border flex items-center justify-center shrink-0 shadow-sm ${step.color}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-hurvant-navy tracking-tight">{step.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Lista de sub-procesos */}
              <div className="mt-6 pt-4 border-t border-slate-150 space-y-2">
                {step.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
