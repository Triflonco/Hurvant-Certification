import React, { useState } from 'react';
import { Building, Mail, Phone, Calendar, Send, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    sector: 'logistica',
    tipoSolicitud: 'piloto',
    mensaje: '',
    consentimiento: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentimiento) {
      alert('Debe aceptar la política de privacidad y protección de datos RGPD.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío de datos a API técnico-operativa de Hurvant
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="contact-title">
      {/* Cabecera */}
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Contacto Corporativo</span>
        <h2 id="contact-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Solicitud de Programas Piloto y Reuniones
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Inicie una evaluación controlada y de cero fricción en sus operaciones.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Columna Izquierda: Mensajes clave y canales oficiales */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-hurvant-navy">Evaluación de Riesgo Humano y Competencias</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ¿Quiere validar si la metodología práctica de Hurvant es la adecuada para sus operarios de almacén o personal de servicios? Proponemos la realización de un **Programa Piloto Controlado**.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Definimos un equipo de trabajo o un área de operación acotada, evaluamos las variables conductuales y funcionales clave y entregamos el primer informe de riesgo operativo **sin alterar su producción diaria**.
            </p>
          </div>

          {/* Frases Estratégicas Destacadas en Banners Glassmorphic */}
          <div className="space-y-4">
            <div className="glass-card rounded-custom-md p-5 border border-slate-200/60 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-hurvant-indigo/5 to-transparent rounded-bl-full pointer-events-none" />
              <span className="text-[10px] font-bold text-hurvant-indigo uppercase tracking-wider block mb-1.5">Enfoque Humano</span>
              <p className="text-xs font-semibold text-slate-700 italic">
                “Reducir el riesgo también es entender a las personas.”
              </p>
            </div>
            <div className="glass-card rounded-custom-md p-5 border border-slate-200/60 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-hurvant-cyan/5 to-transparent rounded-bl-full pointer-events-none" />
              <span className="text-[10px] font-bold text-hurvant-cyan uppercase tracking-wider block mb-1.5">Eficacia Operativa</span>
              <p className="text-xs font-semibold text-slate-700 italic">
                “Detectamos riesgos humanos antes de que impacten en la operación.”
              </p>
            </div>
          </div>

          {/* Canales Oficiales y SLA */}
          <div className="bg-slate-50 p-6 rounded-custom-lg border border-slate-200/60 space-y-4">
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">
              Canales de Atención Técnica:
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3.5 text-xs text-slate-600">
                <Mail className="h-4.5 w-4.5 text-hurvant-indigo shrink-0" />
                <span>contacto@hurvant.com</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs text-slate-600">
                <Phone className="h-4.5 w-4.5 text-hurvant-indigo shrink-0" />
                <span>+34 910 000 000 (Central Madrid)</span>
              </li>
              <li className="flex items-center gap-3.5 text-xs text-slate-600">
                <Building className="h-4.5 w-4.5 text-hurvant-indigo shrink-0" />
                <span>Área de Operaciones de Tercera Parte, España</span>
              </li>
            </ul>
            <div className="bg-white p-3.5 rounded-custom-md border border-slate-150 text-[10px] sm:text-xs text-slate-500 text-center font-medium">
              SLA de Respuesta: Evaluamos y contestamos todas las solicitudes corporativas en un plazo máximo de <strong>24 horas laborables</strong>.
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario Interactivo / Success Card */}
        <div className="lg:col-span-7">
          {submitted ? (
            <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-md text-center space-y-6 animate-fade-in bg-white">
              <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-hurvant-navy">¡Solicitud Registrada con Éxito!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Hemos recibido su solicitud de <strong>{formData.tipoSolicitud === 'piloto' ? 'Programa Piloto' : formData.tipoSolicitud === 'exploratoria' ? 'Reunión Exploratoria' : 'Consulta General'}</strong> para la empresa <strong>{formData.empresa}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-custom-md border border-slate-200/60 text-xs text-slate-600 max-w-lg mx-auto space-y-2 text-left">
                <strong className="text-hurvant-navy font-bold block mb-1">Detalle del Expediente de Entrada:</strong>
                <div><span className="font-semibold">Solicitante:</span> {formData.nombre} ({formData.cargo})</div>
                <div><span className="font-semibold">Sector:</span> {formData.sector.toUpperCase()}</div>
                <div><span className="font-semibold">Email de Contacto:</span> {formData.email}</div>
                <div><span className="font-semibold">Código de Registro Temporal:</span> <span className="font-mono text-hurvant-indigo font-bold">EXP-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              </div>

              <p className="text-xs text-slate-500 italic">
                Un evaluador técnico especializado de nuestro departamento de operaciones se pondrá en contacto con usted en breve para agendar la sesión inicial.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-3 rounded-custom-md active:scale-98 transition-all"
              >
                Enviar Otra Solicitud
              </button>
            </article>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-custom-lg p-6 sm:p-8 border border-slate-200/60 shadow-md space-y-6 bg-white">
              <h3 className="text-lg font-bold text-hurvant-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="h-5 w-5 text-hurvant-indigo" />
                Formulario de Evaluación Inicial
              </h3>

              {/* Grid Nombre y Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="nombre" className="text-xs font-bold text-slate-700 block">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos García"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="empresa" className="text-xs font-bold text-slate-700 block">Empresa / Organización *</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Logística Global S.A."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                  />
                </div>
              </div>

              {/* Cargo e Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="cargo" className="text-xs font-bold text-slate-700 block">Cargo / Puesto *</label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    placeholder="Ej. Director de Operaciones / Resp. PRL"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 block">Correo Electrónico Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="carlos.garcia@empresa.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                  />
                </div>
              </div>

              {/* Teléfono y Sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="telefono" className="text-xs font-bold text-slate-700 block">Teléfono de Contacto</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sector" className="text-xs font-bold text-slate-700 block">Sector de Operación *</label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 bg-white focus:outline-none focus:border-hurvant-indigo transition-all"
                  >
                    <option value="logistica">Logística y Distribución</option>
                    <option value="hoteleria">Hotelería y Alojamientos</option>
                    <option value="industria">Industria y Manufactura</option>
                    <option value="servicios">Servicios Generales / ETT</option>
                    <option value="otro">Otros Sectores Exigentes</option>
                  </select>
                </div>
              </div>

              {/* Tipo de Solicitud */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Tipo de Intervención Solicitada *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`border rounded-custom-md p-3.5 flex flex-col justify-between cursor-pointer transition-all ${
                    formData.tipoSolicitud === 'piloto'
                      ? 'border-hurvant-indigo bg-indigo-50/40 text-hurvant-navy'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="tipoSolicitud"
                      value="piloto"
                      checked={formData.tipoSolicitud === 'piloto'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold block mb-1">Programa Piloto</span>
                    <span className="text-[10px] text-slate-500 leading-normal block">Validación controlada de operarios en un área delimitada.</span>
                  </label>

                  <label className={`border rounded-custom-md p-3.5 flex flex-col justify-between cursor-pointer transition-all ${
                    formData.tipoSolicitud === 'exploratoria'
                      ? 'border-hurvant-indigo bg-indigo-50/40 text-hurvant-navy'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="tipoSolicitud"
                      value="exploratoria"
                      checked={formData.tipoSolicitud === 'exploratoria'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold block mb-1">Reunión de Análisis</span>
                    <span className="text-[10px] text-slate-500 leading-normal block">Reunión técnica para evaluar el encaje funcional en sus centros.</span>
                  </label>

                  <label className={`border rounded-custom-md p-3.5 flex flex-col justify-between cursor-pointer transition-all ${
                    formData.tipoSolicitud === 'consulta'
                      ? 'border-hurvant-indigo bg-indigo-50/40 text-hurvant-navy'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="tipoSolicitud"
                      value="consulta"
                      checked={formData.tipoSolicitud === 'consulta'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold block mb-1">Consulta General</span>
                    <span className="text-[10px] text-slate-500 leading-normal block">Solicitar información general y tarifas corporativas.</span>
                  </label>
                </div>
              </div>

              {/* Mensaje descriptivo */}
              <div className="space-y-1.5">
                <label htmlFor="mensaje" className="text-xs font-bold text-slate-700 block">Detalles o Requerimientos de la Operación</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Por favor, describa brevemente el número de operarios estimativo, tipo de puestos (ej. carretilleros, personal de pisos) y problemas detectados que desea mitigar..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-custom-md border border-slate-200 focus:outline-none focus:border-hurvant-indigo focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-350"
                />
              </div>

              {/* Checkbox RGPD */}
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-custom-md border border-slate-200/60">
                <input
                  type="checkbox"
                  id="consentimiento"
                  name="consentimiento"
                  required
                  checked={formData.consentimiento}
                  onChange={handleChange}
                  className="h-4.5 w-4.5 rounded-custom-sm text-hurvant-indigo border-slate-300 focus:ring-hurvant-indigo mt-0.5"
                />
                <label htmlFor="consentimiento" className="text-[10px] sm:text-xs text-slate-500 leading-normal select-none">
                  Acepto el tratamiento de mis datos personales de acuerdo con la legislación vigente. Declaro haber leído y aceptado la <span className="text-hurvant-indigo underline font-bold cursor-pointer">Política de Privacidad RGPD</span> de HURVANT para la gestión y tramitación exclusiva de esta solicitud comercial y de pilotaje técnico.
                </label>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-custom-md shadow-md hover:shadow-lg active:scale-98 transition-all hover:brightness-110 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Procesando Solicitud Operativa...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5" />
                    <span>Enviar Solicitud de Evaluación</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
