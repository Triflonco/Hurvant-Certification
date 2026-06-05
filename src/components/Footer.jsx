import React from 'react';
import { ShieldCheck, Scale, Globe } from 'lucide-react';

export default function Footer({ onViewChange }) {
  const handleLinkClick = (e, viewId) => {
    e.preventDefault();
    onViewChange(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Info de Marca */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            {/* Filter drop-shadow-md for high visibility on dark footer */}
            <img 
              src="/Logo.png" 
              alt="HURVANT Logo" 
              className="h-16 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Organismo técnico de tercera parte especializado en la evaluación práctica de competencias y la reducción del riesgo operativo y humano en entornos exigentes.
          </p>
        </div>

        {/* Esquemas y Servicios */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-hurvant-cyan" />
            Servicios y Sectores
          </h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#services" 
                onClick={(e) => handleLinkClick(e, 'services')}
                className="text-sm hover:text-white transition-colors"
              >
                Evaluación Operativa de Personas
              </a>
            </li>
            <li>
              <a 
                href="#sectors" 
                onClick={(e) => handleLinkClick(e, 'sectors')}
                className="text-sm hover:text-white transition-colors"
              >
                Sectores Críticos: Logística y Hotelería
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, 'about')}
                className="text-sm hover:text-white transition-colors"
              >
                Estructura de Imparcialidad y Calidad
              </a>
            </li>
          </ul>
        </div>

        {/* Garantías Públicas y Contacto */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Scale className="h-4 w-4 text-hurvant-indigo-light" />
            Gobernanza y Contacto
          </h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#complaints" 
                onClick={(e) => handleLinkClick(e, 'complaints')}
                className="text-sm hover:text-white transition-colors"
              >
                Canal de Quejas y Apelaciones
              </a>
            </li>
            <li>
              <a 
                href="#verification" 
                onClick={(e) => handleLinkClick(e, 'verification')}
                className="text-sm hover:text-white transition-colors"
              >
                Buscador de Certificados RGPD
              </a>
            </li>
            <li>
              <a 
                href="#dashboard" 
                onClick={(e) => handleLinkClick(e, 'dashboard')}
                className="text-sm text-hurvant-cyan hover:text-white transition-colors font-semibold"
              >
                Área Privada de Control (Ledger)
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="text-sm hover:text-white transition-colors"
              >
                Solicitar Programa Piloto
              </a>
            </li>
          </ul>
        </div>

        {/* Webs del Grupo */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Globe className="h-4 w-4 text-hurvant-cyan" />
            Webs del Grupo
          </h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://trace.hurvant.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                Hurvant Trace
              </a>
            </li>
            <li>
              <a 
                href="https://www.hurvantphoto.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                Hurvant Photo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Franja Legal e Imparcialidad Obligatoria */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
        <div className="bg-slate-950/40 border border-slate-800/60 rounded-custom-md p-5 leading-relaxed text-slate-400">
          <strong>⚠️ Aviso Legal Importante (Cumplimiento de Imparcialidad):</strong> HURVANT declara formalmente que de acuerdo con las directrices UNE-EN ISO/IEC 17024 e ISO/IEC 17020, NO imparte formación preparatoria, NO ofrece asesoría comercial o técnica de prevención de riesgos laborales (PRL) y NO comercializa, distribuye ni alquila maquinaria o equipos de trabajo. Toda evaluación conductual y funcional es ejecutada con absoluta neutralidad por inspectores autorizados por la Alta Dirección de Calidad.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} HURVANT. Todos los derechos reservados. Portal institucional de validación técnica.</p>
          <div className="flex gap-6">
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
              className="hover:text-slate-300 transition-colors"
            >
              Aviso de Imparcialidad
            </a>
            <a 
              href="#verification" 
              onClick={(e) => handleLinkClick(e, 'verification')}
              className="hover:text-slate-300 transition-colors"
            >
              Cumplimiento RGPD
            </a>
            <a 
              href="#complaints" 
              onClick={(e) => handleLinkClick(e, 'complaints')}
              className="hover:text-slate-300 transition-colors"
            >
              Quejas y Apelaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
