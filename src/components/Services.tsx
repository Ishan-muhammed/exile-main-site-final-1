
import React from 'react';

const services = [
  {
    title: 'Monthly AI Audit',
    subtitle: 'Finding the Leaks',
    description: 'A deep-dive analysis of your current workflows to identify exactly where manual labor is draining your revenue.',
    icon: (
      <svg className="w-8 h-8 text-white group-hover:text-brand transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Strategy Call',
    subtitle: 'Future-Proofing 2026',
    description: 'A dedicated monthly session to review AI landscape shifts and adjust your strategy to stay 18 months ahead of competitors.',
    icon: (
      <svg className="w-8 h-8 text-white group-hover:text-brand transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'The Rapid Deployment Suite',
    subtitle: 'From Discovery to ROI in 14 Days',
    description: (
      <p className="leading-relaxed text-sm md:text-base opacity-90">
        "We don’t just talk about AI; we install it. Your partnership includes the immediate deployment of our proprietary 'Revenue Engines' designed to capture, converse, and close."
      </p>
    ),
    icon: (
      <svg className="w-8 h-8 text-white group-hover:text-brand transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand font-bold mb-4">The Menu of Services</h2>
          <p className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep tracking-tight leading-tight">
            Structured Growth. <br className="md:hidden" />
            <span className="block md:inline-block">Flat Fee.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 md:p-10 bg-brand hover:bg-white border border-transparent hover:border-brand shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-start rounded-[2rem] md:rounded-3xl h-full"
            >
              <div className="mb-6 md:mb-8 p-4 bg-white/10 rounded-2xl group-hover:bg-brand/5 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-brand-deep mb-1.5 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6 group-hover:text-brand transition-colors duration-300">
                {service.subtitle}
              </p>
              <div className="text-white/90 text-sm md:text-base leading-relaxed font-normal group-hover:text-slate transition-colors duration-300 w-full">
                {service.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 py-8 border-t border-b border-gray-100 flex flex-wrap justify-center gap-6 md:gap-12">
          {['Strategic Precision', 'Operational Excellence', 'Scalable Intelligence'].map((text) => (
            <span 
              key={text}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-[#04b867] via-[#0a814e] to-[#04b867] animate-gradient-move"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
