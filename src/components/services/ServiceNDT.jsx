import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, CheckCircle2, ArrowRight, Activity, Wrench } from 'lucide-react';
import PageMeta from '../shared/PageMeta';

export default function ServiceNDT() {
  return (
    <>
      <PageMeta 
        title="Ensayos No Destructivos NDT / END | HURVANT Certification"
        description="Inspección instrumental y ensayos no destructivos (ultrasonidos, partículas magnéticas, líquidos penetrantes, inspección visual) para grúas, estructuras y elementos de izaje."
        canonicalPath="/servicios/ensayos-no-destructivos"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-slide-up">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-hurvant-indigo">Inicio</Link>
          <span>/</span>
          <Link to="/servicios" className="hover:text-hurvant-indigo">Servicios</Link>
          <span>/</span>
          <span className="text-hurvant-navy font-bold">Ensayos No Destructivos (NDT)</span>
        </nav>

        {/* Hero de la Landing */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 uppercase tracking-widest">
              <Cpu className="h-4 w-4" />
              Inspección Instrumental NDT / END
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-hurvant-navy tracking-tight leading-tight">
              Ensayos No Destructivos e Integridad Estructural
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Detectamos grietas internas, fatiga metálica y micro-fisuras imperceptibles a simple vista en elementos de elevación, soldaduras críticas y componentes mecánicos de alta responsabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-4 rounded-custom-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Solicitar Inspección NDT</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card rounded-custom-lg p-3 border border-slate-200 shadow-md relative overflow-hidden bg-white">
              <img
                src="/ndt_testing_weld.png"
                alt="Ensayos No Destructivos NDT"
                className="w-full h-72 object-cover rounded-custom-md"
              />
              <div className="p-4 space-y-2">
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider block">Inspectores Certificados ISO 9712</span>
                <p className="text-xs text-slate-600">Ensayos volumétricos y superficiales con equipos portátiles calibrados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Métodos de Ensayo */}
        <section className="space-y-8">
          <header className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block">Técnicas Instrumentales</span>
            <h2 className="text-2xl sm:text-3xl font-black text-hurvant-navy">Métodos de Ensayo No Destructivo que Aplicamos</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-hurvant-navy">1. Ultrasonidos (UT)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evaluación volumétrica de soldaduras y medición de espesores metálicos en vigas de grúa y recipientes. Conforme a norma UNE-EN ISO 17640.
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-hurvant-navy">2. Partículas Magnéticas (MT)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Detección ultrasensible de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos (ganchos, eslingas, bulones).
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-hurvant-navy">3. Líquidos Penetrantes (PT)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Localización de imperfecciones abiertas a la superficie en materiales no porosos, como soldaduras de acero inoxidable y aleaciones.
              </p>
            </div>
            <div className="glass-card p-6 rounded-custom-lg border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-hurvant-navy">4. Inspección Visual Avanzada (VT)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Examen directo y boroscópico de deformaciones, corrosión y alineamiento de estructuras según la norma UNE-EN ISO 17637.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white rounded-custom-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">Prevenga fallos catastróficos en sus equipos de elevación</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Consulte con nuestros inspectores de Ensayos No Destructivos para planificar una campaña de inspección en sus instalaciones.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-hurvant-cyan text-slate-950 font-bold text-xs sm:text-sm px-8 py-4 rounded-custom-md hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <span>Solicitar Presupuesto NDT</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
