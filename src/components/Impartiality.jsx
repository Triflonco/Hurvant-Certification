import React from 'react';
import { ShieldCheck, Users, Milestone, Award } from 'lucide-react';

export default function Impartiality() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="impartiality-title">
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Salvaguarda Institucional</span>
        <h2 id="impartiality-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Estructura de Imparcialidad y Gobernanza
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Política de independencia y funcionamiento del Comité de Salvaguarda externo.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Columna Izquierda: Declaración de la Alta Dirección */}
        <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-indigo/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <h3 className="text-xl font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
            <Milestone className="h-5.5 w-5.5 text-hurvant-indigo" />
            Declaración Institucional de la Alta Dirección
          </h3>
          
          <div className="space-y-6">
            <blockquote className="border-l-4 border-hurvant-indigo pl-5 py-2 font-medium text-slate-700 italic text-sm sm:text-base leading-relaxed bg-slate-50/50 rounded-r-custom-md">
              "La dirección de HURVANT asume el compromiso inequívoco de actuar con absoluta imparcialidad, independencia y neutralidad en el desarrollo de todas sus actividades de certificación e inspección.
              <br /><br />
              Entendemos que la imparcialidad es el valor fundacional de la evaluación de la conformidad. Por ello, hemos diseñado un sistema de gobernanza donde las decisiones técnicas se basan exclusivamente en evidencias objetivas del cumplimiento, exentas de cualquier influencia comercial, corporativa o financiera externa.
              <br /><br />
              No permitimos que presiones económicas o comerciales comprometan la rigurosidad e imparcialidad de nuestros dictámenes técnicos. Cualquier potencial conflicto de interés es identificado, analizado y mitigado activamente bajo el amparo directo del Comité de Salvaguarda de la Imparcialidad."
            </blockquote>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <strong className="text-sm text-hurvant-navy block font-bold">Fdo. Dirección General de Hurvant</strong>
                <span className="text-xs text-slate-500">Sello Oficial de Calidad y Gobernanza</span>
              </div>
              <div className="h-10 w-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-hurvant-indigo" />
              </div>
            </div>
          </div>
        </article>

        {/* Columna Derecha: Comité de Salvaguarda */}
        <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-cyan/5 to-transparent rounded-bl-full pointer-events-none" />

          <h3 className="text-xl font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
            <Users className="h-5.5 w-5.5 text-hurvant-cyan" />
            Comité de Salvaguarda de la Imparcialidad
          </h3>
          
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              Para garantizar un control externo real y de acuerdo con las normativas UNE-EN ISO/IEC 17024 e ISO/IEC 17020, HURVANT cuenta con un <strong>Comité de Salvaguarda de la Imparcialidad</strong> de composición equilibrada y carácter independiente.
            </p>
            <p>
              Este órgano de supervisión está compuesto exclusivamente por miembros externos que representan el interés de los diferentes actores del sector, impidiendo que una sola fuerza domine las decisiones de calidad:
            </p>

            <ul className="space-y-3 bg-slate-50 p-5 rounded-custom-md border border-slate-150">
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

            <div className="bg-indigo-50/50 border border-indigo-100 p-5 rounded-custom-md flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-hurvant-indigo mt-0.5 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-600">
                <strong className="text-hurvant-navy font-bold block mb-1">Competencia Principal:</strong> 
                El comité dispone de plena autoridad para revisar auditorías de riesgos, paralizar decisiones de certificación en caso de detectar indicios de conflicto, y tramitar de forma directa el escalado de quejas no resueltas.
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
