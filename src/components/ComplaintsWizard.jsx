import React, { useState } from 'react';
import { Scale, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import PageMeta from './shared/PageMeta';

export default function ComplaintsWizard() {

  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    code: '',
    details: '',
    gdpr: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedExp, setSubmittedExp] = useState(null);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('complaint-', '')]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.category || !formData.name || !formData.email || !formData.details) {
      alert('Por favor, cumplimente todos los campos obligatorios del formulario de reclamación.');
      return;
    }

    if (!formData.gdpr) {
      alert('Es obligatorio aceptar el tratamiento oficial de sus datos para registrar el expediente de queja/apelación.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      
      const prefix = formData.category === 'apelacion' ? 'A' : 'Q';
      const year = new Date().getFullYear();
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const expCode = `EXP-${prefix}-${year}-${randomId}`;

      setSubmittedExp(expCode);
      
      // Reset form
      setFormData({
        category: '',
        name: '',
        email: '',
        code: '',
        details: '',
        gdpr: false
      });
    }, 1000);
  };

  return (
    <>
      <PageMeta 
        title="Canal de Quejas y Apelaciones | HURVANT"
        description="Procedimiento oficial y transparente para la tramitación independiente de quejas y apelaciones técnicas."
        canonicalPath="/quejas-y-apelaciones"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="complaints-title">

      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Garantía de Transparencia</span>
        <h2 id="complaints-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Procedimiento Oficial de Quejas y Apelaciones
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Procedimiento público y regulado para el registro y resolución de reclamaciones técnicas.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Columna Izquierda: Definiciones de Compliance */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-custom-lg p-6 border border-slate-200/60 shadow-xs space-y-6">
            <h3 className="text-sm font-bold text-hurvant-navy uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
              <Info className="h-4.5 w-4.5 text-hurvant-indigo" />
              Definiciones Reguladas
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-hurvant-indigo uppercase tracking-wider">
                  Queja Técnica (ISO 17024/17020)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Expresión de insatisfacción presentada por cualquier persona u organización a HURVANT, relacionada con el comportamiento de nuestro personal, las instalaciones de examen o la conducta de candidatos evaluados.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-hurvant-indigo uppercase tracking-wider">
                  Apelación Técnica
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Solicitud presentada por un candidato, empleador o entidad interesada ante HURVANT para la revisión formal de una decisión técnica o dictamen de evaluación de conformidad no favorable.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-custom-md text-xs text-slate-500 leading-relaxed">
                Todas las quejas y apelaciones son procesadas por la Dirección de Calidad de forma inalterable y supervisadas por el <strong>Comité de Imparcialidad</strong>.
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario Asistente */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs relative">
            <h3 className="text-lg sm:text-xl font-extrabold text-hurvant-navy mb-6 border-b border-slate-100 pb-4">
              Formulario Oficial de Registro de Incidencias
            </h3>
            
            {submittedExp ? (
              /* Éxito de Registro */
              <div className="space-y-6 text-center py-6 animate-fade-in">
                <div className="flex justify-center">
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 shadow-xs">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                </div>
                
                <div className="space-y-2 max-w-lg mx-auto">
                  <strong className="text-lg sm:text-xl font-black text-slate-800 block">✔ Expediente Registrado Exitosamente</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Su solicitud ha sido grabada de manera formal e inmutable en el Registro General de Control de Hurvant.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-900 to-hurvant-navy-dark text-white p-5 rounded-custom-md max-w-sm mx-auto shadow-md border-l-4 border-hurvant-indigo">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                    Código de Expediente
                  </span>
                  <strong className="text-xl font-mono text-gradient-brand font-black block bg-gradient-to-r from-hurvant-cyan-light to-white bg-clip-text text-transparent">
                    {submittedExp}
                  </strong>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                  El asunto ha sido remitido al Comité de Imparcialidad para su estudio técnico. Recibirá una resolución de su expediente en un plazo máximo de 15 días hábiles al correo electrónico indicado.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmittedExp(null)}
                    className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-2.5 rounded-custom-md active:scale-98 transition-all"
                  >
                    Registrar otra reclamación
                  </button>
                </div>
              </div>
            ) : (
              /* Formulario Activo */
              <form onSubmit={handleSubmit} className="space-y-6" novalidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Categoría */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="complaint-category" className="text-xs font-bold text-hurvant-navy uppercase tracking-wider">
                      Tipo de Reclamación
                    </label>
                    <select
                      id="complaint-category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-250 rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo transition-colors"
                      required
                    >
                      <option value="" disabled>Seleccione la modalidad...</option>
                      <option value="queja">Queja Técnica (Comportamiento / Calidad)</option>
                      <option value="apelacion">Apelación de Dictamen (Revisión de Examen / Inspección)</option>
                    </select>
                  </div>

                  {/* Nombre */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="complaint-name" className="text-xs font-bold text-hurvant-navy uppercase tracking-wider">
                      Nombre Completo del Remitente
                    </label>
                    <input
                      type="text"
                      id="complaint-name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-250 rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo transition-colors"
                      placeholder="Ej. Francisco García López"
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="complaint-email" className="text-xs font-bold text-hurvant-navy uppercase tracking-wider">
                      Email de Contacto Oficial
                    </label>
                    <input
                      type="email"
                      id="complaint-email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-250 rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo transition-colors"
                      placeholder="Ej. f.garcia@empresa.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Código */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="complaint-code" className="text-xs font-bold text-hurvant-navy uppercase tracking-wider">
                      Código de Expediente Asociado (Opcional)
                    </label>
                    <input
                      type="text"
                      id="complaint-code"
                      value={formData.code}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-250 rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo transition-colors"
                      placeholder="Ej. HVT-0982 o EQ-ALM-01"
                    />
                  </div>
                </div>

                {/* Detalles */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="complaint-details" className="text-xs font-bold text-hurvant-navy uppercase tracking-wider">
                    Descripción Técnica y Motivos
                  </label>
                  <textarea
                    id="complaint-details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="bg-white border border-slate-250 rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo transition-colors min-h-[140px] resize-y"
                    placeholder="Describa con precisión técnica los hechos, fechas, equipos u operarios involucrados, detallando las evidencias objetivas correspondientes."
                    required
                  />
                </div>

                {/* GDPR Checkbox */}
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-custom-md border border-slate-150">
                  <input
                    type="checkbox"
                    id="complaint-gdpr"
                    checked={formData.gdpr}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-hurvant-indigo border-slate-300 rounded-custom-sm focus:ring-hurvant-indigo"
                    required
                  />
                  <label htmlFor="complaint-gdpr" className="text-[11px] sm:text-xs leading-relaxed text-slate-500 font-medium cursor-pointer selection:bg-transparent">
                    Acepto el tratamiento oficial de los datos personales proporcionados únicamente para la resolución del expediente de queja/apelación técnica de conformidad con la LOPDGDD 3/2018 y el RGPD europeo.
                  </label>
                </div>

                {/* Botón de Enviar */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm px-6 py-4 rounded-custom-md shadow-md active:scale-99 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Registrando Expediente...' : 'Registrar Expediente Oficial'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

