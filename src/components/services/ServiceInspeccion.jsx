import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, FileText } from 'lucide-react';
import PageMeta from '../shared/PageMeta';

export default function ServiceInspeccion() {
  return (
    <>
      <PageMeta 
        title="Inspección de Maquinaria ISO 17020 & RD 1215/97 | HURVANT Inspection"
        description="Auditoría e inspección técnica de equipos de trabajo bajo norma UNE-EN ISO/IEC 17020 y Real Decreto 1215/1997. Verificación física in-situ, placas de marcado QR y blindaje legal LPRL Ley 31/1995."
        canonicalPath="/servicios/inspeccion-equipos"
        ogImage="https://www.hurvant.com/heavy_machinery_loader.png"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-slide-up">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-hurvant-indigo">Inicio</Link>
          <span>/</span>
          <Link to="/servicios" className="hover:text-hurvant-indigo">Servicios</Link>
          <span>/</span>
          <span className="text-hurvant-navy font-bold">Inspección de Equipos (ISO 17020 / RD 1215)</span>
        </nav>

        {/* Hero de la Landing */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-widest">
                <Wrench className="h-4 w-4" />
                Organismo de Inspección (UNE-EN ISO/IEC 17020)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                RD 1215/1997 | Ley 31/1995
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-hurvant-navy tracking-tight leading-tight">
              Inspección y Validación de Maquinaria Industrial
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Como Organismo Técnico de Inspección de tercera parte (UNE-EN ISO/IEC 17020), aseguramos la plena conformidad de sus equipos de trabajo con las exigencias del Real Decreto 1215/1997 y la Ley 31/1995 de Prevención de Riesgos Laborales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-4 rounded-custom-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Solicitar Auditoría de Maquinaria</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card rounded-custom-lg p-3 border border-slate-200 shadow-md relative overflow-hidden bg-white">
              <img
                src="/heavy_machinery_loader.png"
                alt="Inspección de Maquinaria Industrial"
                className="w-full h-72 object-cover rounded-custom-md"
              />
              <div className="p-4 space-y-2">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Inspección Física In-Situ</span>
                <p className="text-xs text-slate-600">Verificación de resguardos, dispositivos de parada y estabilidad mecánica en planta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Criterio Legal y Normativo */}
        <section className="bg-slate-100 border border-slate-200/80 rounded-custom-lg p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Marco Legal Exigente</span>
            <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy">Real Decreto 1215/1997: La Obligación del Empresario</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              La legislación española exige que todo equipo de trabajo puesto a disposición de los trabajadores cumpla estrictamente con las condiciones mínimas de seguridad. El desconocimiento no exime de la responsabilidad penal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <ShieldCheck className="h-6 w-6 text-amber-600" />
              <h3 className="text-sm font-bold text-hurvant-navy">Dictamen Técnico Firmado</h3>
              <p className="text-xs text-slate-600">Informe estructurado redactado por ingenieros técnicos especializados con firma digital inmutable.</p>
            </div>
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <Wrench className="h-6 w-6 text-hurvant-cyan" />
              <h3 className="text-sm font-bold text-hurvant-navy">Placa de Marcado QR</h3>
              <p className="text-xs text-slate-600">Identificación física resistente pegada a la máquina con código QR para verificación instantánea.</p>
            </div>
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <FileText className="h-6 w-6 text-hurvant-indigo" />
              <h3 className="text-sm font-bold text-hurvant-navy">Plan de Medidas Correctoras</h3>
              <p className="text-xs text-slate-600">Priorización de defectos (Bloqueante, Grave, Leve) con instrucciones concretas de subsanación.</p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">¿Sus equipos cumplen con el Real Decreto 1215/1997?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Solicite una revisión previa de su parque de maquinaria con nuestros técnicos especializados.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-hurvant-cyan text-slate-950 font-bold text-xs sm:text-sm px-8 py-4 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <span>Solicitar Inspección Técnica</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
