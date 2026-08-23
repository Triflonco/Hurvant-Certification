import React from 'react';
import { Target, Landmark, Milestone, Award, Users, ShieldCheck, HeartHandshake, Layers, Scale, Globe, Sparkles } from 'lucide-react';
import PageMeta from './shared/PageMeta';

export default function About() {
  const coreValues = [
    { title: 'Competencia Técnica', desc: 'Rigor y excelencia técnica fundamentada en estándares internacionales ISO e insustituible por mera teoría.' },
    { title: 'Integridad', desc: 'Ética inquebrantable y veracidad absoluta en cada dictamen, auditoría o evaluación realizada.' },
    { title: 'Independencia', desc: 'Separación radical de tercera parte sin vínculos ni presiones comerciales de fabricantes o formadores.' },
    { title: 'Innovación', desc: 'Pioneros en la integración de Inteligencia Artificial y firma criptográfica inmutable en la certificación.' },
    { title: 'Excelencia', desc: 'Superación constante de los mínimos exigidos para ofrecer el máximo valor a industrias y personas.' },
    { title: 'Compromiso', desc: 'Dedicación absoluta a la reducción de accidentes laborales y al aseguramiento de la calidad operativa.' },
    { title: 'Conocimiento', desc: 'Comités técnicos altamente cualificados con acreditación sectorial e imparcialidad garantizada.' },
    { title: 'Confianza', desc: 'Construcción de relaciones duraderas con clientes e instituciones basadas en hechos verificables.' },
    { title: 'Transparencia', desc: 'Consola pública de verificación de certificados con estricto respeto de la normativa RGPD.' },
    { title: 'Calidad', desc: 'Sistema de gestión y gobernanza continua bajo constante supervisión de la Alta Dirección.' },
    { title: 'Responsabilidad', desc: 'Protección activa de las personas y de la infraestructura crítica de nuestros clientes.' },
    { title: 'Seguridad Jurídica', desc: 'Blindaje normativo y trazabilidad probatoria ante cualquier organismo regulador o judicial.' }
  ];

  return (
    <>
      <PageMeta 
        title="Identidad Corporativa, Misión y Gobernanza | GRUPO HURVANT"
        description="Conozca el manifiesto corporativo del Grupo Hurvant: Misión, Visión, Propósito y la gobernanza de imparcialidad de HURVANT Certification."
        canonicalPath="/sobre-hurvant"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="about-title">

        {/* Cabecera */}
        <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
          <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Identidad Digital a 15 Años</span>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
            HURVANT: Impulsando la Competencia Técnica
          </h2>
          <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
            Portal corporativo del grupo especializado en Certificación, Inspección, Formación Técnica e Innovación con IA.
          </p>
        </header>

        {/* Propósito, Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Tarjeta de Propósito y Misión */}
          <article className="lg:col-span-7 bg-gradient-to-r from-slate-900 via-slate-950 to-hurvant-navy-dark text-white rounded-custom-lg p-8 shadow-md border-l-4 border-hurvant-cyan relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hurvant-cyan/10 to-transparent rounded-bl-full pointer-events-none" />

            <span className="text-xs font-bold tracking-widest text-hurvant-cyan uppercase block flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Propósito e Identidad Corporativa
            </span>

            <h3 className="text-2xl font-black tracking-tight text-white">
              “No vendemos servicios. Impulsamos la competencia técnica de personas, empresas y organizaciones.”
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              <p>
                <strong>Misión Oficial del Grupo:</strong> Nuestra misión consiste en ayudar a organizaciones, profesionales e industrias a alcanzar los máximos estándares de competencia técnica mediante certificación, inspección, formación, innovación tecnológica e inteligencia artificial.
              </p>
              <p>
                <strong>Visión de Futuro (2026–2041):</strong> Convertirnos en uno de los principales referentes nacionales e internacionales en certificación, inspección, formación e innovación tecnológica, proyectando a Hurvant como una entidad soberana, prestigiosa y tecnológicamente imbatible.
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-custom-md border border-slate-700/80 text-xs text-hurvant-cyan font-bold uppercase tracking-wider flex items-center justify-between">
              <span>Ecosistema Empresarial Multidivisión</span>
              <Award className="h-4 w-4 text-hurvant-cyan" />
            </div>
          </article>

          {/* Imagen e Identidad de Marca */}
          <article className="lg:col-span-5 glass-card rounded-custom-lg border border-slate-200/60 shadow-xs flex flex-col justify-between overflow-hidden">
            <div className="h-56 overflow-hidden relative border-b border-slate-200/60">
              <img
                src="/training_alignment.jpg"
                alt="HURVANT Governance & Corporate Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-grow">
              <h3 className="text-lg font-bold text-hurvant-navy border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <Target className="h-5.5 w-5.5 text-hurvant-indigo" />
                HURVANT CERTIFICATION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Como división matriz, **HURVANT CERTIFICATION** abandona la categoría de startup tecnológica para erigirse en el estandarte institucional del grupo, operando bajo las directrices internacionales **UNE-EN ISO/IEC 17024** (certificación de personas) e **ISO/IEC 17020** (actividades de inspección).
              </p>
            </div>
          </article>
        </div>

        {/* Los 12 Valores de la Organización */}
        <div className="mb-16 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Cultura Corporativa</span>
            <h3 className="text-2xl sm:text-3xl font-black text-hurvant-navy tracking-tight">
              Los 12 Valores del Grupo Hurvant
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <article key={idx} className="bg-white border border-slate-200/80 rounded-custom-md p-6 shadow-xs hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-hurvant-indigo shrink-0" />
                  <strong className="text-sm font-black text-hurvant-navy">{val.title}</strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium pl-4">{val.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Declaración de Imparcialidad y Gobernanza */}
        <div className="border-t border-slate-200 pt-16 mb-12">
          <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Gobernanza de Calidad</span>
          <h3 className="text-2xl sm:text-3xl font-black text-hurvant-navy tracking-tight">
            Imparcialidad y Separación Estricta de Tercera Parte
          </h3>
          <p className="text-slate-500 font-medium mt-1 text-xs sm:text-sm">
            Salvaguarda de las decisiones examinadoras y de inspección técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Declaración de la Alta Dirección */}
          <article className="glass-card rounded-custom-lg p-8 border border-slate-200/80 shadow-xs relative overflow-hidden bg-white flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <Milestone className="h-5.5 w-5.5 text-hurvant-indigo shrink-0" />
                <span>Declaración Institucional de la Alta Dirección</span>
              </h4>

              <blockquote className="border-l-4 border-hurvant-indigo pl-5 py-4 font-medium text-slate-700 italic text-xs sm:text-sm leading-relaxed bg-slate-50 rounded-r-custom-md">
                "La dirección de HURVANT asume el compromiso inequívoco de actuar con absoluta imparcialidad, independencia y neutralidad en el desarrollo de todas sus actividades de certificación e inspección.
                <br /><br />
                Las decisiones técnicas se basan exclusivamente en evidencias objetivas recopiladas en campo, exentas de cualquier influencia comercial, corporativa o financiera externa."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
              <div>
                <strong className="text-xs sm:text-sm text-hurvant-navy block font-bold">Fdo. Alta Dirección del Grupo Hurvant</strong>
                <span className="text-xs text-slate-500 font-semibold block">Sello Oficial de Calidad y Gobernanza</span>
              </div>
              <div className="h-10 w-10 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 text-hurvant-indigo" />
              </div>
            </div>
          </article>

          {/* Comité de Salvaguarda */}
          <article className="glass-card rounded-custom-lg p-8 border border-slate-200/80 shadow-xs relative overflow-hidden bg-white flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-hurvant-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <Users className="h-5.5 w-5.5 text-hurvant-cyan shrink-0" />
                <span>Comité de Salvaguarda de la Imparcialidad</span>
              </h4>

              <blockquote className="border-l-4 border-hurvant-cyan pl-5 py-4 font-medium text-slate-700 italic text-xs sm:text-sm leading-relaxed bg-slate-50 rounded-r-custom-md">
                "Para garantizar un control externo real y transparente, HURVANT cuenta con un Comité de Salvaguarda de la Imparcialidad de composición equilibrada e independiente.
                <br /><br />
                Este órgano supervisa la separación radical de actividades e impide cualquier presión comercial o conflicto de interés en los procesos de evaluación técnica."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
              <div>
                <strong className="text-xs sm:text-sm text-hurvant-navy block font-bold">Comité Independiente de Imparcialidad</strong>
                <span className="text-xs text-slate-500 font-semibold block">Garantía ISO 17024 (Personas) e ISO 17020 (Inspección)</span>
              </div>
              <div className="h-10 w-10 bg-cyan-50 border border-cyan-100 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-hurvant-cyan" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
