
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-24 bg-brand text-brand-deep scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 tracking-tight leading-tight text-white">
              The AI Gap
            </h2>
            <div className="space-y-6 text-base md:text-lg text-white/95 font-normal leading-relaxed">
              <p>
                Small and medium enterprises (SMEs) are losing over <span className="text-white font-bold">10+ hours a week</span> to repetitive, manual tasks that AI could automate today.
              </p>
              <p>
                The problem isn't availability of tools—it's execution. Most business owners don't have the time to be prompt engineers.
              </p>
              <p className="md:border-l-4 border-white/50 md:pl-6 py-2 italic text-white/90 text-sm md:text-base font-medium">
                "We bridge this gap. You run your business, we run your intelligence systems."
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-xl w-full max-w-lg transition-transform hover:scale-[1.01] duration-300 border border-white/20">
              <div className="grid grid-cols-2 gap-6 md:gap-12">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-display font-extrabold text-brand mb-1 tracking-tight">520+</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Hours Lost Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-display font-extrabold text-brand mb-1 tracking-tight">84%</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Process Leakage</div>
                </div>
                <div className="text-center col-span-2 pt-8 md:pt-10 border-t border-brand/10">
                  <div className="text-2xl md:text-3xl font-display font-bold text-brand mb-3 underline decoration-brand/20 underline-offset-8">The Solution</div>
                  <div className="text-slate-900 text-sm md:text-base font-medium leading-relaxed">
                    Exile Automate acts as your plug-and-play CTO for a fraction of the cost.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
