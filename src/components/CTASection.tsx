import React from 'react';

const CTASection: React.FC = () => {
  // Updated to the user's specific requested link including the trailing slash
  const PORTAL_URL = "https://exile-audit-portal-u8d3.vercel.app/";

  return (
    <section id="cta" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-deep mb-6 md:mb-8 tracking-tight leading-tight">
          Ready to close the gap?
        </h2>
        <p className="text-base md:text-lg text-slate mb-10 md:mb-12 font-normal max-w-2xl mx-auto leading-relaxed opacity-90">
          We take on a limited number of partners to ensure every implementation is bespoke and high-performing. Secure your slot for the next quarter.
        </p>
        
        <a 
          href={PORTAL_URL} 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 font-bold text-white transition-all bg-brand-deep rounded-2xl hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-deep w-full md:w-auto shadow-lg hover:shadow-xl active:scale-[0.98] no-underline"
          onClick={(e) => {
            // Safety backup to force the new tab with correct URL
            window.open(PORTAL_URL, '_blank');
            e.preventDefault();
          }}
        >
          <span className="relative text-lg md:text-xl">Book Your Free AI Audit</span>
          <svg className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        
        <p className="mt-6 md:mt-8 text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.3em] font-bold">
          No credit card required. Pure strategy.
        </p>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-brand/10 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute w-[60%] h-[60%] border border-brand/5 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default CTASection;
