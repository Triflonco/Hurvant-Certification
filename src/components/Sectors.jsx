import React from 'react';
import { Truck, Hotel, ShieldAlert, CheckCircle2, Factory, HelpCircle } from 'lucide-react';

export default function Sectors() {
  const sectorsData = [
    {
      id: 'logistica',
      title: 'Sector Logística',
      subtitle: 'Entornos de alto ritmo y alta rotación de personal',
      icon: Truck,
      image: '/stress_warehouse.jpg',
      color: 'from-indigo-600 to-indigo-800',
      accentColor: 'text-hurvant-indigo',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      problems: [
        'Alta rotación de operarios que afecta la continuidad operativa.',
        'Uso intensivo y constante de Empresas de Trabajo Temporal (ETT).',
        'Bajo ajuste real entre el perfil de la persona y el puesto asignado.',
        'Errores operativos recurrentes que derivan en daños materiales o demoras.',
        'Fatiga acumulada por jornadas de trabajo prolongadas.',
        'Presión constante por cumplir con estrictos tiempos de entrega.',
        'Mandos intermedios y coordinadores de almacén saturados de gestión.'
      ],
      evaluations: [
        'Capacidad de adaptación real al ritmo operativo del almacén.',
        'Comprensión e integración de instrucciones técnicas complejas.',
        'Mantenimiento de comportamientos seguros frente a la fatiga.',
        'Eficacia en la comunicación con mandos intermedios y compañeros.',
        'Tolerancia real a la presión en picos de demanda.',
        'Impacto conductual del operario en el clima de su equipo de trabajo.',
        'Capacidad funcional real y ergonomía en el entorno de manipulación.'
      ]
    },
    {
      id: 'hoteleria',
      title: 'Sector Hotelería y Servicios',
      subtitle: 'Presión por experiencia de cliente e inconsistencia operativa',
      icon: Hotel,
      color: 'from-cyan-600 to-cyan-800',
      accentColor: 'text-hurvant-cyan',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
      problems: [
        'Rotación extremadamente elevada que impide fidelizar el talento.',
        'Programas de formación tradicionales poco efectivos y desconectados del servicio diario.',
        'Inconsistencia en los estándares operativos entre diferentes turnos.',
        'Desgaste emocional derivado de la atención directa y continuada.',
        'Alta presión temporal por cumplir con las exigencias del cliente.'
      ],
      evaluations: [
        'Desempeño real en situaciones operativas críticas bajo presión.',
        'Capacidad de respuesta inmediata ante incidencias operativas.',
        'Coordinación interna eficiente entre departamentos clave.',
        'Mantenimiento riguroso de los estándares operativos de la marca.',
        'Comportamiento profesional y asertivo frente a situaciones de tensión.'
      ]
    },
    {
      id: 'heavy-industry',
      title: 'Sector Heavy Industry y Grúas',
      subtitle: 'Operaciones críticas de izaje y fatiga estructural',
      icon: Factory,
      image: '/crane_lifting_inspection.png',
      color: 'from-amber-600 to-amber-700',
      accentColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-100',
      problems: [
        'Fatiga acumulada y pérdida de reflejos en maniobras de alto tonelaje.',
        'Desgaste oculto e inspecciones deficientes en eslingas y accesorios de izaje.',
        'Falta de control de seguridad continuo en la estabilidad de grúas móviles.',
        'Saturación de protocolos documentales sin inspección física real en campo.',
        'Riesgo de siniestralidad catastrófica por desajuste conductual del operador.'
      ],
      evaluations: [
        'Comportamiento seguro y tolerancia al estrés en maniobras complejas.',
        'Validación física rigurosa de eslingas, ganchos y accesorios (NDT).',
        'Cálculo presencial de estabilidad y control de fatiga del operador.',
        'Auditoría y marcaje físico de maquinaria según el RD 1215/1997.',
        'Registro criptográfico de aptitud técnica in-situ en el ledger privado.'
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="sectors-title">
      {/* Cabecera */}
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Especialización Sectorial</span>
        <h2 id="sectors-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Sectores de Intervención Crítica
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Evaluamos y resolvemos el desajuste funcional en los entornos que más sufren la rotación y la presión de tiempos.
        </p>
      </header>

      {/* Stack de Sectores como Filas Horizontales Premium */}
      <div className="space-y-12 mb-12">
        {sectorsData.map((sector, idx) => {
          const IconComp = sector.icon;
          return (
            <article 
              key={sector.id} 
              className={`glass-card rounded-custom-lg border border-slate-200/60 shadow-md overflow-hidden flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-0 items-stretch`}
            >
              {sector.image && (
                <div className="w-full lg:w-5/12 h-64 lg:h-auto min-h-[320px] overflow-hidden relative shrink-0">
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent pointer-events-none" />
                </div>
              )}

              {/* Contenido a dos columnas (en pantalla grande) para los detalles */}
              <div className="flex-grow flex flex-col justify-between w-full">
                {/* Encabezado del Sector con gradiente premium */}
                <div className={`bg-gradient-to-r ${sector.color} text-white p-6 relative shrink-0`}>
                  <div className="absolute top-4 right-4 bg-white/10 p-2.5 rounded-custom-md backdrop-blur-md">
                    <IconComp className="h-6 w-6 text-white" />
                  </div>
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white mb-2`}>
                    Área de Intervención Crítica
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">{sector.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200/95 font-medium mt-1">{sector.subtitle}</p>
                </div>

                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start flex-grow">
                  {/* Desafíos detectados */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                      <ShieldAlert className="h-4 w-4 text-rose-500 shrink-0" />
                      Problemas y Brechas Detectadas:
                    </h4>
                    <ul className="space-y-2.5">
                      {sector.problems.map((problem, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-650 leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lo que evalúa Hurvant */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                      <CheckCircle2 className={`h-4 w-4 ${sector.accentColor} shrink-0`} />
                      Parámetros que Evalúa Hurvant:
                    </h4>
                    <ul className="space-y-2.5">
                      {sector.evaluations.map((evalItem, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <span className={`inline-flex h-4.5 w-4.5 rounded-full ${sector.badgeBg} flex items-center justify-center text-xs font-black shrink-0 mt-0.5`}>
                            ✓
                          </span>
                          <span>{evalItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Alcance Futuro / Otros Sectores */}
      <div className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-slate-100 text-hurvant-navy rounded-custom-md flex items-center justify-center shrink-0">
            <Factory className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-hurvant-navy">Ampliación a Industria y Servicios de Campo</h4>
            <p className="text-xs text-slate-500 max-w-xl">
              Nuestra metodología adaptativa de evaluación del comportamiento seguro y funcional se despliega también bajo demanda en entornos de manufactura pesada, logística de frío e instalaciones técnicas industriales.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-400 border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0 bg-white">
          Metodología Universal
        </span>
      </div>
    </section>
  );
}
