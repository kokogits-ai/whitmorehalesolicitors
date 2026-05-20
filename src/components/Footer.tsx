import { Shield, Scale, Mail, MapPin, AlertCircle, Heart } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
  onOpenScreener: () => void;
}

export default function Footer({ onPageChange, onOpenScreener }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-[#f4f3ee] border-t border-rose-900/15 text-slate-700 font-sans">
      
      {/* Trauma Helpline & Quick Intercept Banner */}
      <div className="bg-rose-50/50 border-b border-rose-900/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-rose-900/15 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-rose-950 font-serif font-bold text-sm sm:text-base">
                  Immediate Safety / Domestic Abuse Concerns?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  If you are in immediate danger, please dial <strong className="text-red-700 font-bold">999</strong> immediately. For confidential 24/7 support in the UK, call the National Domestic Abuse Helpline on <strong className="text-slate-800 font-bold">0808 2000 247</strong>.
                </p>
              </div>
            </div>
            <button
              id="footer-helpline-screener-trigger"
              onClick={onOpenScreener}
              className="px-5 py-2.5 bg-rose-950 hover:bg-rose-900 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm shadow-rose-950/25"
            >
              Secure Emergency Intake
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Charter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Scale className="h-5 w-5 text-rose-900" />
              <span className="font-serif text-lg font-bold tracking-wide text-rose-950 uppercase">
                Whitmore Hales
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              Standing fearlessly for those facing domestic abuse, financial coercion, and coercive deprivation. Whitmore Hales is the UK’s primary trauma-informed case triager, bridging victims directly to champion litigation chambers.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-rose-900 bg-rose-50 border border-rose-900/15 px-3 py-1.5 rounded w-fit">
              <Shield className="h-3 w-3 shrink-0" />
              <span className="font-bold">CONFIDENTIAL STORAGE ENVELOPE</span>
            </div>
          </div>

          {/* Column 2: Legal Advocacy Avenues */}
          <div>
            <h5 className="font-serif text-sm font-bold text-rose-950 uppercase tracking-widest mb-4">
              Practice Sectors
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a onClick={onOpenScreener} className="hover:text-rose-900 text-slate-600 font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                  Domestic Abuse &amp; Coercive Control
                </a>
              </li>
              <li>
                <a onClick={onOpenScreener} className="hover:text-rose-900 text-slate-600 font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                  Forensic Asset Tracing &amp; Alimony
                </a>
              </li>
              <li>
                <a onClick={onOpenScreener} className="hover:text-rose-900 text-slate-600 font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                  Child Representation &amp; Guardianship
                </a>
              </li>
              <li>
                <a onClick={onOpenScreener} className="hover:text-rose-900 text-slate-600 font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                  Human Rights &amp; Humanitarian Visas
                </a>
              </li>
              <li>
                <a onClick={onOpenScreener} className="hover:text-rose-900 text-slate-600 font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                  No-Win-No-Fee Advocacy Schemes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Compassionate Navigation */}
          <div>
            <h5 className="font-serif text-sm font-bold text-rose-950 uppercase tracking-widest mb-4">
              Chambers Directory
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onPageChange('home')} className="hover:text-rose-900 text-slate-600 font-medium transition-colors cursor-pointer text-left">
                  Advocacy Center Home
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('about')} className="hover:text-rose-900 text-slate-600 font-medium transition-colors cursor-pointer text-left">
                  About Principal Whitmore
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('testimonials')} className="hover:text-rose-900 text-slate-600 font-medium transition-colors cursor-pointer text-left">
                  Case Files &amp; Testimonies
                </button>
              </li>
              <li>
                <button onClick={onOpenScreener} className="text-rose-800 hover:text-rose-950 font-semibold cursor-pointer text-left">
                  Take the Case Evaluator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & London Location */}
          <div className="space-y-3.5">
            <h5 className="font-serif text-sm font-bold text-rose-950 uppercase tracking-widest mb-4">
              London Headquarters
            </h5>
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <MapPin className="h-4 w-4 text-rose-800 shrink-0 mt-0.5" />
              <span>
                Bedford Square,<br />
                London WC1B 3JA
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <Mail className="h-4 w-4 text-rose-800 shrink-0" />
              <a href="mailto:whitmorehalesolicitors@outlook.com" className="hover:text-rose-900 transition-colors break-all">
                whitmorehalesolicitors@outlook.com
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory UK & SRA compliance line */}
        <div className="mt-12 pt-8 border-t border-rose-900/10 text-center space-y-4">
          <p className="text-[11px] leading-relaxed text-slate-500 max-w-4xl mx-auto">
            Whitmore Hales is the trading name of Whitmore Hales Solicitors Ltd. Authorised and Regulated by the Solicitors Regulation Authority (SRA Number: 610023). Registered in England &amp; Wales under Company Number 08129420. We strictly store client data incorporating automated zero-knowledge digital envelopes on secured databases to safeguard abuse survivors against surveillance risk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} Whitmore Hales Solicitors. All rights reserved.</span>
            <span className="text-rose-200">|</span>
            <a href="#" className="hover:text-rose-900 transition-colors">Confidentiality Policy</a>
            <span className="text-rose-200">|</span>
            <a href="#" className="hover:text-rose-900 transition-colors">Solicitors Code of Conduct</a>
            <span className="text-rose-200">|</span>
            <span className="flex items-center gap-1 text-[10px] text-rose-800 font-mono font-bold">
              <Heart className="h-2.5 w-2.5 fill-current" /> CHAMPIONING THE VOICELESS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
