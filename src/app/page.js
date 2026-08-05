import Link from "next/link";
import DivisionCard from "@/components/ui/DivisionCard";

export default function Home() {
  const divisions = [
    {
      title: "Hurvant Certification & Inspection",
      description: "Nuestra división original y pilar del grupo. Organismo Técnico de Conformidad especializado en certificación de personas (UNE-EN ISO/IEC 17024), ensayos no destructivos (NDT) y seguridad industrial.",
      services: ["Certificación Profesional (ISO 17024)", "Inspección Industrial", "Adecuación RD 1215/1997", "Seguridad en Equipos de Elevación"],
      href: "https://certification.hurvant.com",
      buttonText: "Acceder a Certification & Inspection",
      isExternal: true,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hurvant Digital",
      description: "División tecnológica enfocada en la transformación digital empresarial, desarrollando soluciones a medida, plataformas corporativas y automatización inteligente.",
      services: ["Desarrollo Web & Apps", "Plataformas B2B/B2C", "Sistemas Inteligentes", "Automatización de Procesos"],
      href: "https://digital.hurvant.com",
      buttonText: "Acceder a Hurvant Digital",
      isExternal: true,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hurvant Photo",
      description: "Productora audiovisual de alto nivel especializada en cobertura visual corporativa, fotografía de producto, real estate e imagen de marca.",
      services: ["Fotografía Inmobiliaria", "Cobertura Corporativa", "Contenido Institucional", "Fotografía de Producto"],
      href: "https://hurvantphoto.com",
      buttonText: "Acceder a Hurvant Photo",
      isExternal: true,
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hurvant Academy",
      description: "Institución académica orientada al desarrollo del talento y la excelencia formativa para perfiles técnicos y directivos.",
      services: ["Formación Técnica Especializada", "Desarrollo de Competencias", "Programas In-Company"],
      href: "/academy",
      buttonText: "Próximamente",
      isExternal: false,
      isDisabled: true,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="w-full lg:w-3/5">
              <h1 className="font-logo text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
                <span className="text-[#403FBA]">Hurvant</span> <span className="bg-gradient-to-r from-[#403FBA] via-[#4F47E6] to-[#06B6D5] bg-clip-text text-transparent">Group</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-brand-dark mb-8">
                Rigor, Excelencia y <span className="bg-gradient-to-r from-[#403FBA] via-[#4F47E6] to-[#06B6D5] bg-clip-text text-transparent">Soluciones Integrales</span>.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                Consolidados como una institución de referencia, en Hurvant Group unificamos experiencia, solidez técnica e innovación tecnológica para ofrecer servicios de certificación, inspección, desarrollo digital y comunicación corporativa al más alto nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#divisiones" className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-semibold text-white bg-gradient-to-r from-[#403FBA] to-[#4F47E6] hover:opacity-90 transition-opacity rounded-xl shadow-sm">
                  Conocer nuestras divisiones
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-semibold text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors rounded-xl">
                  Contacto Institucional
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-lg lg:max-w-xl aspect-square overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl bg-slate-50">
                <img 
                  src="/hurvant_team_inspection_hero.png" 
                  alt="Equipo de Inspección y Certificación Hurvant" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                {/* Badge flotante de garantía */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Equipo Técnico Registrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Identidad Institucional</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Una corporación estructurada para el liderazgo</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h4 className="text-2xl font-semibold text-brand-primary mb-4">Nuestra Trayectoria</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hurvant Group nace de la evolución de un Organismo Técnico de Conformidad líder, expandiendo su visión y estructura para convertirse en un conglomerado empresarial sólido. A través de nuestras divisiones especializadas, aportamos garantías, eficiencia y modernización al tejido industrial y corporativo.
              </p>
              
              <h4 className="text-2xl font-semibold text-brand-primary mb-4">Visión Estratégica</h4>
              <p className="text-gray-600 leading-relaxed">
                Nuestra vocación es ser el socio fundamental para empresas e instituciones que exigen estándares de primer nivel. Nos define la imparcialidad de nuestras evaluaciones, la precisión de nuestra tecnología y la calidad inquebrantable de nuestros servicios.
              </p>
            </div>
            
            <div className="bg-brand-light p-10 border-l-4 border-brand-primary">
              <h4 className="text-2xl font-semibold text-brand-dark mb-6">Nuestros Pilares</h4>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-brand-primary text-white font-bold rounded-sm mr-4 mt-1">1</span>
                  <div>
                    <strong className="block text-brand-dark text-lg">Solidez Institucional</strong>
                    <span className="text-gray-600">Acreditaciones y metodologías avaladas por organismos internacionales.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-brand-primary text-white font-bold rounded-sm mr-4 mt-1">2</span>
                  <div>
                    <strong className="block text-brand-dark text-lg">Cualificación Profesional</strong>
                    <span className="text-gray-600">Un equipo de expertos técnicos, auditores y especialistas de élite.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-brand-primary text-white font-bold rounded-sm mr-4 mt-1">3</span>
                  <div>
                    <strong className="block text-brand-dark text-lg">Evolución Tecnológica</strong>
                    <span className="text-gray-600">Integración de la digitalización y la IA en la operatividad empresarial.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Divisiones Section */}
      <section id="divisiones" className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Estructura Corporativa</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Divisiones del Grupo</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <DivisionCard key={index} {...division} />
            ))}
          </div>
        </div>
      </section>

      {/* Garantía Institucional Section (Replace Casos de Éxito with broader corporate authority) */}
      <section id="garantia" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Respaldo y Autoridad</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Garantía de Excelencia Operativa</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-brand-light text-brand-primary flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">Rigor Normativo</h4>
              <p className="text-gray-600">Cumplimiento estricto de normativas internacionales y regulaciones nacionales, asegurando la máxima fiabilidad en cada intervención.</p>
            </div>

            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-brand-light text-brand-primary flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">Infraestructura Potente</h4>
              <p className="text-gray-600">Capacidad técnica e infraestructura avanzada para abordar proyectos de gran envergadura a nivel multisectorial.</p>
            </div>

            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-brand-light text-brand-primary flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">Impulso a la Innovación</h4>
              <p className="text-gray-600">Compromiso continuo con la modernización de los procesos mediante nuestras áreas de tecnología e imagen digital.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
