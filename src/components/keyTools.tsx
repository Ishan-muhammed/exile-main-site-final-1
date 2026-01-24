
import React from 'react';

const tools = [
  {
    label: 'The WhatsApp Sales Command',
    headline: '24/7 WhatsApp Closing Bot',
    hook: 'Never let a lead go cold. Our AI handles initial inquiries, qualifies intent, and sends booking links—all within WhatsApp.',
    result: '0-minute response times and a full calendar.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  },
  {
    label: 'The Site-to-Sales Engine',
    headline: 'AI Lead Capture 2.0',
    hook: 'A custom-trained agent for your website that knows your business better than your best salesperson. It identifies high-value visitors and captures data before they bounce.',
    result: '3x increase in website conversion rates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    label: 'The Multi-Channel Nurture Core',
    headline: 'Automated Trust-Builder',
    hook: 'Automated 7-day follow-up sequences across Email and SMS. The AI keeps the conversation going until the lead is ready to pay.',
    result: 'Zero manual follow-ups required from your team.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const KeyTools: React.FC = () => {
  return (
    <section id="arsenal" className="py-20 md:py-32 bg-gray-50 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand font-bold mb-4">The Core Arsenal</h2>
          <p className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep tracking-tight leading-tight">
            Built to Outperform. <br className="hidden md:block" />
            Deployed to Scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand/5 hover:border-brand/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {tool.icon}
              </div>
              
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                {tool.label}
              </p>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-brand-deep mb-5 group-hover:text-brand transition-colors duration-300">
                {tool.headline}
              </h3>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-grow opacity-90">
                {tool.hook}
              </p>
              
              <div className="mt-auto">
                <div className="p-5 md:p-6 bg-brand/5 rounded-3xl border border-brand/10 group-hover:border-brand/30 group-hover:bg-brand/[0.08] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="bg-brand text-white rounded-full p-1 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-deep/60 mb-1.5">Impact Result</p>
                      <p className="text-sm md:text-[15px] font-extrabold text-brand-deep leading-tight group-hover:text-brand transition-colors duration-300">
                        {tool.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTools;
