
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="https://i.postimg.cc/Cx8Pcm7m/exile-logo-green.png" 
              alt="Exile Automate" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <p className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-[0.15em] font-medium">
              Automate. Accelerate. Elevate.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-6 md:space-y-4">
            <div className="flex space-x-6 md:space-x-8">
              <a href="#" className="text-slate-500 hover:text-brand transition-colors text-[10px] md:text-xs uppercase tracking-widest font-bold">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-brand transition-colors text-[10px] md:text-xs uppercase tracking-widest font-bold">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-brand transition-colors text-[10px] md:text-xs uppercase tracking-widest font-bold">Contact</a>
            </div>
            <div className="text-slate-400 text-[10px] md:text-[11px] font-medium tracking-tight">
              &copy; {currentYear} Exile Automate Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
