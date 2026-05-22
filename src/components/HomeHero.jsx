import React from 'react';
import { Search, ChevronRight, Award, ShieldAlert, Cpu, Eye } from 'lucide-react';

export default function HomeHero({ onViewChange }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="home-title">
      {/* Indicador superior institucional */}
      <div className="flex justify-center md:justify-start mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-100/80 uppercase tracking-widest">
          <Award className="h-3.5 w-3.5" />
          Organismo Técnico de Conformidad
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Columna Izquierda: Información de Compromiso y Rigor */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h1 id="home-title" className="text-4xl sm:text-5xl font-black tracking-tight text-hurvant-navy leading-none">
              Gobernanza, Certificación y <span className="text-gradient-brand">Rigor Técnico</span> de Tercera Parte
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-2xl">
              Entidad independiente en proceso de adecuación y acreditación bajo normas internacionales de evaluación.
            </p>
          </div>

          {/* Tarjeta de Imparcialidad principal */}
          <article className="glass-card rounded-custom-lg p-8 shadow-xs border border-slate-200/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <h2 className="text-xl font-bold text-hurvant-navy mb-4 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <ShieldAlert className="h-5.5 w-5.5 text-hurvant-indigo" />
              Compromiso de Independencia y Separación de Actividades
            </h2>
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                HURVANT se constituye como una entidad de evaluación de la conformidad técnica estrictamente de <strong>tercera parte</strong>. Operamos bajo los más rigurosos marcos de aseguramiento técnico para la certificación de competencias profesionales y la validación reglamentaria de equipos de trabajo.
              </p>
              
              {/* Declaración Jurada destacada en color corporativo */}
              <div className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white p-5 rounded-custom-md border-l-4 border-hurvant-cyan space-y-2.5">
                <span className="text-[10px] font-bold tracking-widest text-hurvant-cyan uppercase block">
                  Aviso de Cumplimiento Regulatorio (UNE-EN ISO/IEC 17024 & ISO/IEC 17020)
                </span>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                  En estricto cumplimiento con la <strong>cláusula 5.2 (Imparcialidad)</strong>, HURVANT declara públicamente que <strong>NO imparte formación, NO presta asesoría técnica en prevención de riesgos laborales (PRL) y NO comercializa ni alquila equipos de trabajo</strong>. Esta separación radical de funciones garantiza la absoluta objetividad y la validez jurídica de nuestros dictámenes frente a inspecciones laborales.
                </p>
              </div>
              
              <p className="text-sm text-slate-500 italic">
                Nuestra misión institucional es proporcionar confianza e imparcialidad en los procesos de evaluación de competencias y adecuación de maquinaria en España, garantizando trazabilidad total e inalterable.
              </p>
            </div>

            {/* Acciones principales */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 border-t border-slate-100">
              <button 
                onClick={() => onViewChange('verification')}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-3.5 rounded-custom-md shadow-md hover:shadow-lg active:scale-98 transition-all hover:brightness-110"
              >
                <Search className="h-4.5 w-4.5" />
                Verificar Certificado
              </button>
              <button 
                onClick={() => onViewChange('schemes')}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-custom-md active:scale-98 transition-all"
              >
                Ver Esquemas Técnicos
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </article>

          {/* Tarjetas secundarias en grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200/60 rounded-custom-md p-6 glass-card-hover">
              <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-wider block mb-2">Alineación ISO 17024</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Esquemas de evaluación estructurados bajo criterios de competencia objetivos, garantizando la aptitud técnica real de operarios críticos mediante exámenes teórico-prácticos neutrales.
              </p>
            </div>
            <div className="bg-white border border-slate-200/60 rounded-custom-md p-6 glass-card-hover">
              <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-wider block mb-2">Auditoría RD 1215/97</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dictámenes y actas técnicas de adecuación de maquinaria de acuerdo con el Real Decreto 1215/1997, realizados por ingenieros de inspección técnica colegiados.
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 text-slate-800 shadow-sm">
                  <Eye className="h-3.5 w-3.5" />
                  Ver Plantilla
                </span>
              </div>
            </figure>
            
            {/* Atributos de seguridad e inmutabilidad */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Elementos de Seguridad Incorporados:
              </h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-[10px] font-black">✓</span>
                  <div className="text-xs">
                    <strong className="text-slate-800 block">Código de Registro Único</strong>
                    <span className="text-slate-500">Trazabilidad individual inmutable en el registro nacional de Hurvant.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-[10px] font-black">✓</span>
                  <div className="text-xs">
                    <strong className="text-slate-800 block">Firma Criptográfica SHA-256</strong>
                    <span className="text-slate-500">Sello digital único que imposibilita la alteración o falsificación del documento.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 text-[10px] font-black">✓</span>
                  <div className="text-xs">
                    <strong className="text-slate-800 block">Código QR de Verificación Inmediata</strong>
                    <span className="text-slate-500">Enlace directo y seguro al validador web institucional.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
