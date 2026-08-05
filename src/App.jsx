import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import Services from './components/Services';
import ServiceEvaluacion from './components/services/ServiceEvaluacion';
import ServiceInspeccion from './components/services/ServiceInspeccion';
import ServiceNDT from './components/services/ServiceNDT';
import ServicePiloto from './components/services/ServicePiloto';
import Sectors from './components/Sectors';
import Methodology from './components/Methodology';
import About from './components/About';
import ComplaintsWizard from './components/ComplaintsWizard';
import CertSearch from './components/CertSearch';
import Contact from './components/Contact';
import ScrollToTop from './components/shared/ScrollToTop';

const ClientDashboard = lazy(() => import('./components/ClientDashboard'));
const Admin = lazy(() => import('./components/Admin'));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    if (location.pathname === '/dashboard' || location.pathname === '/admin') {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      <ScrollToTop />

      {/* Marca de agua fija de fondo */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden" style={{ zIndex: 0 }}>
        <img 
          src="/Logo.png" 
          alt="HURVANT Background Watermark" 
          className="max-w-[90vw] max-h-[82vh] w-auto h-auto object-contain opacity-[0.025] select-none filter grayscale pointer-events-none"
        />
      </div>

      {/* Cabecera Glassmorphic */}
      <Header />

      {/* Contenedor principal con animaciones suaves */}
      <main className="flex-grow pt-16 pb-20" role="main">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin h-8 w-8 border-4 border-hurvant-indigo border-t-transparent rounded-full" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeHero />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/evaluacion-operativa" element={<ServiceEvaluacion />} />
            <Route path="/servicios/inspeccion-equipos" element={<ServiceInspeccion />} />
            <Route path="/servicios/ensayos-no-destructivos" element={<ServiceNDT />} />
            <Route path="/servicios/programas-piloto" element={<ServicePiloto />} />
            <Route path="/sectores" element={<Sectors />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="/sobre-hurvant" element={<About />} />
            <Route path="/quejas-y-apelaciones" element={<ComplaintsWizard />} />
            <Route path="/verificacion" element={<CertSearch />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/admin" element={<Admin />} />
            {/* Fallback route to home */}
            <Route path="*" element={<HomeHero />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer corporativo oficial */}
      <Footer />
    </div>
  );
}
