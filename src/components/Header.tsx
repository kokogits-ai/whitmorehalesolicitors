import { useState, useEffect } from 'react';
import { Page } from '../types';
import { Shield, Scale, Menu, X, EyeOff } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenScreener: () => void;
}

export default function Header({ currentPage, onPageChange, onOpenScreener }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Covert Exit Protocol
  const triggerCovertExit = () => {
    // Instantly replace window location with BBC Weather for safety
    window.location.replace('https://www.bbc.co.uk/weather');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerCovertExit();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const menuItems = [
    { label: 'Advocacy Home', value: 'home' as Page },
    { label: 'Our Story & Mission', value: 'about' as Page },
    { label: 'Solved Case Files', value: 'testimonials' as Page },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-rose-900/10 py-2.5 shadow-md shadow-slate-100'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            id="brand-logo"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <div className="relative p-2.5 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl border border-rose-900/10 group-hover:border-rose-900/30 transition-all duration-300">
              <Scale className="h-6 w-6 text-rose-850 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-rose-950">
                  WHITMORE
                </span>
                <span className="text-amber-700 font-serif font-light text-sm sm:text-base">
                  &amp;
                </span>
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-rose-900">
                  HALES
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-1">
                <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-rose-800 font-bold">
                  SOLICITORS &amp; ADVOCATES
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => {
                  onPageChange(item.value);
                  setIsOpen(false);
                }}
                className={`relative py-2 font-sans text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                  currentPage === item.value
                    ? 'text-rose-900 font-bold'
                    : 'text-slate-600 hover:text-rose-900'
                }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-rose-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Suite */}
          <div className="hidden md:flex items-center gap-3">
            {/* Urgent Case Intake Button */}
            <button
              id="header-evaluation-btn"
              onClick={onOpenScreener}
              className="relative px-5 py-2.5 bg-rose-900 hover:bg-rose-950 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider active:scale-95 transition-all duration-200 cursor-pointer shadow-sm shadow-rose-900/20"
            >
              Case Evaluator
            </button>

            {/* Trauma-Informed Covert Exit - Highlighted for emergency situations */}
            <button
              id="covert-exit-btn-desktop"
              onClick={triggerCovertExit}
              title="Click or press Esc key immediately to hide this page"
              className="flex items-center gap-2 px-3.5 py-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 rounded-lg text-xs font-mono font-bold hover:border-rose-400 hover:shadow-sm cursor-pointer transition-all duration-200"
            >
              <EyeOff className="h-3.5 w-3.5" />
              <span>COVERT EXIT</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 bg-white text-[9px] rounded font-sans border border-rose-200 text-rose-900">ESC</kbd>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="covert-exit-btn-mobile"
              onClick={triggerCovertExit}
              className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg"
              title="Quick Safe Redirect"
            >
              <EyeOff className="h-4 w-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          id="mobile-menu-container"
          className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.value}
                id={`nav-mobile-${item.value}`}
                onClick={() => {
                  onPageChange(item.value);
                  setIsOpen(false);
                }}
                className={`py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase tracking-widest text-left ${
                  currentPage === item.value
                    ? 'bg-rose-50 text-rose-900 border-l-4 border-rose-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-rose-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              id="mobile-evaluate-btn"
              onClick={() => {
                onOpenScreener();
                setIsOpen(false);
              }}
              className="w-full py-3 bg-rose-900 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-widest text-center"
            >
              Case Evaluator Portal
            </button>
            <div className="text-center">
              <p className="text-[10px] text-rose-700 font-mono">
                Press ESC anytime for immediate weather redirect.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
