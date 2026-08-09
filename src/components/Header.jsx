import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Cerrar el menú móvil automáticamente al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Ecosistema' },
    { path: '/sectores', label: 'Sectores' },
    { path: '/metodologia', label: 'Metodología' },
    { path: '/sobre-hurvant', label: 'Sobre Hurvant' },
    { path: '/quejas-y-apelaciones', label: 'Gobernanza' },
    { path: '/verificacion', label: 'Verificación QR' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 glass-header shadow-xs" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo oficial con eslogan corporativo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 transition-transform duration-200 active:scale-98"
          aria-label="HURVANT - Impulsando la Competencia Técnica"
        >
          <img
            src="/Logo.png"
            alt="HURVANT Logo - Organismo Técnico de Certificación e Inspección"
            className="h-[52px] sm:h-[56px] w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col border-l-2 border-slate-200 pl-3 ml-1">
            <span className="text-[11px] font-black text-hurvant-navy uppercase tracking-wider">
              HURVANT
            </span>
            <span className="text-[9.5px] font-bold text-hurvant-indigo tracking-tight">
              Impulsando la Competencia Técnica
            </span>
          </div>
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
        <div className="xl:hidden flex items-center gap-2">
          <Link
            to="/verificacion"
            className="p-2 text-hurvant-indigo bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
            title="Verificación QR de Certificados"
            aria-label="Verificación QR de Certificados"
          >
            <ShieldCheck className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-slate-600 hover:text-hurvant-navy hover:bg-slate-100 transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil / Tablet Desplegable con Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Fondo oscuro traslúcido para cerrar al hacer tap fuera */}
          <div 
            className="fixed inset-0 top-20 bg-slate-900/30 backdrop-blur-xs z-40 xl:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="xl:hidden glass-header border-b border-slate-200/80 animate-slide-up absolute top-20 w-full left-0 z-50 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="p-4 space-y-1.5" role="navigation" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const active = isActivePath(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-all min-h-[48px] ${
                      active
                        ? 'text-hurvant-indigo bg-indigo-50/80 border-l-4 border-hurvant-indigo shadow-xs'
                        : 'text-slate-700 hover:text-hurvant-navy hover:bg-slate-100/70 active:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${active ? 'text-hurvant-indigo translate-x-0.5' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              <div className="pt-3 mt-3 border-t border-slate-200/80 flex flex-col gap-2">
                <Link
                  to="/verificacion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-hurvant-navy to-hurvant-indigo text-white font-bold text-sm rounded-xl shadow-md min-h-[48px]"
                >
                  <ShieldCheck className="w-4 h-4 text-hurvant-cyan" />
                  <span>Verificar Certificado QR</span>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

