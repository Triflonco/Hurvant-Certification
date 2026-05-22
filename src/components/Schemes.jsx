import React, { useState } from 'react';
import { Layers, GraduationCap, Wrench, ShieldAlert } from 'lucide-react';

export default function Schemes() {
  const [activeTab, setActiveTab] = useState('iso17024');

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up" aria-labelledby="schemes-title">
      <header className="border-b-3 border-hurvant-navy pb-6 mb-12">
        <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Marcos de Evaluación Oficiales</span>
        <h2 id="schemes-title" className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">
          Esquemas de Certificación y Validación Técnica
        </h2>
        <p className="text-slate-500 font-medium mt-1.5 text-sm sm:text-base">
          Requisitos de competencia, normativas aplicables y procedimientos de evaluación técnica objetiva.
        </p>
      </header>

      {/* Selector de Pestañas Interactivo */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-slate-100 p-2 rounded-custom-lg border border-slate-200/80">
        <button
          onClick={() => setActiveTab('iso17024')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-custom-md font-bold text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'iso17024'
              ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white shadow-md'
              : 'text-slate-600 hover:text-hurvant-navy hover:bg-white/80'
          }`}
        >
          <GraduationCap className="h-5.5 w-5.5" />
          <span>Esquema E-HVT-01 (Personas - ISO 17024)</span>
        </button>
        <button
          onClick={() => setActiveTab('iso17020')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-custom-md font-bold text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'iso17020'
              ? 'bg-gradient-to-r from-hurvant-navy to-hurvant-cyan text-white shadow-md'
              : 'text-slate-600 hover:text-hurvant-navy hover:bg-white/80'
          }`}
        >
          <Wrench className="h-5.5 w-5.5" />
          <span>Esquema E-HVT-02 (Inspección - RD 1215/97)</span>
        </button>
      </div>

      {/* Contenido de las Pestañas */}
      <div className="transition-all duration-300">
        {activeTab === 'iso17024' ? (
          <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-hurvant-navy leading-tight">
                ESQUEMA E-HVT-01: Certificación de Competencia para Operadores de Maquinaria de Elevación y Carga
              </h3>
              <span className="shrink-0 inline-flex px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-hurvant-indigo border border-indigo-100 uppercase tracking-wider">
                UNE-EN ISO/IEC 17024
              </span>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-wrap-pretty">
              Este esquema define los requisitos mínimos, conocimientos teóricos y habilidades prácticas para certificar de manera objetiva a operadores profesionales de carretillas elevadoras (frontales, retráctiles), plataformas elevadoras móviles de personal (PEMP) y grúas de carga.
            </p>

            <div className="overflow-x-auto border border-slate-200/60 rounded-custom-md shadow-xs bg-white">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-1/4">Fase del Proceso</th>
                    <th scope="col" className="px-6 py-4">Requisitos Técnicos de Evaluación</th>
                    <th scope="col" className="px-6 py-4 w-1/3">Método de Evidencia Técnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">1. Requisitos Previos</td>
                    <td className="px-6 py-4">Aptitud médica para el puesto de trabajo y mayoría de edad legal.</td>
                    <td className="px-6 py-4 font-medium">Revisión documental obligatoria de aptitud médica en vigor.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">2. Evaluación Teórica</td>
                    <td className="px-6 py-4">Conocimientos de seguridad, física aplicada a cargas, y normativa española (RD 1215/1997, Convenios).</td>
                    <td className="px-6 py-4 font-medium">Examen teórico escrito controlado bajo supervisión del examinador (mínimo 80% de aciertos).</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">3. Evaluación Práctica</td>
                    <td className="px-6 py-4">Maniobras de precisión, control de estabilidad, estiba segura de cargas y simulacro de situaciones de emergencia in-situ.</td>
                    <td className="px-6 py-4 font-medium text-hurvant-indigo">Evaluación de campo individualizada por el inspector con lista de verificación objetiva y control GPS.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">4. Mantenimiento y Vigencia</td>
                    <td className="px-6 py-4">Seguimiento periódico de incidentes y siniestros laborales durante el período de vigencia de 5 años.</td>
                    <td className="px-6 py-4 font-medium">Declaración del empleador de actividad continuada y auditoría del expediente técnico a los 5 años para renovación.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        ) : (
          <article className="glass-card rounded-custom-lg p-8 border border-slate-200/60 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-hurvant-navy leading-tight">
                ESQUEMA E-HVT-02: Inspección y Validación de Maquinaria y Equipos de Trabajo (RD 1215/1997)
              </h3>
              <span className="shrink-0 inline-flex px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-hurvant-cyan border border-cyan-100 uppercase tracking-wider">
                UNE-EN ISO/IEC 17020
              </span>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-wrap-pretty">
              Procedimiento técnico independiente para auditar la adecuación física y documental de equipos de trabajo e instalaciones industriales con el fin de emitir certificados de conformidad de acuerdo con las especificaciones del Real Decreto 1215/1997.
            </p>

            <div className="overflow-x-auto border border-slate-200/60 rounded-custom-md shadow-xs bg-white">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-1/4">Fase del Proceso</th>
                    <th scope="col" className="px-6 py-4">Requisitos Técnicos de Adecuación</th>
                    <th scope="col" className="px-6 py-4 w-1/3">Método de Evidencia Técnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">1. Análisis Inicial</td>
                    <td className="px-6 py-4">Auditoría de manuales del fabricante, marcado CE de la máquina y registros de mantenimiento obligatorio.</td>
                    <td className="px-6 py-4 font-medium">Estudio de gabinete y revisión de la documentación legal del equipo de trabajo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">2. Inspección Técnica Física</td>
                    <td className="px-6 py-4">Evaluación de resguardos físicos, sistemas de mando, bloqueos de seguridad, paradas de emergencia y señalización.</td>
                    <td className="px-6 py-4 font-medium">Inspección in-situ con pruebas mecánicas y eléctricas activas por ingenieros colegiados.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">3. Dictamen y Emisión</td>
                    <td className="px-6 py-4">Generación de informe técnico detallando conformidad o desviaciones categorizadas por criticidad.</td>
                    <td className="px-6 py-4 font-medium text-hurvant-cyan">Emisión de Acta Técnica Oficial de Inspección y colocación de placa identificativa física en la máquina con código QR.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-hurvant-navy">4. Control Periódico</td>
                    <td className="px-6 py-4">Inspecciones obligatorias periódicas para evaluar desgaste, modificaciones críticas o incidencias.</td>
                    <td className="px-6 py-4 font-medium">Auditoría trienal técnica presencial de seguimiento de condiciones de seguridad mecánicas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
