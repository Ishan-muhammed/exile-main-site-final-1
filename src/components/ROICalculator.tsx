
import React from 'react';

const ROICalculator: React.FC = () => {
  return (
    <section id="roi" className="py-20 md:py-24 bg-gray-50 border-y border-gray-100 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-deep mb-12 md:mb-16 tracking-tight leading-tight">The Economics of Inaction</h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Left Card: Manual Cost */}
          <div className="bg-white p-8 md:p-12 md:min-h-[440px] rounded-[2.5rem] md:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] flex flex-col items-center justify-center border border-gray-100">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-500 font-bold mb-6 md:mb-10">Annual Manual Labor Loss</h3>
            <div className="text-4xl md:text-6xl font-display font-extrabold text-red-600 mb-6 md:mb-8 tracking-tight">
              ₹2,60,000
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xs mx-auto font-normal">
              Based on 10 hours/week lost at an average managerial rate of ₹500/hr across a standard team of five.
            </p>
          </div>
          
          {/* Right Card: AI Cost */}
          <div className="bg-brand p-8 md:p-12 md:min-h-[440px] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl hover:shadow-brand/20 transition-all duration-300 transform hover:scale-[1.01] relative flex flex-col items-center justify-center overflow-hidden">
            {/* Recommended Badge */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-slate-900 text-white text-[9px] md:text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/10">
                Recommended
              </span>
            </div>

            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-deep font-bold mb-6 md:mb-10 mt-12 md:mt-16">
              Annual AI Partner Cost
            </h3>
            <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 md:mb-8 tracking-tight">
              ₹30,000
            </div>
            <p className="text-white/90 text-xs md:text-sm leading-relaxed max-w-xs mx-auto font-normal">
              Flat fee. One partner. Zero hidden costs. Unlimited potential for system upgrades and consulting.
            </p>

            {/* Subtle light effect on the card */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-brand/10 border border-brand/20 rounded-2xl text-brand-dark font-display font-bold text-xl md:text-3xl shadow-sm">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-extrabold">Savings: ₹2,30,000</span>
          </div>
          <p className="mt-4 text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold">Ready to switch?</p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
