import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-brand-light/95 backdrop-blur supports-[backdrop-filter]:bg-brand-light/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-2 md:py-4 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Hurvant Group" 
                className="h-20 md:h-32 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-2 lg:gap-4 items-center">
            <a href="https://certification.hurvant.com" target="_blank" rel="noopener noreferrer" className="relative group block px-4 py-2 text-[15px] font-semibold text-gray-700 hover:bg-[#F0F2FF] hover:text-[#4F47E6] rounded-xl transition-colors">
              Certification & Inspection
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#403FBA] via-[#4F47E6] to-[#06B6D5] rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href="https://digital.hurvant.com" target="_blank" rel="noopener noreferrer" className="relative group block px-4 py-2 text-[15px] font-semibold text-gray-700 hover:bg-[#F0F2FF] hover:text-[#4F47E6] rounded-xl transition-colors">
              Digital
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#403FBA] via-[#4F47E6] to-[#06B6D5] rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <Link href="/academy" className="relative group block px-4 py-2 text-[15px] font-semibold text-gray-700 hover:bg-[#F0F2FF] hover:text-[#4F47E6] rounded-xl transition-colors">
              Academy
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#403FBA] via-[#4F47E6] to-[#06B6D5] rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link href="/contacto" className="ml-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#403FBA] to-[#4F47E6] px-6 py-2.5 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity">
              Contactar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
