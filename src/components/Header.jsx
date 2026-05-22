import React, { useState } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

export default function Header({ currentView, onViewChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'schemes', label: 'Esquemas' },
    { id: 'impartiality', label: 'Imparcialidad' },
    { id: 'complaints', label: 'Quejas y Apelaciones' },
    { id: 'verification', label: 'Verificación' }
  ];

  const handleNavClick = (id) => {
    onViewChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 glass-header shadow-xs" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo oficial con fondo transparente */}
        <a 
          href="#home" 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 transition-transform duration-200 active:scale-98"
          aria-label="HURVANT - Inicio"
        >
          <img 
            src="/Logo.png" 
            alt="HURVANT Logo" 
            className="h-[46px] w-auto object-contain"
          />
          <span className="hidden sm:inline-block text-[11px] font-semibold text-hurvant-navy-light uppercase border-l-2 border-slate-200 pl-3 ml-1 tracking-wider">
            Organismo Técnico
          </span>
        </a>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-custom-sm transition-all duration-200 relative ${
                  isActive 
                    ? 'text-hurvant-indigo bg-indigo-50/60' 
                    : 'text-slate-600 hover:text-hurvant-navy hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-hurvant-indigo to-hurvant-cyan rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botón de Menú Móvil */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-custom-sm text-slate-600 hover:text-hurvant-navy hover:bg-slate-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-t border-slate-100 animate-fade-in absolute w-full left-0 z-45 shadow-lg">
          <nav className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-4 py-3 text-base font-semibold rounded-custom-md transition-all ${
                    isActive 
                      ? 'text-hurvant-indigo bg-indigo-50/70 border-l-4 border-hurvant-indigo' 
                      : 'text-slate-600 hover:text-hurvant-navy hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
