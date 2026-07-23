import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        {/* Info de Marca */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
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
              <Link
                to="/servicios/evaluacion-operativa"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Evaluación Operativa de Personas
              </Link>
            </li>
            <li>
              <Link
                to="/servicios/inspeccion-equipos"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Inspección de Equipos (RD 1215/97)
              </Link>
            </li>
            <li>
              <Link
                to="/servicios/ensayos-no-destructivos"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Ensayos No Destructivos (NDT)
              </Link>
            </li>
            <li>
              <Link
                to="/sectores"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Sectores Críticos
              </Link>
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
              <Link
                to="/quejas-y-apelaciones"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Canal de Quejas y Apelaciones
              </Link>
            </li>
            <li>
              <Link
                to="/verificacion"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Buscador de Certificados RGPD
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-sm text-hurvant-cyan inline-block py-1 hover:text-white transition-colors font-semibold"
              >
                Área Privada de Control (Ledger)
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Solicitar Programa Piloto
              </Link>
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
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Hurvant Trace
              </a>
            </li>
            <li>
              <a
                href="https://www.hurvantphoto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Hurvant Photo
              </a>
            </li>
            <li>
              <a
                href="https://intranet.hurvant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-block py-1 hover:text-white transition-colors"
              >
                Hurvant Intranet
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
            <Link
              to="/sobre-hurvant"
              className="inline-block py-2 hover:text-slate-300 transition-colors"
            >
              Aviso de Imparcialidad
            </Link>
            <Link
              to="/verificacion"
              className="inline-block py-2 hover:text-slate-300 transition-colors"
            >
              Cumplimiento RGPD
            </Link>
            <Link
              to="/quejas-y-apelaciones"
              className="inline-block py-2 hover:text-slate-300 transition-colors"
            >
              Quejas y Apelaciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
