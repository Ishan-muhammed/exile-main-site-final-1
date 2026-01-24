import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-56 md:pb-32 px-4 overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-brand-dark uppercase bg-brand/5 border border-brand/20 rounded-full">
          The AI Partner Program
        </div>
        <h1 className="text-4xl md:text-7xl font-display font-extrabold text-brand-deep leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
          Your In-House AI Department <br className="hidden md:block" />
          for <span className="text-brand">₹2,500/Month.</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 font-normal opacity-90">
          Stop guessing about AI. Start building systems. Get a dedicated AI partner for audits, consulting, and implementation for one flat annual fee.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://exile-audit-portal-u8d3.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-brand text-white font-bold rounded-2xl text-base md:text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Book Your Free AI Audit
          </a>
          <p className="text-xs md:text-sm text-slate-500 italic font-medium">
            *Limited to 10 businesses per quarter
          </p>
        </div>
      </div>
      
      {/* Aesthetic Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-gradient-to-bl from-brand/10 to-transparent blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-gradient-to-tr from-brand-deep/5 to-transparent blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
