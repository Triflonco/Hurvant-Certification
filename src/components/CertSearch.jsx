import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldAlert, Cpu, Download, Compass, Calendar, UserCheck } from 'lucide-react';

const CERTIFICATES_REGISTRY = {
  'HVT-0982': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Carlos Gómez Sánchez',
    esquema: 'UNE-EN ISO/IEC 17024 - Operador Retráctil T4',
    estado: 'ACTIVO - CONFORME',
    isActive: true,
    fechaExamen: '12/10/2025',
    vencimiento: '12/10/2030',
    hash: 'sha256-4a7b9c9d8e7f6a5b4c3d2e1f9876543210abcdef0123456789abcdef012345',
    inspector: 'Fdo. José Rivas (Nº Col. 9843-COITI)',
    gps: '40.416775, -3.703790 (Madrid Sur)'
  },
  'HVT-1143': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Marta Ruiz Calvo',
    esquema: 'UNE-EN ISO/IEC 17024 - Espacios Confinados Cat. C',
    estado: 'ACTIVO - CONFORME',
    isActive: true,
    fechaExamen: '04/02/2026',
    vencimiento: '04/02/2029',
    hash: 'sha256-8e2d1f9d8c7b6a5a4c3b2a1a0987654321fedcba0123456789abcdef987654',
    inspector: 'Fdo. Amparo Serra (Nº Col. 11202-COITI)',
    gps: '41.385064, 2.173403 (Planta Barcelona)'
  },
  'EQ-ALM-01': {
    tipo: 'Acta de Inspección y Adecuación de Maquinaria',
    titular: 'Carretilla Elevadora Frontal - Modelo FL-3000',
    esquema: 'Real Decreto 1215/1997 Anexo I y II (UNE-EN ISO/IEC 17020)',
    estado: 'ADECUADO - REGISTRO CONFORME',
    isActive: true,
    fechaExamen: '18/11/2025',
    vencimiento: '18/11/2028',
    hash: 'sha256-e2a12b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a',
    inspector: 'Fdo. Dirección Técnica de Inspección Hurvant',
    gps: '37.389092, -5.984459 (Sector Logística Sevilla)'
  },
  'HVT-0731': {
    tipo: 'Certificado de Competencia de Personas',
    titular: 'Jorge Benítez Ortiz',
    esquema: 'UNE-EN ISO/IEC 17024 - Trabajos en Altura Telco',
    estado: 'VENCIDO - REQUIERE REEVALUACIÓN',
    isActive: false,
    fechaExamen: '15/05/2023',
    vencimiento: '15/05/2026',
    hash: 'sha256-f5c2b9f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0',
    inspector: 'Fdo. José Rivas (Nº Col. 9843-COITI)',
    gps: '39.469907, -0.376288 (Zona Levante)'
  }
};

