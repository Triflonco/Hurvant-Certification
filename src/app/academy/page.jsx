import Link from "next/link";

export const metadata = {
  title: "Hurvant Academy | Formación Especializada",
  description: "División de formación especializada, programas técnicos y desarrollo de talento profesional.",
};

export default function AcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-brand-light flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="mb-4 inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-bold tracking-wider uppercase">
            División de Formación
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Hurvant Academy
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Formación especializada y desarrollo de competencias a través de programas diseñados por profesionales en activo.
          </p>
          
          <div className="bg-white p-8 border border-gray-200 inline-block">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Próximamente</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Estamos definiendo el catálogo formativo y la plataforma e-learning para ofrecer una experiencia educativa de primer nivel.
            </p>
            <Link href="/contacto?division=academy" className="text-brand-primary font-medium hover:underline">
              Contactar para más información &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
