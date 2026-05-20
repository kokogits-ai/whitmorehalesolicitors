import { useState } from 'react';
import { Shield, Scale, HeartHandshake, Gavel, Building, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Heart } from 'lucide-react';
import { Page } from '../types';
import { FAQS } from '../data/legalData';

import heroImageSrc from '../assets/images/consultation_light_1779282113094.png';
import handshakeImageSrc from '../assets/images/support_handshake_1779282129638.png';
import legalDocsImageSrc from '../assets/images/legal_documents_1779282149387.png';
import solicitorCounselImageSrc from '../assets/images/solicitor_counsel_1779282883512.png';
import legalSignatureImageSrc from '../assets/images/legal_signature_1779282863079.png';

interface HomeProps {
  onPageChange: (page: Page) => void;
  onOpenScreener: () => void;
}

export default function Home({ onPageChange, onOpenScreener }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // High-comfort light-theme stock images generated via Gemini

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const advocacyPillars = [
    {
      title: "Domestic Coercion & Protective Injunctions",
      desc: "Tactical, trauma-informed enforcement of Non-Molestation and Occupation Orders. We stand by women facing systematic narcissistic or coercive harassment, creating safe harbor environments.",
      icon: Shield,
      category: "domestic"
    },
    {
      title: "Forensic Asset Recovery & Alimony Equity",
      desc: "Piercing offshore structures, hidden trusts, and corporate shields used by hostile spouses to evade alimony and hide assets. We secure full, uncompromised matrimonial settlements.",
      icon: Scale,
      category: "financial"
    },
    {
      title: "Human Rights, Trapped Migrants & Asylum Safeguards",
      desc: "Securing indefinite leave to remain (ILR) for victims of domestic enslavement, modern slavery, and visa coercion. We serve as the unyielding voice against wrongful deportation threats.",
      icon: HeartHandshake,
      category: "rights"
    },
    {
      title: "Child Advocacy & Custody Shield Schemes",
      desc: "Defusing vexatious litigation used by coercive ex-partners to weaponize contact orders. We guarantee a child’s emotional and structural safety remains Paramount in all English family courtrooms.",
      icon: Gavel,
      category: "family"
    }
  ];

  return (
    <div id="home-view" className="space-y-24 pb-20">
      
      {/* 1. Light Elegant Editorial Hero Section */}
      <section id="hero-banner" className="relative min-h-[92vh] flex items-center justify-center pt-28 overflow-hidden bg-gradient-to-r from-[#fdfbf7] via-[#faf7f2] to-[#f5f2eb]">
        
        {/* Soft elegant warm ambient highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/40 to-[#fbfbfa] z-10" />
        <div className="absolute -top-[40%] -left-[20%] w-[90%] h-[90%] bg-rose-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] bg-amber-200/15 rounded-full blur-[100px] mix-blend-multiply" />

        {/* Hero Background Image with Light Treatment */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageSrc}
            alt="Whitmore Hales Lincoln's Inn Library Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 scale-100 filter contrast-100 brightness-105 transition-transform duration-1000"
          />
        </div>

        {/* Hero Content Canvas */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Safe Seal Badge (High Contrast Rose Red) */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-rose-50 border border-rose-900/15 w-fit rounded-lg shadow-sm">
              <Shield className="h-4.5 w-4.5 text-rose-850" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-rose-900">
                UK Trauma-Informed Legal Champions
              </span>
            </div>

            {/* Title Statement */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-rose-950 leading-none">
                The Voice of the <br className="hidden sm:inline" />
                <span className="font-bold italic text-rose-900">Voiceless.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-700 max-w-xl font-sans leading-relaxed">
                Specialized London advocates championing survivors of domestic abuse, financial coercion, and severe marital disputes. We don&apos;t just practice law; we dismantle systemic oppression, transferring cases to elite trial chambers until you win absolute freedom.
              </p>
            </div>

            {/* Actions Panel */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-triage-trigger"
                onClick={onOpenScreener}
                className="px-8 py-4 bg-rose-900 hover:bg-rose-950 text-white rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-widest shadow-md shadow-rose-900/20 hover:scale-[1.01] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Launch Secure Case Screener
              </button>
              
              <button
                id="hero-testimonials-trigger"
                onClick={() => onPageChange('testimonials')}
                className="px-6 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-rose-900/40 text-slate-800 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-sm"
              >
                <span>Browse Solved Verdicts</span>
                <ArrowRight className="h-4 w-4 text-rose-900" />
              </button>
            </div>

            {/* Quick SRA and client counter disclosure */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-rose-900/10 text-[11px] font-mono text-slate-600">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-800" /> SRA Regulated Practitioners
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-800" /> 100% Confidential Consultation
              </span>
            </div>

          </div>

          {/* Majestic High-Contrast Detail Box Right Side */}
          <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
            <div className="bg-white border border-rose-900/15 p-6 rounded-2xl shadow-xl shadow-rose-950/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 bg-rose-500 rounded-full blur-2xl" />
              
              <div className="relative space-y-5">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-rose-900 font-bold block">
                  Lincoln&apos;s Inn Triage Office
                </span>
                
                <h3 className="font-serif text-xl font-bold text-rose-950 leading-snug">
                  Securing Sanctuary &amp; Asset Portfolios Since 2012
                </h3>

                <p className="text-[11px] leading-relaxed text-slate-600">
                  Many survivors of abuse don&apos;t know how to navigate high-fee corporate layers. Under Lead Solicitor Whitmore Hales, we isolate your case, insulate your family, and coordinate funding so your legal defense is fully armored before walking into the Royal Courts of Justice.
                </p>

                {/* Stat mini box */}
                <div className="bg-rose-50 border border-rose-900/10 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-bold block">
                    Vulnerability Settlement Success
                  </span>
                  <div className="flex items-baseline gap-2">
                    <strong className="text-2xl font-serif text-rose-900 font-extrabold">&pound;18.4M+</strong>
                    <span className="text-[9px] text-slate-500 font-mono">Structured Divorces Won</span>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-rose-900/10 h-36 relative">
                  <img
                    src={legalDocsImageSrc}
                    alt="Legal documents and gavel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-95 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Practice Pillars Grid */}
      <section id="advocacy-sectors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="px-3.5 py-1 bg-rose-50 border border-rose-900/15 rounded-full text-xs font-mono font-bold tracking-widest text-rose-900 uppercase">
            Areas of Inflexible Defense
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-rose-950 leading-tight">
            How We Empower the <br />
            <span className="text-rose-800 italic font-medium">Voiceless &amp; Oppressed</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-650 font-light leading-relaxed">
            Whitmore Hales specialized divisions operate with fierce strategic planning. We focus exclusively on the high-friction domestic and financial points where victims are most vulnerable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {advocacyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                id={`pillar-${pillar.category}`}
                className="bg-white border border-rose-900/10 hover:border-rose-900/35 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-rose-50 border border-rose-900/10 w-fit rounded-xl group-hover:bg-rose-900 group-hover:text-white group-hover:border-rose-900 transition-all duration-350">
                    <Icon className="h-6 w-6 text-rose-800 group-hover:text-amber-500" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-rose-950 group-hover:text-rose-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-rose-900/5 mt-6 flex justify-between items-center text-xs">
                  <span className="text-[10px] font-mono text-rose-800 uppercase tracking-widest font-bold">
                    UK MATRIMONIAL ACTS DIRECT COMPLIANCE
                  </span>
                  <button
                    onClick={onOpenScreener}
                    className="flex items-center gap-1.5 text-rose-900 hover:text-rose-950 font-mono tracking-wider font-bold group/sub cursor-pointer"
                  >
                    <span>Assess Feasibility</span>
                    <ArrowRight className="h-3 w-3 group-hover/sub:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Case Distribution Pipeline with Real Image Section */}
      <section id="distribution-pipeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-rose-900/15 py-12 px-6 lg:px-12 relative overflow-hidden shadow-xl shadow-rose-950/5">
          
          <div className="absolute top-0 right-1/3 w-[90%] h-[95%] bg-rose-50/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-900 font-bold block">
                HOW CLIENT TRIAGE WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-rose-950 m-0">
                The Case Placement &amp; Advocacy Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                Survivors facing abuse or extreme financial starvation are often unable to manage direct interactions with multi-member trial chambers. We act as your primary insulating solicitors — packing, auditing, funding, and placing your file directly with peak specialized practitioners.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-rose-900/15 h-44 relative shadow-sm">
                <img
                  src={handshakeImageSrc}
                  alt="Solicitor offering supportive gesture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/10 via-transparent to-transparent" />
              </div>
            </div>

          </div>

          {/* Step flow diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 relative z-10 text-xs">
            {[
              {
                step: "01",
                title: "Encrypted Intake & Trauma Triage",
                desc: "You connect securely via our Case Screener. We record your narrative, deploy safe-escape triggers, and isolate all case records.",
                icon: Shield
              },
              {
                step: "02",
                title: "Forensic Audit & Legal Hardening",
                desc: "We analyze undisclosed bank accounts, audit control chains, and assemble protective non-molestation briefs under UK laws.",
                icon: Scale
              },
              {
                step: "03",
                title: "Elite Chamber Matchmaking",
                desc: "We distribute and register your case with top champion barristers from our vetted SRA panel of elite UK courtroom fighters.",
                icon: Building
              },
              {
                step: "04",
                title: "Courtroom Triumph & Restoration",
                desc: "Our advocates stand at your side from initial injunction directly down to royal court asset settlement. No victim walks alone.",
                icon: Gavel
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#faf9f6]/90 border border-rose-900/10 hover:border-rose-900/30 p-5 rounded-xl space-y-4 relative group hover:bg-white transition-all shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-3xl font-extrabold text-rose-900/35 group-hover:text-rose-900 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2 bg-rose-50 rounded-lg">
                      <ItemIcon className="h-4.5 w-4.5 text-rose-800" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-serif text-sm font-bold text-rose-950 group-hover:text-rose-900 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] leading-relaxed text-slate-600 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Action Bar */}
          <div className="mt-10 pt-8 border-t border-rose-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 italic">
              * All placements undergo absolute zero-knowledge sanitisation before transmission.
            </p>
            <button
              id="pipeline-evaluation-trigger"
              onClick={onOpenScreener}
              className="px-6 py-2.5 bg-rose-900 hover:bg-rose-950 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors shadow-sm"
            >
              Start Intake Flow
            </button>
          </div>

        </div>
      </section>

      {/* Brand New Consultation Setting & Atmosphere Gallery Sections */}
      <section id="consultation-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos Side */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            
            {/* Image A: solicitor_counsel_1779282883512.png */}
            <div className="space-y-3 animate-in fade-in duration-500">
              <div className="rounded-2xl overflow-hidden border border-rose-900/15 aspect-[4/3] relative shadow-md group">
                <img
                  src={solicitorCounselImageSrc}
                  alt="Confidential solicitor counsel meeting in bright sunlit office"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/15 via-transparent to-transparent" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 text-left pl-1 font-bold">
                Fig 1. Safe Sanctuary Consultation Suites
              </p>
            </div>

            {/* Image B: legal_signature_1779282863079.png */}
            <div className="space-y-3 animate-in fade-in duration-500 delay-100">
              <div className="rounded-2xl overflow-hidden border border-rose-900/15 aspect-[4/3] relative shadow-md group">
                <img
                  src={legalSignatureImageSrc}
                  alt="Fountain pen signing secure legal protective injunction contract"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/15 via-transparent to-transparent" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 text-left pl-1 font-bold">
                Fig 2. Solidified SRA Injunction Enforcements
              </p>
            </div>

          </div>

          {/* Core Counsel Statement Side */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#be123c] font-bold block">
              TRAUMA-INFORMED SPACES &amp; COVERT CHANNELS
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-rose-950 leading-tight">
              A Protected Atmosphere <br />
              <span className="text-rose-800 italic font-medium">Built Entirely Around Your Safety</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              We understand that even initiating contact with a solicitor is a critical turning point. That is why our Lincoln&apos;s Inn offices are designed as absolute physical sanctuaries. Any case records, bank audits, or evidence files remain stored on zero-knowledge secure nodes.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              If your internet access is compromised, you can download or print our Case Screener results offline, or mail us using a safe external device directly at our secure inbox:
            </p>
            
            <div className="p-4 bg-rose-50 border border-rose-900/10 rounded-xl space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#be123c] font-bold block">Official Safe Correspondence</span>
              <a href="mailto:whitmorehalesolicitors@outlook.com" className="font-mono text-xs sm:text-sm font-bold text-rose-950 hover:underline break-all block">
                whitmorehalesolicitors@outlook.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Courtroom Impact Statistics (Lighter with Golden Trim) */}
      <section id="advocacy-metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#faf8f4] to-[#f4eff3] border border-rose-900/10 rounded-3xl p-8 lg:p-12 overflow-hidden text-center relative shadow-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { amount: "£14.8M+", label: "Hidden Matrimonial Assets Recovered", desc: "Snatched from offshore accounts & trusts" },
              { amount: "98.4%", label: "Court Protection Orders Secured", desc: "Non-molestation and emergency injunctions" },
              { amount: "420+", label: "Vulnerable Children legally Shielded", desc: "Protected from parental litigation coercion" },
              { amount: "100%", label: "Anonymity Zero-Knowledge Stance", desc: "Highest digital safety protocols in the UK" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 p-2">
                <span className="block text-3xl sm:text-5xl font-serif font-extrabold text-rose-900 tracking-tight">
                  {stat.amount}
                </span>
                <span className="block text-xs sm:text-sm font-serif font-bold text-rose-950">
                  {stat.label}
                </span>
                <span className="block text-[10px] text-slate-600 font-sans">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. UK Survivor FAQ Section */}
      <section id="prm-faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1.5">
          <HelpCircle className="h-6 w-6 text-rose-850 mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold tracking-tight text-rose-950 text-center">
            Critical Survivor Legal Q&amp;A
          </h2>
          <p className="text-xs text-slate-650 font-light max-w-lg mx-auto">
            Practical counsel under the UK Solicitor Act. Here are answers to immediate safety, internet logs, and courtroom funding concerns.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white border border-rose-900/10 hover:border-rose-900/35 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4.5 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-rose-950 hover:text-rose-900 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1 rounded-full bg-rose-50 text-rose-800 transition-transform duration-300 ${isOpen && 'rotate-180 bg-rose-100 text-rose-950'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-rose-900/5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-light animate-in fade-in duration-350">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secure CTA */}
        <div className="bg-rose-50 border border-rose-900/15 rounded-2xl p-6 text-center space-y-4">
          <p className="text-xs text-rose-950 max-w-xl mx-auto leading-relaxed">
            Need urgent guidance? Take our confidential caseworker screener anonymously. Our Lead Partner will compile your preliminary report with zero tracking residues.
          </p>
          <button
            id="faq-evaluation-trigger"
            onClick={onOpenScreener}
            className="px-6 py-2.5 bg-rose-900 hover:bg-rose-950 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-widest cursor-pointer transition-colors shadow-sm"
          >
            CONFIDENTIAL DIGITAL SCREENER INITIATION
          </button>
        </div>

      </section>

    </div>
  );
}
