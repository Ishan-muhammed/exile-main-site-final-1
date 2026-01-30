
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="block group">
              <img 
                src="https://i.postimg.cc/Cx8Pcm7m/exile-logo-green.png" 
                alt="Exile Automate" 
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10 text-xs font-bold text-slate-700 tracking-[0.2em] uppercase">
            <a 
              href="#problem" 
              onClick={(e) => handleScroll(e, 'problem')}
              className="hover:text-[#00B67A] transition-all duration-300 relative group py-2"
            >
              The Gap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B67A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="hover:text-[#00B67A] transition-all duration-300 relative group py-2"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B67A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#arsenal" 
              onClick={(e) => handleScroll(e, 'arsenal')}
              className="hover:text-[#00B67A] transition-all duration-300 relative group py-2"
            >
              The Arsenal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B67A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#roi" 
              onClick={(e) => handleScroll(e, 'roi')}
              className="hover:text-[#00B67A] transition-all duration-300 relative group py-2"
            >
              ROI
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B67A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Action Button Section */}
          <div className="flex items-center">
            <a 
              href="https://audit.exileaiparnter.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00B67A] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-xs md:text-sm font-bold hover:bg-[#009664] transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,182,122,0.3)] active:scale-95"
            >
              Start Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
