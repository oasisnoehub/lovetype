import { quizQuestions } from './quiz-data';
import { LoveTypeResult } from '@/types/love-type';

export function calculateLoveType(answers: Record<number, 'A' | 'B'>): LoveTypeResult {
  const scores = {
    lead_follow: { A: 0, B: 0 },
    cuddly_accept: { A: 0, B: 0 },
    realistic_passionate: { A: 0, B: 0 },
    optimistic_earnest: { A: 0, B: 0 },
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = quizQuestions.find(q => q.id === parseInt(questionId));
    if (question) {
      scores[question.dimension][answer]++;
    }
  });

  const lead_follow = scores.lead_follow.A >= scores.lead_follow.B ? 'Lead' : 'Follow';
  const cuddly_accept = scores.cuddly_accept.A >= scores.cuddly_accept.B ? 'Cuddly' : 'Accept';
  const realistic_passionate = scores.realistic_passionate.A >= scores.realistic_passionate.B ? 'Realistic' : 'Passionate';
  const optimistic_earnest = scores.optimistic_earnest.A >= scores.optimistic_earnest.B ? 'Optimistic' : 'Earnest';

  const love_type_code =
    (lead_follow === 'Lead' ? 'L' : 'F') +
    (cuddly_accept === 'Cuddly' ? 'C' : 'A') +
    (realistic_passionate === 'Realistic' ? 'R' : 'P') +
    (optimistic_earnest === 'Optimistic' ? 'O' : 'E');

  return {
    lead_follow,
    cuddly_accept,
    realistic_passionate,
    optimistic_earnest,
    love_type_code,
  };
}