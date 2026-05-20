import { Page } from '../types';
import { Shield, Scale, Target, Sparkles, Building, Heart, Award, Key, Lock, ArrowRight } from 'lucide-react';

interface AboutProps {
  onPageChange: (page: Page) => void;
  onOpenScreener: () => void;
}

export default function About({ onPageChange, onOpenScreener }: AboutProps) {
  
  // Custom-crafted realistic portrait generated via Gemini
  const solicitorPortraitSrc = "/src/assets/images/empowered_solicitor_1779281519515.png";

  const charterPillars = [
    {
      title: "Trauma-Informed Interviewing",
      desc: "We understand that survivors of domestic abuse, coercive control, and extreme gaslighting may find speaking to legal counselors stressful. We provide absolute physical sanctuary, custom safe channels, and discrete pacing.",
      icon: Heart
    },
    {
      title: "Zero-Knowledge Record Storage",
      desc: "Our servers isolate case diaries, screeners, and digital briefs in security nodes that cannot be accessed via shared household devices. We defend you against hostile digital surveillance.",
      icon: Lock
    },
    {
      title: "Forensic Financial Powerhouse",
      desc: "Our legal divisions leverage top UK forensic accounting investigators. We track assets hidden across offshore shells, sham family trusts, and secret cryptocurrency ledgers.",
      icon: Scale
    },
    {
      title: "Fearless Courtroom Representation",
      desc: "We connect survivors with the UK's most aggressive, elite Silk Barristers from Lincoln's Inn and Temple Chambers who stand as absolute, unyielding courtroom advocates.",
      icon: Award
    }
  ];

  return (
    <div id="about-view" className="space-y-24 pb-20 pt-28 bg-[#fbfbfa]">
      
      {/* 1. Introductory Title Statement */}
      <section id="about-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-900 font-bold block">
            OUR GENESIS &amp; MANDATE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-rose-950 leading-tight">
            We are the Shield for those <br />
            <span className="text-rose-800 italic font-medium">Shoved into Corners.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Whitmore E. Whitmore Hales Solicitors was founded on the basic human principle that access to elite court justice should never depend on whether you control the family bank account. We represent the voiceless in their darkest domestic and economic hours.
          </p>
        </div>
      </section>

      {/* 2. Leader Spotlight: Portrait & Bio (Lighter Classic Editorial) */}
      <section id="leader-spotlight" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-rose-900/15 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-sm">
          
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[#881337]/5 rounded-full blur-[80px]" />

          {/* Portrait Container */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-rose-900/15 relative z-10 shadow-lg">
              <img
                src={solicitorPortraitSrc}
                alt="Principal Solicitor Whitmore E. Whitmore Hales"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/20 via-transparent to-transparent animate-fade-in" />
            </div>
            
            {/* Visual glow border accents */}
            <div className="absolute -inset-2 bg-gradient-to-br from-rose-200/20 via-transparent to-rose-200/25 rounded-3xl blur-xl z-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Brand overlay sticker */}
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-rose-900/15 p-3.5 rounded-xl shadow-md">
              <span className="block text-[8px] font-mono tracking-widest text-[#576572] font-semibold uppercase">SENIOR UK ADVOCATE</span>
              <strong className="block text-xs text-rose-950 font-serif font-bold mt-0.5">Whitmore E. Whitmore Hales</strong>
            </div>
          </div>

          {/* Bio statement */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#556972] block font-bold">
              PRINCIPAL FOUNDER LOG
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-rose-950">
              Standing Up to Systemic Legal Coercion
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-750 font-sans leading-relaxed">
              <p>
                &ldquo;For over twenty years, I watched hostile spouses use their wealth in London and Surrey to run victims entirely out of funds, forcing them to surrender child custody and settle divorces under severe duress. I founded this firm as a direct counter-offensive.&rdquo;
              </p>
              <p>
                &ldquo;At Whitmore Hales, our mission is to act as an unyielding, protective conduit. We manage your safety first. Then, we coordinate forensic audits of hidden joint assets, assemble your cases, and introduce you to elite SRA co-panel barristers who are ready to fight the litigation with absolute legal fury. We are here to retrieve what is rightfully yours, and we secure and fund the entire transition so you never stand alone.&rdquo;
              </p>
              <p className="font-serif font-bold text-rose-800 italic">
                &mdash; Whitmore E. Whitmore Hales, Senior Solicitor &amp; Advocate
              </p>
            </div>

            {/* Creds badges */}
            <div className="pt-4 border-t border-rose-900/10 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-900/10">
                <Building className="h-4 w-4 text-rose-800" />
                <span className="text-[10.5px] font-mono text-rose-950 font-bold uppercase">Lincoln&apos;s Inn Chambers</span>
              </div>

              <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-2 rounded-xl border border-[#be123c]/10">
                <Building className="h-4 w-4 text-[#be123c]" />
                <span className="text-[10.5px] font-mono text-[#be123c] font-bold uppercase">Cooperative SRA Panelist</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Charter of Core Legal Standards */}
      <section id="firm-charter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#be123c] font-bold block">
            HOW WE PROTECT SURVIVORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-rose-950">
            Our Survivor Ethical Charter
          </h2>
          <p className="text-xs text-slate-650 font-light">
            We operate with a high-fidelity clinical protocol designed to completely insulate our clients from safety, digital, or financial reprisals during trial actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {charterPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white hover:bg-[#FAF9F6] border border-rose-900/10 hover:border-rose-900/35 p-5 rounded-2xl transition-all flex gap-4 items-start shadow-sm"
              >
                <div className="p-3 bg-rose-50 border border-rose-900/10 rounded-xl text-rose-800 mt-1 shrink-0">
                  <PillarIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-lg font-bold text-rose-950">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Contact / Intake Call To Action */}
      <section id="about-intake-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fcfdfd] border border-rose-900/20 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden space-y-6 shadow-sm">
          
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl" />

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#be123c] font-bold block">
              SECURE ADVOCACY PLACEMENT SESSIONS
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4.5xl font-extrabold tracking-tight text-rose-950 leading-tight">
              Let Whitmore Hales Be Your Force of Justice.
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
              If your joint accounts have been frozen, if you are being harassed or monitored at home, or if you are fighting for your children&apos;s safety in London — take the first step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="about-evaluate-trigger"
              onClick={onOpenScreener}
              className="w-full sm:w-auto px-7 py-3 bg-rose-900 hover:bg-rose-950 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer transition-colors shadow-sm"
            >
              Start Confidential Case Evaluator
            </button>
            
            <a
              id="about-testimonials-trigger"
              onClick={() => onPageChange('testimonials')}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 text-slate-800 hover:text-rose-900 hover:border-rose-900/40 font-mono text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Review Court Verdicts</span>
              <ArrowRight className="h-4 w-4 text-rose-900" />
            </a>
          </div>

          <p className="text-[11px] font-mono text-[#be123c] font-bold">
            * All correspondence is processed using secure sockets and zero logging protocols.
          </p>

        </div>
      </section>

    </div>
  );
}
