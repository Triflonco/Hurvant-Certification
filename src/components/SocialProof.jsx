import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, TrendingUp, AlertTriangle, Users, Cpu } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    {
      value: '90%',
      label: 'Accidentes por falta de verificación práctica',
      sub: 'Los títulos teóricos convencionales no garantizan hábitos seguros en campo.'
    },
    {
      value: 'ISO 17020',
      label: 'Inspección técnica de equipos',
      sub: 'Criterios de imparcialidad e independencia de organismo de inspección tipo tercera parte.'
    },
    {
      value: 'RD 1215/97',
      label: 'Adecuación de equipos de trabajo',
      sub: 'Auditorías físicas con marcado QR inmutable y blindaje jurídico.'
    },
    {
      value: 'ISO 17024',
      label: 'Certificación de personas',
      sub: 'Evaluación objetiva y trazabilidad de la capacidad operativa real de operarios.'
    },
    {
      value: '100%',
      label: 'Trazabilidad Criptográfica',
      sub: 'Firma digital SHA-256 en cada informe de inspección emitido.'
    }
  ];

  const pillars = [
    {
      icon: Award,
      title: 'Comité de Imparcialidad Independiente',
      desc: 'Supervisión técnica externa integrada por expertos e ingenieros sin conflictos comerciales.'
    },
    {
      icon: FileCheck,
      title: 'Validación en Entorno Real',
      desc: 'Evaluaciones sin interferir en los ritmos productivos de planta ni desorganizar turnos.'
    },
    {
      icon: ShieldCheck,
      title: 'Diligencia Debida ante Inspecciones',
      desc: 'Evidencia probatoria inalterable para proteger la responsabilidad legal corporativa.'
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-hurvant-cyan uppercase tracking-widest block">
            Rigor Técnico y Confianza Operativa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Diseñado para Garantizar la Máxima Seguridad Jurídica y Técnica
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Metodología objetiva desarrollada para responder a la exigencia real de la industria y la Inspección de Trabajo.
          </p>
        </div>

        {/* Grid de Cifras e Indicadores (5 Columnas a lo Ancho) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4.5">
          {stats.map((stat, idx) => {
            const isLastOdd = idx === 4;
            return (
              <div 
                key={idx} 
                className={`bg-slate-950/60 border border-slate-800/80 rounded-custom-md p-5 flex flex-col justify-between space-y-3 hover:border-hurvant-cyan/40 transition-colors ${
                  isLastOdd ? 'sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full' : 'w-full'
                }`}
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-gradient-brand block mb-1">
                    {stat.value}
                  </span>
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal font-medium">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pilares de Confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-custom-lg space-y-3"
              >
                <div className="h-10 w-10 bg-slate-900 text-hurvant-cyan rounded-custom-md flex items-center justify-center border border-slate-700">
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Banner de Garantía Institucional */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-hurvant-navy-dark border border-slate-800 rounded-custom-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block font-bold">Verificación Pública RGPD</strong>
              <span className="text-slate-400">Todos los certificados emitidos pueden ser consultados mediante código QR en nuestro registro oficial.</span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold text-[11px] border border-slate-700 shrink-0">
            SHA-256 Verified
          </span>
        </div>
      </div>
    </section>
  );
}
