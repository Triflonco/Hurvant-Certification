import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Qué hacemos' },
    { path: '/sectores', label: 'Sectores' },
    { path: '/metodologia', label: 'Metodología' },
    { path: '/sobre-hurvant', label: 'Sobre Hurvant' },
    { path: '/quejas-y-apelaciones', label: 'Quejas y Apelaciones' },
    { path: '/verificacion', label: 'Verificación' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 glass-header shadow-xs" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo oficial con fondo transparente */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 transition-transform duration-200 active:scale-98"
          aria-label="HURVANT - Inicio"
        >
          <img
            src="/Logo.png"
            alt="HURVANT Logo"
            className="h-[58px] w-auto object-contain"
          />
          <span className="hidden sm:inline-block text-xs font-semibold text-hurvant-navy-light uppercase border-l-2 border-slate-200 pl-3 ml-1 tracking-wider">
            Organismo Técnico
          </span>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden xl:flex items-center space-x-1" role="navigation" aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = isActivePath(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-[13px] font-bold rounded-custom-sm transition-all duration-200 relative ${
                  active
                    ? 'text-hurvant-indigo bg-indigo-50/60'
                    : 'text-slate-650 hover:text-hurvant-navy hover:bg-slate-50'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-hurvant-indigo to-hurvant-cyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Botón de Menú Móvil / Tablet */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-custom-sm text-slate-600 hover:text-hurvant-navy hover:bg-slate-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil / Tablet Desplegable */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-header border-t border-slate-100 animate-fade-in absolute w-full left-0 z-45 shadow-lg">
          <nav className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const active = isActivePath(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-custom-md transition-all ${
                    active
                      ? 'text-hurvant-indigo bg-indigo-50/70 border-l-4 border-hurvant-indigo'
                      : 'text-slate-600 hover:text-hurvant-navy hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
