export type LeadFollow = 'Lead' | 'Follow';
export type CuddlyAccept = 'Cuddly' | 'Accept';
export type RealisticPassionate = 'Realistic' | 'Passionate';
export type OptimisticEarnest = 'Optimistic' | 'Earnest';

export interface QuizQuestion {
  id: number;
  question: string;
  dimension: 'lead_follow' | 'cuddly_accept' | 'realistic_passionate' | 'optimistic_earnest';
  options: {
    text: string;
    value: 'A' | 'B';
  }[];
}

export interface LoveTypeResult {
  lead_follow: LeadFollow;
  cuddly_accept: CuddlyAccept;
  realistic_passionate: RealisticPassionate;
  optimistic_earnest: OptimisticEarnest;
  love_type_code: string;
}

export interface LoveTypeDescription {
  id: string;
  code: string;
  name: string;
  description: string;
  strengths: string[];
  characteristics: string[];
  compatibility: string[];
}

export interface QuizResult extends LoveTypeResult {
  id: string;
  user_id?: string;
  created_at: string;
}