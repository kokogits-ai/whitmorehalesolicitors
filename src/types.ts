export type Page = 'home' | 'about' | 'testimonials';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'domestic' | 'financial' | 'rights' | 'family';
  clientProfile: string;
  challenge: string;
  strategy: string;
  outcome: string;
  amountOrRelief: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  age?: number;
  tags: string[];
  quote: string;
  experienceDetail: string;
  caseOutcome: string;
}

export interface ScreenerAnswers {
  caseType: string;
  hasUrgentDanger: boolean;
  financialControl: string;
  isAbusedOrHarassed: boolean;
  legalRepresentation: string;
  briefSummary: string;
  contactConsent: boolean;
  contactMethod?: 'email' | 'phone' | 'secured_portal';
  contactValue?: string;
}

export interface AdvisorMatch {
  score: number;
  urgencyLevel: 'URGENT' | 'HIGH' | 'STANDARD';
  legalAvenue: string;
  recommendedChambers: string[];
  potentialFunding: string;
}
