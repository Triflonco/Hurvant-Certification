import React from 'react';
import { Link } from 'react-router-dom';
import { Sliders, ShieldCheck, CheckCircle2, ArrowRight, Activity, Clock } from 'lucide-react';
import PageMeta from '../shared/PageMeta';

export default function ServicePiloto() {
  return (
    <>
      <PageMeta 
        title="Programa Piloto de Validación | HURVANT Certification"
        description="Pruebe la metodología de evaluación práctica de HURVANT en un turno o área delimitada de su empresa, sin fricción ni interrupción operativa."
        canonicalPath="/servicios/programas-piloto"
        ogImage="https://www.hurvant.com/training_alignment.jpg"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-slide-up">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-hurvant-indigo">Inicio</Link>
          <span>/</span>
          <Link to="/servicios" className="hover:text-hurvant-indigo">Servicios</Link>
          <span>/</span>
          <span className="text-hurvant-navy font-bold">Programas Piloto</span>
        </nav>

        {/* Hero de la Landing */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-100 uppercase tracking-widest">
              <Sliders className="h-4 w-4" />
              Despliegue Controlado y Flexible
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-hurvant-navy tracking-tight leading-tight">
              Programa Piloto de Validación Operativa
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Compruebe la efectividad de la metodología Hurvant en una sección acotada de su empresa antes de una implantación global. Cero interrupción y resultados medibles en semanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-4 rounded-custom-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Solicitar Programa Piloto</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card rounded-custom-lg p-6 border border-slate-200 shadow-md space-y-4 bg-white">
              <h3 className="text-sm font-bold text-hurvant-navy uppercase tracking-wider border-b pb-2">Ventajas del Piloto:</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Área o turno acotado (ej. 10 a 25 operarios)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Cero impacto en el ritmo de producción</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Entrega de informe ejecutivo de riesgo en 14 días</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Sin compromiso de permanencia</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">Pruebe la metodología Hurvant en su empresa</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Seleccionemos juntos un turno o sección crítica para realizar la primera evaluación observacional sin coste de compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-hurvant-cyan text-slate-950 font-bold text-xs sm:text-sm px-8 py-4 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <span>Iniciar Piloto</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
