import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'AI Audit', href: '#audit' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-display text-white tracking-tight">
              uScale<span className="text-teal-400">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#audit"
              className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Start Free Audit
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#audit"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg bg-teal-500 text-white font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Free Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;