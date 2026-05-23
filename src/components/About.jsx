import React from 'react';
import { Target, Landmark, Milestone, Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

//paco//
export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="about-title">
      {/* Cabecera */}
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Sobre la Organización</span>
        <h2 id="about-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Filosofía, Propósito y Estructura de Imparcialidad
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Validación rigurosa de competencias en el puesto de trabajo impulsada por una gobernanza independiente.
        </p>
      </header>

      {/* Grid Superior: Propósito y Filosofía */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Filosofía del Talento */}
        <article className="lg:col-span-7 bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 shadow-md border-l-4 border-hurvant-cyan relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />

          <span className="text-[10px] font-bold tracking-widest text-hurvant-cyan uppercase block">
            Filosofía Operativa
          </span>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “No todo el mundo sirve para todos los puestos”
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              Detectar a tiempo el desajuste funcional entre el operario y su puesto físico reduce de manera inmediata los errores costosos, la rotación recurrente, el desgaste psicofísico y el riesgo humano.
            </p>
            <p>
              En Hurvant entendemos que:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="text-hurvant-cyan font-bold shrink-0">▪</span>
                <span>El rendimiento no depende únicamente de la actitud personal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-hurvant-cyan font-bold shrink-0">▪</span>
                <span>La formación puramente teórica no garantiza competencia real ni hábitos seguros en campo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-hurvant-cyan font-bold shrink-0">▪</span>
                <span>El bienestar operativo diario influye de manera directa y medible en la seguridad y productividad global.</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Misión y Visión de Futuro */}
        <article className="lg:col-span-5 glass-card rounded-custom-lg border border-slate-200/60 shadow-xs flex flex-col justify-between overflow-hidden">
          <div className="h-48 overflow-hidden relative border-b border-slate-200/60">
            <img
              src="/training_alignment.jpg"
              alt="HURVANT Technical Alignment & Governance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
          </div>
          <div className="p-6 sm:p-8 space-y-6 flex-grow">
            <h3 className="text-lg font-bold text-hurvant-navy border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <Target className="h-5.5 w-5.5 text-hurvant-indigo" />
              Visión a Medio y Largo Plazo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hurvant evoluciona continuamente hacia la estandarización de competencias. A medio plazo, consolidaremos esquemas propios de validación y estándares internos sectoriales para la certificación formal de personas.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nuestra hoja de ruta estratégica contempla la alineación regulatoria y la posterior solicitud de acreditación formal bajo modelos internacionales de la entidad nacional (ENAC), tales como la norma <strong>UNE-EN ISO/IEC 17024</strong> para la certificación de personas e <strong>ISO/IEC 17020</strong> para actividades de inspección.
            </p>
            <div className="bg-indigo-50/50 p-4 rounded-custom-md border border-indigo-100/40 text-xs text-slate-600 font-medium">
              La acreditación oficial no es el punto de inicio comercial de nuestro proyecto, sino la consecuencia final de una metodología validada empíricamente en el mercado real de trabajo.
            </div>
          </div>
        </article>
      </div>

      {/* Línea divisoria y título de Gobernanza */}
      <div className="border-t border-slate-200 pt-16 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Transparencia Institucional</span>
        <h3 className="text-2xl sm:text-3xl font-black text-hurvant-navy tracking-tight">
          Gobernanza y Salvaguarda de la Imparcialidad
        </h3>
        <p className="text-slate-500 font-medium mt-1 text-xs sm:text-sm">
          Separación estricta de actividades y supervisión técnica externa independiente.
        </p>
      </div>

      {/* Grid de Imparcialidad (Absorbido de Impartiality.jsx) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Declaración de la Alta Dirección */}
        <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-indigo/5 to-transparent rounded-bl-full pointer-events-none" />

          <h4 className="text-lg font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
            <Milestone className="h-5.5 w-5.5 text-hurvant-indigo" />
            Declaración Institucional de la Alta Dirección
          </h4>

          <div className="space-y-6">
            <blockquote className="border-l-4 border-hurvant-indigo pl-5 py-2 font-medium text-slate-700 italic text-xs sm:text-sm leading-relaxed bg-slate-50/50 rounded-r-custom-md">
              "La dirección de HURVANT asume el compromiso inequívoco de actuar con absoluta imparcialidad, independencia y neutralidad en el desarrollo de todas sus actividades de validación y evaluación.
              <br /><br />
              Entendemos que la imparcialidad es el valor fundacional de la evaluación de la conformidad. Por ello, hemos diseñado un sistema de gobernanza donde las decisiones técnicas se basan exclusivamente en evidencias objetivas en campo, exentas de cualquier influencia comercial, corporativa o financiera externa.
              <br /><br />
              No permitimos que presiones económicas o comerciales comprometan la rigurosidad e imparcialidad de nuestros dictámenes técnicos. Cualquier potencial conflicto de interés es identificado, analizado y mitigado activamente bajo el amparo directo de nuestro Comité de Salvaguarda de la Imparcialidad."
            </blockquote>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <strong className="text-xs sm:text-sm text-hurvant-navy block font-bold">Fdo. Dirección General de Hurvant</strong>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block">Sello Oficial de Calidad y Gobernanza</span>
              </div>
              <div className="h-10 w-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-hurvant-indigo" />
              </div>
            </div>
          </div>
        </article>

        {/* Comité de Salvaguarda */}
        <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-cyan/5 to-transparent rounded-bl-full pointer-events-none" />

          <h4 className="text-lg font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
            <Users className="h-5.5 w-5.5 text-hurvant-cyan" />
            Comité de Salvaguarda de la Imparcialidad
          </h4>

          <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
            <p>
              Para garantizar un control externo real y transparente, HURVANT cuenta con un <strong>Comité de Salvaguarda de la Imparcialidad</strong> de composición equilibrada y carácter independiente.
            </p>
            <p>
              Este órgano de supervisión está compuesto por miembros externos que representan el interés de los diferentes actores del sector industrial, impidiendo que una sola fuerza domine las decisiones de calidad:
            </p>

            <ul className="space-y-3 bg-slate-50/80 p-5 rounded-custom-md border border-slate-200/60">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-hurvant-navy">
                <span className="h-2 w-2 rounded-full bg-hurvant-indigo shrink-0" />
                Representantes de Colegios Oficiales de Ingenieros de España.
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-hurvant-navy">
                <span className="h-2 w-2 rounded-full bg-hurvant-indigo shrink-0" />
                Técnicos superiores y expertos prevencionistas de reconocido prestigio.
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-hurvant-navy">
                <span className="h-2 w-2 rounded-full bg-hurvant-indigo shrink-0" />
                Asociaciones sectoriales de usuarios de maquinaria industrial y logística.
              </li>
            </ul>

            <div className="bg-indigo-50/50 border border-indigo-100/50 p-5 rounded-custom-md flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-hurvant-indigo mt-0.5 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-600 leading-normal">
                <strong className="text-hurvant-navy font-bold block mb-1">Competencia Principal:</strong>
                El comité dispone de plena autoridad para revisar las auditorías de riesgos conductuales y de puesto de Hurvant, paralizar decisiones en caso de detectar indicios de conflicto, y tramitar de forma directa el escalado de quejas de clientes no resueltas.
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Nota Oficial de Lanzamiento y Acreditación */}
      <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-hurvant-navy-dark border border-slate-800/80 text-white rounded-custom-lg p-6 lg:p-8 relative overflow-hidden shadow-lg border-l-4 border-amber-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pb-4 border-b border-slate-850">
          <div>
            <span className="text-[9px] font-black tracking-widest text-amber-400 uppercase block mb-1">Estatus Regulatorio e Implantación</span>
            <h4 className="text-base sm:text-lg font-black text-white">Lanzamiento Comercial y Plan de Acreditación ENAC</h4>
          </div>
          <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
            Cataluña · Fase de Lanzamiento 2026
          </span>
        </header>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          <p>
            <strong>HURVANT Certification</strong> es una entidad técnica de nueva creación que iniciará sus operaciones oficiales de campo en los próximos meses, desplegando inicialmente su actividad de validación en las provincias de <strong>Barcelona, Tarragona, Girona y Lleida (Comunidad Autónoma de Cataluña)</strong>.
          </p>
          <p>
            En esta fase de lanzamiento, todas nuestras evaluaciones de aptitud conductual, inspecciones de puesta a disposición de maquinaria (Real Decreto 1215/1997) y Ensayos No Destructivos (END) se ejecutan bajo manuales de procedimiento técnico e instrucciones de trabajo en estricta conformidad con las <strong>normas de seguridad españolas y europeas (Reglamento de Aparatos de Elevación, Instrucciones MIE-AEM, Normativas Técnicas UNE e ISO 9712)</strong>.
          </p>
          <p>
            HURVANT ha estructurado y diseñado todos sus manuales de calidad, políticas y comisiones de gobernanza desde el primer día bajo los rigurosos estándares internacionales de acreditación. Declaramos de forma transparente que <strong>actualmente nos encontramos en la fase previa de implantación comercial y no disponemos todavía de la acreditación formal otorgada por la Entidad Nacional de Acreditación (ENAC)</strong>. La solicitud formal de acreditación técnica bajo las normas <strong>UNE-EN ISO/IEC 17024</strong> (organismo de certificación de personas) y <strong>UNE-EN ISO/IEC 17020</strong> (organismo de inspección) se tramitará ante ENAC en los meses posteriores a la consolidación de nuestra base operativa en Cataluña.
          </p>
        </div>
      </div>
    </section>
  );
}
