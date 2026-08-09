import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, CheckCircle2, ArrowRight, FileText, AlertTriangle, Users } from 'lucide-react';
import PageMeta from '../shared/PageMeta';

export default function ServiceEvaluacion() {
  return (
    <>
      <PageMeta 
        title="Evaluación Operativa de Personas | HURVANT Certification"
        description="Validación práctica y observacional de competencias en el puesto de trabajo. Evaluación del comportamiento seguro, la adaptación funcional y la capacidad real sin interrumpir la producción."
        canonicalPath="/servicios/evaluacion-operativa"
        ogImage="https://www.hurvant.com/eval_interview.jpg"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-slide-up">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-hurvant-indigo">Inicio</Link>
          <span>/</span>
          <Link to="/servicios" className="hover:text-hurvant-indigo">Servicios</Link>
          <span>/</span>
          <span className="text-hurvant-navy font-bold">Evaluación Operativa</span>
        </nav>

        {/* Hero de la Landing */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-100 uppercase tracking-widest">
              <Activity className="h-4 w-4" />
              Esquema de Validación Práctica
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-hurvant-navy tracking-tight leading-tight">
              Evaluación Operativa de Personas en el Puesto Real
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Superamos la limitación de los diplomas teóricos. Validamos observacionalmente el comportamiento, las habilidades de manipulación y la resiliencia en contexto real de trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-4 rounded-custom-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Solicitar Evaluación de Personal</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link
                to="/servicios/programas-piloto"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-4 rounded-custom-md transition-all"
              >
                Ver Programa Piloto
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card rounded-custom-lg p-3 border border-slate-200 shadow-md relative overflow-hidden bg-white">
              <img
                src="/eval_interview.jpg"
                alt="Evaluación Operativa en Campo"
                className="w-full h-72 object-cover rounded-custom-md"
              />
              <div className="p-4 space-y-2">
                <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-wider block">Observación In-Situ</span>
                <p className="text-xs text-slate-600">Evaluación sin interferir en la cadena de producción ni generar fricciones en el turno de trabajo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* El Desafío del Cliente */}
        <section className="bg-slate-100 border border-slate-200/80 rounded-custom-lg p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">El Desafío Regulatorio y Operativo</span>
            <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy">¿Por qué la formación teórica no es suficiente?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              El 90% de las sanciones e inspecciones de trabajo por accidentes graves demuestran que el trabajador disponía del título teórico exigido, pero carecía de hábitos seguros comprobados en la operativa diaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <AlertTriangle className="h-6 w-6 text-rose-500" />
              <h3 className="text-sm font-bold text-hurvant-navy">Desajuste Persona-Puesto</h3>
              <p className="text-xs text-slate-600">Trabajadores asignados a tareas con exigencia ergonómica o psicológica que supera sus capacidades funcionales.</p>
            </div>
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <Users className="h-6 w-6 text-amber-500" />
              <h3 className="text-sm font-bold text-hurvant-navy">Rotación en ETT</h3>
              <p className="text-xs text-slate-600">Alta rotación de personal temporal sin verificación práctica previa en las máquinas específicas del centro.</p>
            </div>
            <div className="bg-white p-6 rounded-custom-md border border-slate-200 space-y-3">
              <ShieldCheck className="h-6 w-6 text-hurvant-indigo" />
              <h3 className="text-sm font-bold text-hurvant-navy">Responsabilidad Legal</h3>
              <p className="text-xs text-slate-600">Falta de evidencias documentadas e inalterables de la diligencia debida del empresario ante los tribunales.</p>
            </div>
          </div>
        </section>

        {/* Metodología Detallada */}
        <section className="space-y-8">
          <header className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Proceso de Trabajo</span>
            <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy">Fases de la Evaluación Operativa</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-4">
              <div className="h-8 w-8 rounded-full bg-indigo-50 text-hurvant-indigo font-bold flex items-center justify-center text-sm">1</div>
              <h3 className="text-base font-bold text-hurvant-navy">Observación Directa en Campo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nuestros evaluadores técnicos observan la actividad sin interferir en los tiempos de producción, registrando datos objetivos sobre postura ergonómica, uso de EPIs, manejo de mandos y cumplimiento de normas internas.
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-4">
              <div className="h-8 w-8 rounded-full bg-indigo-50 text-hurvant-indigo font-bold flex items-center justify-center text-sm">2</div>
              <h3 className="text-base font-bold text-hurvant-navy">Pruebas Prácticas de Habilidad</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Verificación de maniobras críticas (carga en altura, pasillos estrechos, frenado de emergencia) bajo protocolos estandarizados alineados con las guías técnicas del INSST.
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-4">
              <div className="h-8 w-8 rounded-full bg-indigo-50 text-hurvant-indigo font-bold flex items-center justify-center text-sm">3</div>
              <h3 className="text-base font-bold text-hurvant-navy">Matriz de Competencias y Certificado</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generación de informe técnico individual con puntuación cuantitativa y emisión del Certificado de Aptitud Operativa con QR inmutable.
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-4">
              <div className="h-8 w-8 rounded-full bg-indigo-50 text-hurvant-indigo font-bold flex items-center justify-center text-sm">4</div>
              <h3 className="text-base font-bold text-hurvant-navy">Carga en el Portal Corporativo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Acceso inmediato para el responsable de RRHH / PRL al cuadro de mando de su equipo, facilitando la auditoría documental y la gestión de revisiones.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">¿Listo para validar la competencia real de su equipo?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Contacte con nuestros evaluadores técnicos y solicite una propuesta a medida para sus centros de trabajo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-hurvant-cyan text-slate-950 font-bold text-xs sm:text-sm px-8 py-4 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <span>Solicitar propuesta técnica</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
