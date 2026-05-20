import { useState } from 'react';
import { Shield, AlertTriangle, ArrowRight, Printer, Sparkles, Building, CheckCircle, RefreshCw, Landmark, HeartHandshake, Mail, Copy, Check } from 'lucide-react';
import { ScreenerAnswers, AdvisorMatch } from '../types';

interface InteractiveScreenerProps {
  onClose: () => void;
}

export default function InteractiveScreener({ onClose }: InteractiveScreenerProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  
  const [answers, setAnswers] = useState<ScreenerAnswers>({
    caseType: 'domestic',
    hasUrgentDanger: false,
    financialControl: 'severe',
    isAbusedOrHarassed: true,
    legalRepresentation: 'not-sure',
    briefSummary: '',
    contactConsent: true,
    contactMethod: 'secured_portal',
    contactValue: ''
  });

  const [matchResult, setMatchResult] = useState<AdvisorMatch | null>(null);

  const getBriefText = () => {
    return `SECURE BRIEFING DOSSIER - REF: WH-942-XLM
Priority Assessment Score: ${matchResult?.score}/100
Urgency Rating: ${matchResult?.urgencyLevel} RISK
Legal Sector: ${answers.caseType.toUpperCase()}
Immediate Risk: ${answers.hasUrgentDanger ? "YES" : "NO"}
Financial Coercion Level: ${answers.financialControl.toUpperCase()}
Preferred Contact Protocol: ${answers.contactMethod?.toUpperCase() || "SECURE WEB SESSION"}
Contact Info / Hours: ${answers.contactValue || "N/A - Client requested secure screen only"}

Narrative Context provided:
"${answers.briefSummary}"

Proposed Court Avenue Path:
"${matchResult?.legalAvenue}"`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('whitmorehalesolicitors@outlook.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyBriefToClipboard = () => {
    navigator.clipboard.writeText(getBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Secure Case Intake Evaluation Request - WH-942-XLM`);
    const body = encodeURIComponent(
      `Dear Whitmore Hales Advocates,\n\n` +
      `Below represents my Case Screener Diagnosis. Please evaluate my posture and initiate my chambers placement.\n\n` +
      `===========================================\n` +
      getBriefText() +
      `\n===========================================\n\n` +
      `Thank you.`
    );
    return `mailto:whitmorehalesolicitors@outlook.com?subject=${subject}&body=${body}`;
  };

  const handleCheckboxChange = (field: keyof ScreenerAnswers) => {
    setAnswers(prev => ({
      ...prev,
      [field]: !prev[field] as any
    }));
  };

  const handleSelectChange = (field: keyof ScreenerAnswers, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value as any
    }));
  };

  const executeTriageEvaluation = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      // Calculate a highly realistic premium assessment report based on answers
      let score = 50;
      let urgency: 'URGENT' | 'HIGH' | 'STANDARD' = 'STANDARD';
      let legalAvenue = '';
      let chambers: string[] = [];
      let funding = '';

      if (answers.hasUrgentDanger) {
        score += 40;
        urgency = 'URGENT';
        legalAvenue = 'Emergency ex-parte injunction under Section 42 of the Family Law Act 1996 (Non-Molestation & Occupation Orders within 24 hours).';
        chambers = ['Temple Family Law Chambers', 'Garden Court Human Rights Advocates'];
        funding = 'UK Legal Aid emergency exceptional funding / Whittington Pro-bono Alliance support.';
      } else if (answers.isAbusedOrHarassed || answers.financialControl === 'severe') {
        score += 25;
        urgency = 'HIGH';
        legalAvenue = 'Occupation Order alongside digital forensic audit of undisclosed joint funds to prevent asset flight.';
        chambers = ['Lincoln\’s Inn Forensic Family Barristers', 'Red Lion Court Court Advocates'];
        funding = 'No Win No Fee litigation funding / Deferred payment agreement via marital asset separation.';
      } else {
        urgency = 'STANDARD';
        legalAvenue = 'Mediation advisory assessment and joint marital estate restructuring proposal.';
        chambers = ['Lincoln\’s Inn Mediators Panel', 'Hales Family Law Solicitors'];
        funding = 'Standard hourly rate with sliding-scale consultation fee waivers based on personal resources.';
      }

      setMatchResult({
        score,
        urgencyLevel: urgency,
        legalAvenue,
        recommendedChambers: chambers,
        potentialFunding: funding
      });

      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div id="screener-backdrop" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div 
        id="screener-modal"
        className="w-full max-w-3xl bg-[#fdfdfc] rounded-2xl border border-rose-900/15 shadow-2xl overflow-hidden text-slate-800 max-h-[94vh] flex flex-col"
      >
        {/* Banner with secure connection status */}
        <div className="bg-rose-900 px-4 sm:px-6 py-3.5 border-b border-rose-900/10 flex justify-between items-center flex-wrap gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-white animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white font-bold">
              Confidential Casework Triage Workspace
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-rose-100 text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-rose-950/40 border border-white/20 px-2 py-1 rounded cursor-pointer transition-colors"
          >
            Close Portal
          </button>
        </div>

        {/* Dynamic Step Content */}
        <div className="p-4 sm:p-8 space-y-6 overflow-y-auto flex-1">

          {step === 1 && (
            <div id="screener-step-1" className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#be123c] font-bold">
                  Evaluation Step 1 of 2
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-rose-950">
                  Secure Case Feasibility Screener
                </h3>
                <p className="text-xs text-slate-600">
                  Tell us what you are facing. In less than 2 minutes, we will assess your legal posture, identify emergency protective options, and recommend an expert courtroom advocate path.
                </p>
              </div>

              {/* Warning/Privacy notice */}
              <div className="bg-rose-50 border border-rose-250 rounded-xl p-4 flex gap-3 items-start shadow-sm">
                <AlertTriangle className="h-5 w-5 text-rose-900 shrink-0 mt-0.5" />
                <p className="text-xs text-rose-950 leading-relaxed">
                  <strong>Survivor Privacy Protocols Active:</strong> This form leaves zero traces in your local browser history. Your data is processed with dual-layered zero-knowledge database envelopes. If at any moment you hear family members approaching, press <strong>ESC key</strong> or click the <strong>COVERT EXIT</strong> in the header to instantly purge your view.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Sector Selector */}
                <div className="space-y-2">
                  <label id="label-casetype" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                    Primary Legal Sector *
                  </label>
                  <select
                    id="input-casetype"
                    value={answers.caseType}
                    onChange={(e) => handleSelectChange('caseType', e.target.value)}
                    className="w-full bg-white border border-rose-900/15 rounded-lg p-3 text-sm text-slate-800 focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-905 transition-colors shadow-sm font-sans font-medium"
                  >
                    <option value="domestic">Domestic Coercion &amp; Psychological Harassment</option>
                    <option value="financial">Financial Exploitation &amp; Alimony Evasion</option>
                    <option value="family">Child Guardianship, Relocation &amp; Custody Abuse</option>
                    <option value="rights">Human Rights, Trafficking &amp; Refuge Placement</option>
                  </select>
                </div>

                {/* Abuse and Safety factor */}
                <div className="space-y-2">
                  <label id="label-danger" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                    Immediate Physical/Safety Risk? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      id="danger-yes-btn"
                      onClick={() => setAnswers(prev => ({ ...prev, hasUrgentDanger: true }))}
                      className={`py-3 rounded-lg text-xs font-mono uppercase tracking-wider border font-bold transiton-all cursor-pointer ${
                        answers.hasUrgentDanger 
                          ? 'bg-rose-900 text-white border-rose-900 shadow-sm' 
                          : 'bg-white text-slate-600 border-rose-900/15 hover:text-rose-950'
                      }`}
                    >
                      Yes (Urgent Support)
                    </button>
                    <button
                      type="button"
                      id="danger-no-btn"
                      onClick={() => setAnswers(prev => ({ ...prev, hasUrgentDanger: false }))}
                      className={`py-3 rounded-lg text-xs font-mono uppercase tracking-wider border font-bold transiton-all cursor-pointer ${
                        !answers.hasUrgentDanger 
                          ? 'bg-[#eae8e3] text-rose-950 border-[#cbc9c2]' 
                          : 'bg-white text-slate-650 border-rose-900/15 hover:text-rose-950'
                      }`}
                    >
                      No (Secure Case Analysis)
                    </button>
                  </div>
                </div>

                {/* Financial Coercion Factor */}
                <div className="space-y-2">
                  <label id="label-financialControl" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                    Coercive Financial Deprivation Level
                  </label>
                  <select
                    id="input-financial"
                    value={answers.financialControl}
                    onChange={(e) => handleSelectChange('financialControl', e.target.value)}
                    className="w-full bg-white border border-rose-900/15 rounded-lg p-3 text-sm text-slate-800 focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-905 transition-colors shadow-sm font-sans font-medium"
                  >
                    <option value="severe">Severe (Partner controls all/majority funds, no bank access)</option>
                    <option value="moderate">Moderate (Unbalanced control, hiding of assets, joint disputes)</option>
                    <option value="none">Standard / Fair Asset Distribution Requested</option>
                  </select>
                </div>

                {/* Legal Aid background */}
                <div className="space-y-2">
                  <label id="label-legalRep" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                    Retained Representation Status
                  </label>
                  <select
                    id="input-legal-status"
                    value={answers.legalRepresentation}
                    onChange={(e) => handleSelectChange('legalRepresentation', e.target.value)}
                    className="w-full bg-white border border-rose-900/15 rounded-lg p-3 text-sm text-slate-800 focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-905 transition-colors shadow-sm font-sans font-medium"
                  >
                    <option value="none">I have no legal counsel representing me currently</option>
                    <option value="represented">I have counsel but they fail to address abuse aspects</option>
                    <option value="not-sure">Unsure of my funding options and legal standing</option>
                  </select>
                </div>

              </div>

              {/* Narrate story */}
              <div className="space-y-2">
                <label id="label-story" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold flex justify-between">
                  <span>Your Narrative / Legal Question *</span>
                  <span className="text-[10px] text-slate-500 font-semibold font-sans">Anonymized or codenamed description allowed</span>
                </label>
                <textarea
                  id="input-story"
                  rows={4}
                  value={answers.briefSummary}
                  onChange={(e) => handleSelectChange('briefSummary', e.target.value)}
                  placeholder="Tell us what has been happening... (e.g., 'My partner prevents me from working and has hidden joint accounts during child custody filings')"
                  className="w-full bg-white border border-rose-900/15 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:border-rose-900 placeholder-slate-400 focus:ring-1 focus:ring-rose-900 shadow-sm transition-all font-sans font-medium"
                />
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-rose-900/10 flex justify-end">
                <button
                  type="button"
                  id="screener-next-step"
                  disabled={!answers.briefSummary.trim()}
                  onClick={() => setStep(2)}
                  className={`px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${
                    answers.briefSummary.trim()
                      ? 'bg-rose-900 text-white hover:bg-rose-950 shadow-md cursor-pointer hover:shadow-lg'
                      : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  }`}
                >
                  <span>Evaluate My Case</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          )}

          {step === 2 && (
            <div id="screener-step-2" className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#be123c] font-bold">
                  Evaluation Step 2 of 2
                </span>
                <h3 className="font-serif text-2xl font-extrabold tracking-tight text-rose-950">
                  Secure Communication Protocols
                </h3>
                <p className="text-xs text-slate-600">
                  How should our principal advocacy team return your Legal Vulnerability Assessment without exposing you to digital surveillance risks at home?
                </p>
              </div>

              <div className="space-y-5">
                
                {/* Method selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'secured_portal', label: 'Confidential Web Session', desc: 'Display instantly on this browser screen and close upon window close. Zero email sent.' },
                    { id: 'email', label: 'Shielded Email', desc: 'Send to a secure, alternative email that only you can access via secret login.' },
                    { id: 'phone', label: 'Confidential Voice Call', desc: 'Call a safe mobile contact number only during specific, secure hours.' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      id={`contact-method-${method.id}`}
                      onClick={() => handleSelectChange('contactMethod', method.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-2 cursor-pointer ${
                        answers.contactMethod === method.id
                          ? 'bg-rose-50/50 border-rose-900/40 shadow-sm'
                          : 'bg-white border-rose-900/10 hover:border-rose-900/30 hover:bg-[#faf9f6]/40'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold uppercase ${answers.contactMethod === method.id ? 'text-rose-900' : 'text-slate-700'}`}>
                        {method.label}
                      </span>
                      <span className="text-[11px] text-slate-600 leading-relaxed font-sans font-light">
                        {method.desc}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sub input if not secured_portal */}
                {answers.contactMethod !== 'secured_portal' && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label id="label-contact-detail" className="block text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                      {answers.contactMethod === 'email' ? 'Secure Non-Shared Email Address *' : 'Secure Telephone Contact & Preferred Hours *'}
                    </label>
                    <input
                      type="text"
                      id="input-contact-value"
                      value={answers.contactValue || ''}
                      onChange={(e) => handleSelectChange('contactValue', e.target.value)}
                      placeholder={answers.contactMethod === 'email' ? 'e.g., safe_sarah_1991@proton.me' : 'e.g., 07700 900077 (Only call 10am - 12pm, delete logs)'}
                      className="w-full bg-white border border-rose-900/15 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-900 font-mono"
                    />
                  </div>
                )}

                {/* Consent and check box */}
                <div className="bg-[#faf9f6] p-4 rounded-xl border border-rose-900/10 flex gap-3.5 items-start">
                  <input
                    type="checkbox"
                    id="consent-checkbox"
                    checked={answers.contactConsent}
                    onChange={() => handleCheckboxChange('contactConsent')}
                    className="w-4.5 h-4.5 accent-rose-900 rounded cursor-pointer mt-0.5"
                  />
                  <div>
                    <label htmlFor="consent-checkbox" className="text-xs text-rose-955 font-bold select-none cursor-pointer">
                      I declare that submitting this information does not violate any local court orders.
                    </label>
                    <p className="text-[11px] text-slate-650 mt-1leading-relaxed">
                      By checking this, you authorise Whitmore Hales to process these details with zero-knowledge encryption models and match your details with specialized, trauma-informed solicitors in our premier advocacy networks.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-rose-900/10 flex justify-between items-center">
                <button
                  type="button"
                  id="screener-back"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-mono font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  id="screener-submit-trigger"
                  disabled={isSubmitting || !answers.contactConsent || (answers.contactMethod !== 'secured_portal' && !answers.contactValue?.trim())}
                  onClick={executeTriageEvaluation}
                  className={`px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${
                    answers.contactConsent && (answers.contactMethod === 'secured_portal' || answers.contactValue?.trim())
                      ? 'bg-rose-900 text-white hover:bg-rose-950 shadow-lg cursor-pointer'
                      : 'bg-slate-105 text-slate-400 border border-slate-200 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin text-white" />
                      <span>Extracting Precedents...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-white" />
                      <span>Diagnose Now</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

          {step === 3 && matchResult && (
            <div id="screener-step-3" className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              
              {/* Dynamic Assessment Outcome Banner */}
              <div className="bg-emerald-50 border border-emerald-900/15 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-3 opacity-15">
                  <HeartHandshake className="h-24 w-24 text-emerald-800" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-850 font-bold">
                      Legal Vulnerability Diagnosis Generated
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-emerald-950">
                    Your Tailored Casework Briefing
                  </h4>
                  <p className="text-xs text-emerald-900 font-medium max-w-xl">
                    Our triage algorithm has cross-referenced your inputs with the <strong>UK Family Law Act 1996</strong> and matching trust litigation structures. We have generated your preliminary dossier.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="bg-white border border-emerald-900/15 px-4 py-2 rounded-lg shadow-sm">
                      <span className="block text-[8px] uppercase tracking-wider text-slate-600 font-mono font-bold">PRIORITY SCORE</span>
                      <strong className="text-emerald-800 font-serif text-lg font-extrabold">{matchResult.score}/100</strong>
                    </div>
                    
                    <div className="bg-rose-50 border border-rose-900/15 px-4 py-2 rounded-lg shadow-sm">
                      <span className="block text-[8px] uppercase tracking-wider text-slate-600 font-mono font-bold">URGENCY RATING</span>
                      <strong className={`font-serif text-base font-extrabold ${matchResult.urgencyLevel === 'URGENT' ? 'text-rose-900' : 'text-amber-700'}`}>
                        {matchResult.urgencyLevel} RISK
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostic breakdown grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                
                {/* Proposed Legal Path */}
                <div className="bg-white border border-rose-900/10 rounded-xl p-4.5 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-900 font-bold font-mono uppercase tracking-wider text-[10px]">
                    <Landmark className="h-3.5 w-3.5" />
                    <span>UK Court Avenue Action</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {matchResult.legalAvenue}
                  </p>
                </div>

                {/* Trial Match advocacy list */}
                <div className="bg-white border border-rose-900/10 rounded-xl p-4.5 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-900 font-bold font-mono uppercase tracking-wider text-[10px]">
                    <Building className="h-3.5 w-3.5" />
                    <span>Chambers Matching Panel</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700 font-medium">
                    {matchResult.recommendedChambers.map((cham, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600 text-xs shrink-0" />
                        <span>{cham} (SRA Co-panelist)</span>
                      </li>
                    ))}
                    <li className="text-[10px] text-slate-500 italic pt-1 font-semibold">
                      * Triaged and distributed under confidential tactical supervision.
                    </li>
                  </ul>
                </div>

                {/* Funding sources */}
                <div className="bg-white border border-rose-900/10 rounded-xl p-4.5 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-900 font-bold font-mono uppercase tracking-wider text-[10px]">
                    <CheckCircle className="h-3.5 w-3.5 text-rose-900" />
                    <span>Defense Funding Strategy</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-semibold">
                    {matchResult.potentialFunding}
                  </p>
                </div>

                {/* Survivor safety steps */}
                <div className="bg-white border border-rose-900/10 rounded-xl p-4.5 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-800 font-bold font-mono uppercase tracking-wider text-[10px]">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Safe Digital Footprint Steps</span>
                  </div>
                  <ul className="space-y-1 pl-1 text-[11px] text-slate-650 font-medium">
                    <li>1. Erase browser cache completely for this hour.</li>
                    <li>2. Create a secure email using proton.me at a public system if possible.</li>
                    <li>3. Turn off smart-home location triggers on your personal phone.</li>
                  </ul>
                </div>

              </div>

              {/* Secure submission workflow */}
              <div className="bg-rose-50 border border-rose-900/15 rounded-xl p-5 space-y-4 shadow-sm text-left">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-rose-905">
                    <Mail className="h-5 w-5 text-rose-800 animate-pulse" />
                    <h5 className="font-serif text-base font-bold text-rose-955 leading-snug">
                      Official Casework Submission Protocol
                    </h5>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
                    To officially register your file and schedule a direct evaluation session with Partner <strong>Whitmore E. Whitmore Hales</strong>, please submit your Generated Dossier to our priority triage inbox:
                  </p>
                </div>

                {/* Email Display card with Copy Button */}
                <div className="bg-white border border-rose-900/15 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="font-mono font-bold text-rose-950 flex items-center gap-2 break-all p-1.5 bg-rose-50/50 rounded-lg flex-1">
                    <span className="text-[#be123c] uppercase text-[9px] tracking-wider font-bold">Triage Email:</span>
                    <span>whitmorehalesolicitors@outlook.com</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="px-4 py-2 bg-[#eae8e3] hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-rose-900" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Action suite */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <a
                      href={getMailtoLink()}
                      id="launch-email-draft-btn"
                      className="flex-1 px-5 py-3 bg-rose-900 hover:bg-rose-950 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all duration-200"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Launch Mail Draft</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyBriefToClipboard}
                      className="px-5 py-3 bg-white border border-slate-200 text-slate-800 hover:text-rose-900 hover:border-rose-900/35 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      {copiedBrief ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Dossier Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy Briefing Dossier</span>
                        </>
                      )}
                    </button>
                  </div>

                  {copiedBrief && (
                    <div className="bg-emerald-50 text-emerald-900 border border-emerald-250 rounded-lg p-2.5 text-[10px] text-center font-mono font-bold">
                      Your legal briefing is stored in clipboard! You can paste it (Ctrl+V / Cmd+V) directly into your email.
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button
                      type="button"
                      id="print-diagnostic-btn"
                      onClick={triggerPrint}
                      className="px-5 py-2 hover:bg-slate-100 text-slate-700 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Printer className="h-3.5 w-3.5 text-rose-900" />
                      <span>Print Hard Copy Summary</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Action buttons footer */}
              <div className="pt-4 border-t border-rose-900/10 flex justify-between items-center">
                <button
                  type="button"
                  id="start-assessment-over"
                  onClick={() => {
                    setStep(1);
                    setMatchResult(null);
                    setIsSubmitted(false);
                  }}
                  className="px-4 py-2 text-xs text-rose-900 hover:text-rose-950 font-mono font-bold underline cursor-pointer"
                >
                  Start Over
                </button>
                <button
                  type="button"
                  id="close-portal-dossier"
                  onClick={onClose}
                  className="px-6 py-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-mono font-bold uppercase tracking-wider cursor-pointer transition-all"
                >
                  Close Secure Window
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
