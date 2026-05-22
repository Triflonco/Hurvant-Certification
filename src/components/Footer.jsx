import React from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

export default function Footer({ onViewChange }) {
  const handleLinkClick = (e, viewId) => {
    e.preventDefault();
    onViewChange(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Info de Marca */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            {/* Filter drop-shadow-md for high visibility on dark footer */}
            <img 
              src="/Logo.png" 
              alt="HURVANT Logo" 
              className="h-12 w-auto object-contain filter brightness-100 invert-0"
              style={{ filter: 'drop-shadow(0px 2px 8px rgba(255,255,255,0.05))' }}
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Organismo técnico especializado de tercera parte en evaluación de competencias de operarios y validación reglamentaria de maquinaria. Diseñado bajo principios innegociables de imparcialidad e independencia técnica.
          </p>
        </div>

        {/* Esquemas de Gobernanza */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-hurvant-cyan" />
            Esquemas de Gobernanza
          </h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#schemes" 
                onClick={(e) => handleLinkClick(e, 'schemes')}
                className="text-sm hover:text-white transition-colors"
              >
                Esquema Operadores (ISO 17024)
              </a>
            </li>
            <li>
              <a 
                href="#schemes" 
                onClick={(e) => handleLinkClick(e, 'schemes')}
                className="text-sm hover:text-white transition-colors"
              >
                Inspección de Equipos (RD 1215/97)
              </a>
            </li>
            <li>
              <a 
                href="#impartiality" 
                onClick={(e) => handleLinkClick(e, 'impartiality')}
                className="text-sm hover:text-white transition-colors"
              >
                Comité de Imparcialidad
              </a>
            </li>
          </ul>
        </div>

        {/* Garantías Públicas */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Scale className="h-4 w-4 text-hurvant-indigo-light" />
            Garantías Públicas
          </h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#complaints" 
                onClick={(e) => handleLinkClick(e, 'complaints')}
                className="text-sm hover:text-white transition-colors"
              >
                Canal de Quejas Oficiales
              </a>
            </li>
            <li>
              <a 
                href="#verification" 
                onClick={(e) => handleLinkClick(e, 'verification')}
                className="text-sm hover:text-white transition-colors"
              >
                Registro de Verificación RGPD
              </a>
            </li>
            <li>
              <a 
                href="#impartiality" 
                onClick={(e) => handleLinkClick(e, 'impartiality')}
                className="text-sm hover:text-white transition-colors"
              >
                Declaración Jurada Directiva
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Franja Legal e Imparcialidad Obligatoria */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
        <div className="bg-slate-950/40 border border-slate-800/60 rounded-custom-md p-5 leading-relaxed text-slate-400">
          <strong>⚠️ Aviso Legal Importante (ENAC Impartiality compliance):</strong> HURVANT declara formalmente que de acuerdo con el marco UNE-EN ISO/IEC 17024 y UNE-EN ISO/IEC 17020, NO ofrece asesoría de prevención de riesgos laborales (PRL), NO realiza formación preparatoria para los esquemas que examina, y NO comercializa maquinaria industrial. Toda evaluación es realizada de manera estrictamente neutral por técnicos independientes autorizados por la Dirección de Certificación.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} HURVANT. Todos los derechos reservados. Portal institucional de conformidad técnica.</p>
          <div className="flex gap-6">
            <a 
              href="#impartiality" 
              onClick={(e) => handleLinkClick(e, 'impartiality')}
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
              Quejas Legales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