export default function CertSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchedQuery, setSearchedQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const query = searchInput.trim().toUpperCase();

    if (!query) {
      alert('Por favor, introduzca un código de certificado.');
      return;
    }

    setIsSearching(true);
    setSearchResult(null);

    setTimeout(() => {
      setIsSearching(false);
      setSearchedQuery(query);
      const matched = CERTIFICATES_REGISTRY[query];
      setSearchResult(matched || 'NOT_FOUND');
    }, 600);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="verification-title">
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Transparencia y Protección de Datos</span>
        <h2 id="verification-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Buscador Seguro de Resoluciones y Certificados
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Validador institucional individual en cumplimiento estricto de la LOPDGDD y directivas de privacidad europeas.
        </p>
      </header>

      <div className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs max-w-2xl mx-auto">
        <h3 className="text-lg font-extrabold text-hurvant-navy mb-3 text-center">
          Consulta de Vigencia en Registro Público
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto text-center leading-relaxed mb-8">
          Conforme a la Ley Orgánica 3/2018 (LOPDGDD), HURVANT <strong>no publica listados masivos</strong> de personas certificadas para proteger la privacidad. Puede verificar la vigencia de cualquier certificado de competencia u hoja de inspección introduciendo el código alfanumérico único.
        </p>

        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 bg-slate-50 border-2 border-slate-200 focus:bg-white rounded-custom-md px-4 py-3 text-sm focus:outline-none focus:border-hurvant-indigo font-semibold text-slate-800 tracking-wide transition-colors"
            placeholder="Ej. HVT-0982, EQ-ALM-01"
            required
            aria-label="Código único de certificado"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="bg-gradient-to-r from-hurvant-navy to-hurvant-indigo hover:brightness-110 text-white font-bold text-sm px-6 py-3 rounded-custom-md shadow-md active:scale-98 transition-all shrink-0 cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
          >
            {isSearching ? (
              <span>Buscando...</span>
            ) : (
              <>
                <Search className="h-4.5 w-4.5" />
                <span>Validar Código</span>
              </>
            )}
          </button>
        </form>

        {/* Resultados de la búsqueda */}
        {searchResult && (
          <div className="animate-fade-in border border-slate-200/80 rounded-custom-md overflow-hidden bg-slate-50 shadow-xs mt-8">
            {searchResult === 'NOT_FOUND' ? (
              /* Falla / No encontrado */
              <div className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-rose-50 border border-rose-100 text-rose-600 rounded-full flex items-center justify-center shadow-xs">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <strong className="text-sm sm:text-base font-extrabold text-rose-600 uppercase block">
                    CÓDIGO DE CERTIFICACIÓN NO CONFORME
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                    El identificador introducido <strong className="font-bold">"{searchedQuery}"</strong> no se encuentra registrado en el Registro General de Resoluciones de HURVANT, o ha sido anulado por resolución extraordinaria del Comité de Salvaguarda.
                  </p>
                </div>
              </div>
            ) : (
              /* Encontrado / Certificado Válido */
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200/85 pb-4">
                  <h4 className="text-sm font-bold text-hurvant-navy uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    Evidencia de Conformidad Detectada
                  </h4>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wide ${
                    searchResult.isActive
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {searchResult.estado}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Tipo de Expediente:</span>
                    <strong className="text-slate-800 font-semibold">{searchResult.tipo}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Referencia/Sujeto:</span>
                    <strong className="text-slate-800 font-bold">{searchResult.titular}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Esquema Técnico Aplicado:</span>
                    <strong className="text-slate-800 font-semibold">{searchResult.esquema}</strong>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 pb-2">
                    <div className="flex justify-between sm:border-r sm:border-slate-200 sm:pr-4">
                      <span className="text-slate-500 font-medium flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Examen/Auditoría:</span>
                      <strong className="text-slate-800 font-semibold">{searchResult.fechaExamen}</strong>
                    </div>
                    <div className="flex justify-between sm:pl-2">
                      <span className="text-slate-500 font-medium flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Vigencia y Validez:</span>
                      <strong className="text-slate-800 font-bold">{searchResult.vencimiento}</strong>
                    </div>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium flex items-center gap-1"><UserCheck className="h-3.5 w-3.5" /> Inspector Técnico Evaluador:</span>
                    <strong className="text-slate-800 font-semibold">{searchResult.inspector}</strong>
                  </div>
                  
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium flex items-center gap-1"><Compass className="h-3.5 w-3.5" /> Coordenadas GPS de Evaluación:</span>
                    <strong className="text-hurvant-indigo font-mono text-[11px] sm:text-xs">{searchResult.gps}</strong>
                  </div>

                  {/* Hash inmutable */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-slate-500 font-medium flex items-center gap-1"><Cpu className="h-3.5 w-3.5" /> Firma Hash Digital (Inmutable):</span>
                    <span className="font-mono text-[10px] sm:text-xs bg-slate-900 text-slate-300 p-3 rounded-custom-md border border-slate-800 break-all block leading-normal text-center shadow-inner select-all">
                      {searchResult.hash}
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-50 text-emerald-800 border border-emerald-100/80 rounded-custom-md p-4 text-xs font-bold text-center flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>🔐 Firma Criptográfica de Tercera Parte de Hurvant Oficialmente Trazada</span>
                </div>

                <button
                  onClick={() => alert('Descarga de resolución técnica firmada digitalmente (Simulada)...')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo hover:brightness-110 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-custom-md shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Descargar Dictamen Técnico Oficial (PDF)</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
