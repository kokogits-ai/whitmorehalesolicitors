import { useState } from 'react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/legalData';
import { ChevronDown, MessageSquare, Scale, Landmark } from 'lucide-react';

export default function CaseFiles() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'domestic' | 'financial' | 'rights' | 'family'>('all');
  const [expandedCase, setExpandedCase] = useState<string | null>('case-01'); // default expanded

  const filteredCases = CASE_STUDIES.filter((c) => {
    if (activeFilter === 'all') return true;
    return c.category === activeFilter;
  });

  const categories = [
    { value: 'all', label: 'All Cases' },
    { value: 'domestic', label: 'Domestic Coercion' },
    { value: 'financial', label: 'Financial Remedy' },
    { value: 'rights', label: 'Human Rights' },
    { value: 'family', label: 'Child Custody' },
  ];

  return (
    <div id="case-files-section" className="space-y-12">
      
      {/* Dynamic Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rose-900/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-rose-800" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-rose-900 font-bold">
              Archived Precedents
            </span>
          </div>
          <h3 className="font-serif text-2xl font-extrabold text-rose-950 italic">
            Proven Verdicts &amp; Settlements
          </h3>
        </div>

        {/* Filter bar */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center gap-1.5 bg-[#f5f4ef] p-1 rounded-xl border border-rose-900/15 shadow-inner max-w-full scrollbar-none shrink-0">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-case-${cat.value}`}
              onClick={() => setActiveFilter(cat.value as any)}
              className={`px-3 py-2 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-sans tracking-wide font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === cat.value
                  ? 'bg-rose-900 text-white font-bold shadow-sm'
                  : 'text-slate-650 hover:text-rose-950 hover:bg-slate-200/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Case Files with interactive disclosure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Expanded Details Left panel */}
        <div className="lg:col-span-8 space-y-4">
          {filteredCases.map((caseStudy) => {
            const isExpanded = expandedCase === caseStudy.id;
            return (
              <div
                key={caseStudy.id}
                id={`case-card-${caseStudy.id}`}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#fdfcf9] border-rose-900/35 shadow-md shadow-rose-950/5'
                    : 'bg-white border-rose-900/10 hover:border-rose-900/30 hover:bg-[#faf9f6]/60 shadow-sm'
                }`}
              >
                {/* Header Toggle */}
                <button
                  id={`case-toggle-${caseStudy.id}`}
                  onClick={() => setExpandedCase(isExpanded ? null : caseStudy.id)}
                  className="w-full p-5 flex items-stretch text-left justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1 md:space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-rose-50 border border-rose-900/15 text-rose-900 text-[9px] font-mono uppercase tracking-widest rounded-full font-bold">
                        {caseStudy.category === 'domestic' ? 'Domestic Coercion' : 
                         caseStudy.category === 'financial' ? 'Financial Remedy' :
                         caseStudy.category === 'rights' ? 'Human Rights' : 'Custody Protective'}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">
                        SRA REGISTERED &bull; Case Year {caseStudy.year}
                      </span>
                    </div>
                    <h4 className={`font-serif text-lg sm:text-xl font-bold leading-snug transition-colors ${isExpanded ? 'text-rose-950' : 'text-slate-800 group-hover:text-rose-905'}`}>
                      {caseStudy.title}
                    </h4>
                  </div>

                  <div className="flex flex-col items-end justify-between text-right shrink-0">
                    <span className="text-xs sm:text-sm font-mono font-bold text-rose-900 bg-rose-50 border border-rose-900/15 px-3 py-1 rounded shadow-sm">
                      {caseStudy.amountOrRelief}
                    </span>
                    <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 mt-2 transition-transform ${isExpanded && 'rotate-180 bg-rose-50 text-rose-900'}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 border-t border-rose-900/10 space-y-5 animate-in fade-in duration-300">
                    
                    {/* Client context */}
                    <div className="bg-[#fcfbf9] p-4 rounded-lg border border-rose-900/10">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#576572] font-bold block mb-1">
                        Survivor Profile
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed italic font-medium">
                        &quot;{caseStudy.clientProfile}&quot;
                      </p>
                    </div>

                    {/* Technical legal pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                      
                      {/* Legal Challenge */}
                      <div className="space-y-1.5 p-1">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-rose-800 font-bold block">
                          The Challenge
                        </span>
                        <p className="text-slate-650 leading-relaxed font-light">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      {/* Tactical Strategy */}
                      <div className="space-y-1.5 p-1">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-rose-900 font-bold block">
                          The Legal Strategy Deployed
                        </span>
                        <p className="text-slate-650 leading-relaxed font-light">
                          {caseStudy.strategy}
                        </p>
                      </div>

                    </div>

                    {/* The Trial Outcome */}
                    <div className="bg-emerald-50/50 p-4.5 rounded-xl border border-emerald-950/10 text-xs flex gap-3.5 items-start">
                      <div className="p-2 bg-emerald-55 border border-emerald-900/15 rounded-lg shrink-0 mt-0.5">
                        <Landmark className="h-4 w-4 text-emerald-800" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                          Outcome &amp; Court Mandate
                        </span>
                        <p className="text-emerald-950 font-bold leading-relaxed">
                          {caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonials Sidebar panel (Lighter Layout) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-rose-900/15 rounded-xl p-5 space-y-5 shadow-sm">
            <div className="space-y-1.5 flex justify-between items-start">
              <div>
                <span className="text-[8px] uppercase font-mono tracking-[0.25em] text-rose-900 font-bold block">
                  Confidential Testimonies
                </span>
                <h4 className="font-serif text-lg font-bold text-rose-950 animate-fade-in">
                  Letters of Victory
                </h4>
              </div>
              <MessageSquare className="h-5 w-5 text-rose-800" />
            </div>
            
            <p className="text-[11px] leading-relaxed text-slate-500 italic">
              Names have been initialized or altered under SRA client confidentiality clauses to safeguard families and protect active relocated nodes from threat actors.
            </p>

            {/* Testimonials stack */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  id={`testimonial-card-${t.id}`}
                  className="bg-[#faf9f6] p-4 rounded-xl border border-rose-900/10 space-y-3 transition-colors hover:bg-white"
                >
                  <p className="text-[11px] font-sans leading-relaxed text-slate-700 font-light block">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  {/* Testimonial meta */}
                  <div className="pt-2 border-t border-rose-905/10 flex items-stretch justify-between text-[10px]">
                    <div>
                      <span className="font-serif font-bold text-rose-950 block">
                        {t.name}
                      </span>
                      <span className="text-slate-500 font-mono">
                        {t.location} &bull; Age {t.age}
                      </span>
                    </div>

                    <div className="text-right flex flex-col items-end justify-between">
                      <span className="text-rose-900 font-mono font-bold block">
                        VERDICT WIN
                      </span>
                      <span className="text-[9px] text-slate-500 italic font-sans">
                        Confidential settlement
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Secure intake hook */}
            <div className="pt-2">
              <div className="bg-rose-50/50 border border-rose-900/10 p-4 rounded-xl text-center space-y-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800 animate-pulse inline-block" />
                <p className="text-[11px] leading-relaxed text-rose-950 font-bold">
                  Ready to secure your settlement and protect your children? Stand with Lincoln&apos;s Inn experts.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
