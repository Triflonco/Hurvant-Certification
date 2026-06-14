import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Methodology from './components/Methodology';
import About from './components/About';
import ComplaintsWizard from './components/ComplaintsWizard';
import CertSearch from './components/CertSearch';
import Contact from './components/Contact';
import ClientDashboard from './components/ClientDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Sincronizar ruta inicial basada en el Hash de la URL
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      const viewId = hash.substring(1);
      const validViews = [
        'home', 
        'services', 
        'sectors', 
        'methodology', 
        'about', 
        'complaints', 
        'verification', 
        'contact',
        'dashboard'
      ];
      
      if (validViews.includes(viewId)) {
        setCurrentView(viewId);
      } else {
        window.location.hash = '#home';
        setCurrentView('home');
      }
    };

    // Escuchar cambios de hash
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Ejecutar al cargar la app

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    if (currentView === 'dashboard') {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, [currentView]);

  const handleViewChange = (viewId) => {
    setCurrentView(viewId);
    window.location.hash = `#${viewId}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Marca de agua fija de fondo (ultra-difuminada y adaptada a la máxima dimensión de pantalla sin recortes) */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden" style={{ zIndex: 0 }}>
        <img 
          src="/Logo.png" 
          alt="HURVANT Background Watermark" 
          className="max-w-[90vw] max-h-[82vh] w-auto h-auto object-contain opacity-[0.025] select-none filter grayscale pointer-events-none"
        />
      </div>

      {/* Cabecera Glassmorphic */}
      <Header currentView={currentView} onViewChange={handleViewChange} />

      {/* Contenedor principal con animaciones suaves */}
      <main className="flex-grow pt-16 pb-20" role="main">
        {currentView === 'home' && <HomeHero onViewChange={handleViewChange} />}
        {currentView === 'services' && <Services />}
        {currentView === 'sectors' && <Sectors />}
        {currentView === 'methodology' && <Methodology />}
        {currentView === 'about' && <About />}
        {currentView === 'complaints' && <ComplaintsWizard />}
        {currentView === 'verification' && <CertSearch />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'dashboard' && <ClientDashboard />}
      </main>

      {/* Footer corporativo oficial */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
