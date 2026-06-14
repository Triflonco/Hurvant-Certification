import React from 'react';
import { Search, ChevronRight, Award, ShieldAlert, Cpu, Eye, CheckCircle2, ArrowRight, AlertTriangle, Users } from 'lucide-react';

export default function HomeHero({ onViewChange }) {
  const brandQuotes = [
    {
      text: '“Evaluamos competencias reales, no solo formación.”',
      sub: 'Validación observacional de habilidades observables en campo.'
    },
    {
      text: '“El problema no siempre es la actitud. A veces es el encaje.”',
      sub: 'Detección empírica del acople ergonómico y funcional persona-puesto.'
    },
    {
      text: '“Detectamos riesgos humanos antes de que impacten en la operación.”',
      sub: 'Mapeo cuantitativo y preventivo de comportamientos in situ.'
    },
    {
      text: '“Validamos desempeño en contextos reales.”',
      sub: 'Pruebas ergonómicas y funcionales bajo picos reales de fatiga.'
    },
    {
      text: '“Reducir riesgo también es entender a las personas.”',
      sub: 'Enfoque equilibrado entre bienestar y productividad.'
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. SECCIÓN HERO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 animate-slide-up" aria-labelledby="home-title">
        {/* Indicador superior institucional */}
        <div className="flex justify-center md:justify-start mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-100/80 uppercase tracking-widest">
            <Award className="h-3.5 w-3.5" />
            Organismo Técnico de Evaluación
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de Compromiso y Rigor */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h1 id="home-title" className="text-4xl sm:text-5xl font-black tracking-tight text-hurvant-navy leading-none">
                Evaluamos Competencias Reales en <span className="text-gradient-brand">Entornos Exigentes</span>
              </h1>
              <p className="text-lg text-slate-605 font-medium max-w-2xl">
                Validación de desempeño real, reducción del riesgo operativo y aseguramiento del encaje persona-puesto de manera neutral e inalterable.
              </p>
            </div>

            {/* Tarjeta de Imparcialidad principal */}
            <article className="glass-card rounded-custom-lg p-8 shadow-xs border border-slate-200/60 relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <h2 className="text-xl font-bold text-hurvant-navy mb-4 border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <ShieldAlert className="h-5.5 w-5.5 text-hurvant-indigo" />
                Compromiso de Independencia y Separación de Actividades
              </h2>
              
              <div className="space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  HURVANT se constituye como una entidad técnica especializada y de estricta <strong>tercera parte</strong>. Operamos bajo los más rigurosos marcos de aseguramiento técnico para la validación objetiva de capacidades y el control del riesgo humano y conductual.
                </p>
                
                {/* Declaración Jurada destacada en color corporativo */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-hurvant-navy-dark text-white p-6 rounded-custom-md border-l-4 border-amber-500 border border-slate-800/80 shadow-md space-y-2.5">
                  <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
                    Aviso de Imparcialidad (UNE-EN ISO/IEC 17024 & ISO/IEC 17020)
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                    En estricto cumplimiento con los principios internacionales de gobernanza, HURVANT declara públicamente que <strong>NO imparte formación, NO presta asesoría técnica en prevención de riesgos laborales (PRL) y NO comercializa ni alquila equipos de trabajo</strong>. Esta separación radical garantiza la absoluta objetividad de nuestros informes y auditorías frente a inspecciones laborales.
                  </p>
                </div>
              </div>

              {/* Acciones principales */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => onViewChange('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-3.5 rounded-custom-md shadow-md hover:shadow-lg active:scale-98 transition-all hover:brightness-110"
                >
                  <span>Solicitar Programa Piloto</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
                <button 
                  onClick={() => onViewChange('services')}
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-custom-md active:scale-98 transition-all"
                >
                  Ver Servicios y Ruta Técnica
                </button>
              </div>
            </article>

            {/* Tarjetas secundarias en grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200/60 rounded-custom-md p-6 glass-card-hover">
                <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-wider block mb-2">Evaluación Operativa</span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Análisis directo in situ de hábitos conductuales y destreza real en logística, hotelería e industria para asegurar la máxima reducción de errores.
                </p>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-custom-md p-6 glass-card-hover">
                <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-wider block mb-2">Gobernanza ISO</span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Estructura y comités independientes preparados bajo normas internacionales ISO/IEC 17024 e ISO/IEC 17020 para garantizar la neutralidad total de nuestros dictámenes.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Visualizador del Modelo Oficial del Certificado */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-card rounded-custom-lg p-6 border-2 border-dashed border-slate-200/80 bg-white shadow-xs">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 text-center flex items-center justify-center gap-2">
                <Cpu className="h-4 w-4 text-hurvant-indigo" />
                Modelo Oficial de Certificación
              </h3>
              
              {/* Imagen del Certificado Oficial */}
              <figure className="relative group overflow-hidden rounded-custom-md border border-slate-200/80 shadow-md mb-6 aspect-[4/3] bg-slate-50 flex items-center justify-center">
                <img 
                  src="/Modelo_Certificado_de_Competencia_Hurvant.jpg" 
                  alt="Modelo Oficial de Certificado de Competencia Hurvant" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => onViewChange('verification')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 text-slate-800 shadow-sm"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Ir al Buscador RGPD
                  </button>
                </div>
              </figure>
              
              {/* Atributos de seguridad e inmutabilidad */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Elementos de Seguridad y Verificación:
                </h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-xs font-black">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-800 block">Código Único de Registro</strong>
                      <span className="text-slate-500">Trazabilidad individual pública e inmutable en nuestro registro nacional.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-xs font-black">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-800 block">Firma Criptográfica SHA-256</strong>
                      <span className="text-slate-500">Sello digital inalterable que garantiza la legitimidad frente a inspecciones.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-xs font-black">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-800 block">Consola Pública de Verificación</strong>
                      <span className="text-slate-500">Buscador seguro integrado con cumplimiento estricto RGPD.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR: EL VACÍO EN EL MERCADO */}
      <section className="bg-slate-100 border-y border-slate-200/80 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Propuesta de Valor Principal</span>
            <h2 className="text-3xl font-black text-hurvant-navy tracking-tight sm:text-4xl">
              El Vacío entre la Formación Tradicional y la Operación Real
            </h2>
            <p className="text-sm sm:text-base text-slate-505 leading-relaxed">
              Muchas empresas forman, seleccionan y cumplen rigurosamente la normativa de prevención de riesgos (PRL), pero no disponen de herramientas para medir el comportamiento práctico diario.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Tarjeta 1: La situación habitual */}
            <article className="bg-white border border-rose-100 rounded-custom-lg p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-rose-50 text-rose-500 rounded-custom-md flex items-center justify-center shrink-0 border border-rose-100">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-hurvant-navy uppercase tracking-wide">
                  Lo que hacen la mayoría de empresas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Confían exclusivamente en la formación teórica presencial u online, la selección de currículums estándar y el cumplimiento básico documental de prevención de riesgos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-50/80 text-xs text-rose-600 font-semibold italic">
                Resultado: No previene accidentes ni reduce la ineficiencia.
              </div>
            </article>

            {/* Tarjeta 2: La brecha no resuelta */}
            <article className="bg-white border border-slate-200/80 rounded-custom-lg p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-slate-100 text-slate-500 rounded-custom-md flex items-center justify-center shrink-0 border border-slate-200/60">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-hurvant-navy uppercase tracking-wide">
                  La brecha de desempeño oculta
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No se evalúa la adaptación funcional real de la persona a su puesto físico, su comportamiento ante picos reales de fatiga y estrés, ni su tolerancia a la presión operativa de entrega.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold italic">
                Falta de visibilidad sobre los riesgos de campo reales.
              </div>
            </article>

            {/* Tarjeta 3: La solución de Hurvant */}
            <article className="bg-gradient-to-r from-hurvant-navy to-hurvant-navy-dark text-white rounded-custom-lg p-6 flex flex-col justify-between shadow-md border-l-4 border-hurvant-cyan">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-hurvant-cyan/15 text-hurvant-cyan rounded-custom-md flex items-center justify-center shrink-0 border border-hurvant-cyan/20">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  El Enfoque Diferencial de Hurvant
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Evaluamos directamente en campo. Validamos la capacidad funcional ergonómica, el comportamiento seguro real, la resiliencia en picos de demanda y la adecuación persona-puesto.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-hurvant-cyan font-bold italic uppercase tracking-wide">
                Gobernanza y trazabilidad técnica objetiva.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. FRASES ESTRATÉGICAS Y FILOSOFÍA DE MARCA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Filosofía */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Filosofía de Hurvant</span>
            <h2 className="text-3xl font-black text-hurvant-navy tracking-tight leading-tight">
              Diseñado para Detener el Desgaste Humano y Operativo
            </h2>
            <blockquote className="border-l-4 border-hurvant-indigo pl-5 py-2 font-medium text-slate-700 italic text-sm sm:text-base leading-relaxed bg-slate-50 rounded-r-custom-md">
              “No todo el mundo sirve para todos los puestos, y detectar eso a tiempo reduce errores, desgaste y riesgo.”
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              El rendimiento corporativo no depende únicamente de la buena actitud del trabajador. La formación estándar no garantiza competencia funcional por sí sola. El bienestar y acople operativo influyen de forma directa en el control de accidentes y en la productividad final de la empresa.
            </p>
            <button
              onClick={() => onViewChange('about')}
              className="inline-flex items-center gap-2 text-xs font-bold text-hurvant-indigo hover:text-hurvant-navy transition-colors mt-2"
            >
              <span>Leer más sobre nuestra filosofía</span>
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Columna Mensajes Clave (Quotes Rotativas o Grid) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center lg:text-left mb-2">Mensajes Clave de la Organización</span>
            
            <div className="space-y-4">
              {brandQuotes.map((quote, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-custom-md p-5 border border-slate-200/60 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-hurvant-indigo/20 hover:bg-slate-50/50"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />
                  <p className="text-xs sm:text-sm font-black text-hurvant-navy">{quote.text}</p>
                  <span className="text-xs text-slate-500 font-semibold block mt-1">{quote.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. REDIRECCIÓN A PILOTO (LLAMADA A LA ACCIÓN) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 shadow-lg relative overflow-hidden border-t-4 border-hurvant-cyan flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block">Programa Piloto de Validación Directa</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">¿Desea probar la metodología Hurvant en su empresa?</h2>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed">
              Realice una implementación de prueba en un área específica o turno acotado. Evaluamos y mitigamos problemas operativos en semanas, con cero fricción e interrupción para su centro.
            </p>
          </div>

          <button
            onClick={() => onViewChange('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-hurvant-cyan to-hurvant-cyan-light text-slate-950 font-black text-xs sm:text-sm px-7 py-4 rounded-custom-md shadow-md active:scale-98 transition-all hover:brightness-110 shrink-0 uppercase tracking-wider"
          >
            <span>Solicitar Piloto</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>
      </section>
    </div>
  );
}
