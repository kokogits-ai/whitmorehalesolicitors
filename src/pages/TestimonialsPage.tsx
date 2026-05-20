import { Page } from '../types';
import CaseFiles from '../components/CaseFiles';
import { Award, ArrowRight } from 'lucide-react';
import justiceScalesSrc from '../assets/images/scales_of_justice_1779281540246.png';

interface TestimonialsPageProps {
  onOpenScreener: () => void;
}

export default function TestimonialsPage({ onOpenScreener }: TestimonialsPageProps) {
  
  // Custom-generated scales of justice photo

  return (
    <div id="testimonials-view" className="space-y-24 pb-20 pt-28 bg-[#fbfbfa]">
      
      {/* 1. Page Header & Editorial Hero with Scales Image */}
      <section id="cases-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-rose-900/15 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-sm">
          
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-rose-500/5 rounded-full blur-[80px]" />

          {/* Intro description */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-rose-50 border border-rose-900/15 w-fit rounded-lg shadow-sm">
              <Award className="h-4 w-4 text-rose-850" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-rose-900">
                UK COURT VERDICTS &amp; CASE STUDIES
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-rose-900 leading-tight">
              Anonymized Court Cases &amp; <br />
              <span className="text-rose-950 italic font-medium">Survivor Testimonials</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              We stand in compliance with the Solicitors Regulation Authority (SRA) confidentiality guidelines. While names and specific locations have been altered, the legal challenges, forensic tactics deployed, and financial or custodial recoveries are 100% genuine records of our victories.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="cases-triage-trigger"
                onClick={onOpenScreener}
                className="px-6 py-3 bg-rose-900 hover:bg-rose-950 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
              >
                Intake Evaluation Screener
              </button>
            </div>
          </div>

          {/* Scaled Scales Image */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-rose-900/15 relative z-10 shadow-lg">
              <img
                src={justiceScalesSrc}
                alt="Golden Scales of Justice in Office Library"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 contrast-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -inset-2 bg-gradient-to-br from-rose-200/20 via-transparent to-rose-200/25 rounded-3xl blur-xl z-0" />
          </div>

        </div>
      </section>

      {/* 2. Primary CaseFiles showcase component with Filter toggling */}
      <section id="filter-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseFiles />
      </section>

      {/* 3. High Performance Trial Injunction Milestones */}
      <section id="injunction-milestones" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#faf8f4] to-[#f4eff3] border border-rose-900/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-3 pb-8 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#be123c] font-bold block">
              DEFENSE PORTFOLIOS AT A GLANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-rose-950">
              SRA-Registered Milestones of Whitmore Hales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-left">
            {[
              {
                title: "Ex-Parte Occupation Orders",
                metric: "24 Hours Or Less",
                desc: "Securing court injunctions forcing abusive spouses out of matrimonial homes without advance warning in urgent bodily threats."
              },
              {
                title: "Offshore Asset Discoveries",
                metric: "£14.8M Secured",
                desc: "Using Lincoln's Inn chancery forensic auditors to pierce shell corporations, disclosing the real matrimonial worth of evasive partners."
              },
              {
                title: "Vexatious Restraint Injunctions",
                metric: "100% Success Rate",
                desc: "Restraining narcissistic partners from launching repeat trivial custody hearings designed solely to drain victim financial funds."
              }
            ].map((mil, index) => (
              <div
                key={index}
                className="bg-white border border-rose-900/10 hover:border-rose-900/30 p-5 rounded-2xl space-y-3 relative group transition-colors shadow-sm"
              >
                <div className="font-serif text-lg font-bold text-rose-900">
                  {mil.metric}
                </div>
                <h4 className="font-serif text-sm font-bold text-rose-950 group-hover:text-rose-900 transition-colors font-sans">
                  {mil.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-slate-600 font-light">
                  {mil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact/Action call to action */}
      <section id="testimonials-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-50 border border-rose-900/15 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-sm">
          <div className="absolute top-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl" />

          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-900 font-bold block">
              CASE DISTRIBUTION PROTOCOLS ACTIVE
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4xl font-extrabold text-rose-950 leading-tight">
              Ready to Win Your Financial &amp; Physical Independence?
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
              Dismantle coercive controls today. If your resources are withheld, or if your physical sanctuary is compromised, we secure the interim support funding to defend your rights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="testimonials-screener-action"
              onClick={onOpenScreener}
              className="w-full sm:w-auto px-8 py-3.5 bg-rose-900 hover:bg-rose-950 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl shadow-sm cursor-pointer"
            >
              Start Safe Case Screener
                </button>
              </div>

          <p className="text-[10px] font-mono text-rose-900 font-bold">
            Confidential Sockets &bull; Press Esc key anytime for covert emergency tab closure.
          </p>
        </div>
      </section>

    </div>
  );
}
