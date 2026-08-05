import Link from "next/link";

export default function DivisionCard({ 
  title, 
  description, 
  services, 
  href, 
  buttonText, 
  isExternal = false,
  isDisabled = false,
  image
}) {
  
  const content = (
    <div className="group h-full flex flex-col p-8 border border-gray-200 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:border-brand-primary hover:shadow-md relative overflow-hidden">
      {/* Decorative accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-primary transition-colors duration-300"></div>
      
      {image && (
        <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      )}

      <div className="flex-grow flex flex-col">
        <h3 className="text-[22px] font-bold mb-4 text-[#0F172A] tracking-tight">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {services && services.length > 0 && (
          <div className="mb-8 w-full">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Servicios principales</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start text-[15px] font-medium text-gray-700">
                  <svg className="w-5 h-5 text-[#06B6D5] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6 w-full">
        <span className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all ${
          isDisabled 
            ? "bg-gray-50 text-gray-400 cursor-not-allowed" 
            : "bg-[#F8FAFC] text-[#0F172A] hover:bg-[#F1F5F9] border border-gray-100 group-hover:border-gray-200"
        }`}>
          {buttonText}
          {!isDisabled && (
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );

  if (isDisabled) {
    return <div className="h-full">{content}</div>;
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
      {content}
    </Link>
  );
}
