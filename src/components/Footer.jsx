import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Globe, Layers, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        {/* Info de Marca */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/Logo.png"
              alt="HURVANT Logo"
              className="h-14 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-black text-white uppercase tracking-widest block">HURVANT</span>
            <span className="text-xs font-bold text-hurvant-cyan block">Impulsando la Competencia Técnica</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Ecosistema empresarial internacional especializado en Certificación, Inspección Industrial, Formación Técnica e Innovación Tecnológica con IA.
          </p>
        </div>

        {/* Divisiones del Ecosistema */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Layers className="h-4 w-4 text-hurvant-cyan" />
            Divisiones del Ecosistema
          </h3>
          <ul className="space-y-2.5">
            <li>
              <Link
                to="/servicios"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors font-semibold text-slate-300"
              >
                🏆 HURVANT CERTIFICATION
              </Link>
            </li>
            <li>
              <Link
                to="/servicios/inspeccion-equipos"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                🔬 HURVANT INSPECTION
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                🎓 HURVANT ACADEMY
              </Link>
            </li>
            <li>
              <a
                href="https://trace.hurvant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                🔍 HURVANT TRACE
              </a>
            </li>
            <li>
              <Link
                to="/servicios"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                💻 HURVANT DIGITAL
              </Link>
            </li>
            <li>
              <a
                href="https://www.hurvantphoto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                📷 HURVANT PHOTO
              </a>
            </li>
          </ul>
        </div>

        {/* Gobernanza y Garantías */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Scale className="h-4 w-4 text-hurvant-indigo-light" />
            Gobernanza ISO & Contacto
          </h3>
          <ul className="space-y-2.5">
            <li>
              <Link
                to="/quejas-y-apelaciones"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                Canal de Quejas y Apelaciones
              </Link>
            </li>
            <li>
              <Link
                to="/verificacion"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                Buscador de Certificados RGPD
              </Link>
            </li>
            <li>
              <Link
                to="/sobre-hurvant"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                Gobernanza e Imparcialidad ISO
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-xs text-hurvant-cyan inline-block py-0.5 hover:text-white transition-colors font-semibold"
              >
                Área Privada de Control (Ledger)
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="text-xs inline-block py-0.5 hover:text-white transition-colors"
              >
                Contacto Corporativo
              </Link>
            </li>
          </ul>
        </div>

        {/* Estandares y Presencia */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-hurvant-cyan" />
            Marco Normativo Técnico
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>• UNE-EN ISO/IEC 17024 (Certificación de Personas)</li>
            <li>• UNE-EN ISO/IEC 17020 (Inspección Técnica)</li>
            <li>• Real Decreto 1215/1997 (Maquinaria)</li>
            <li>• UNE-EN ISO 9712 (Ensayos No Destructivos NDT)</li>
            <li>• ISO 9001 | ISO 14001 | ISO 45001</li>
          </ul>
        </div>
      </div>

      {/* Franja Legal e Imparcialidad Obligatoria */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
        <div className="bg-slate-950/40 border border-slate-800/60 rounded-custom-md p-5 leading-relaxed text-slate-400">
          <strong>⚠️ Aviso Legal Importante (Cumplimiento de Imparcialidad ISO):</strong> HURVANT CERTIFICATION declara formalmente que de acuerdo con las directrices UNE-EN ISO/IEC 17024 e ISO/IEC 17020, NO imparte formación preparatoria, NO ofrece asesoría comercial o técnica de prevención de riesgos laborales (PRL) y NO comercializa ni alquila maquinaria. Toda evaluación es ejecutada con absoluta neutralidad de tercera parte por inspectores autorizados por la Alta Dirección de Calidad.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} GRUPO HURVANT. Todos los derechos reservados. Impulsando la Competencia Técnica.</p>
          <div className="flex gap-6">
            <Link
              to="/sobre-hurvant"
              className="inline-block py-1 hover:text-slate-300 transition-colors"
            >
              Aviso de Imparcialidad
            </Link>
            <Link
              to="/verificacion"
              className="inline-block py-1 hover:text-slate-300 transition-colors"
            >
              Cumplimiento RGPD
            </Link>
            <Link
              to="/quejas-y-apelaciones"
              className="inline-block py-1 hover:text-slate-300 transition-colors"
            >
              Quejas y Apelaciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
