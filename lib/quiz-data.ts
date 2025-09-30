import { QuizQuestion } from '@/types/love-type';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'In a relationship, do you prefer to...',
    dimension: 'lead_follow',
    options: [
      { text: 'Set the pace and take initiative', value: 'A' },
      { text: 'Match your partners rhythm and adapt', value: 'B' }
    ]
  },
  {
    id: 2,
    question: 'When making plans together, you usually...',
    dimension: 'lead_follow',
    options: [
      { text: 'Decide what to do and guide the way', value: 'A' },
      { text: 'Go along with what your partner suggests', value: 'B' }
    ]
  },
  {
    id: 3,
    question: 'In the relationship dynamic, you prefer to...',
    dimension: 'lead_follow',
    options: [
      { text: 'Lead and direct the flow', value: 'A' },
      { text: 'Follow and support your partner', value: 'B' }
    ]
  },
  {
    id: 4,
    question: 'When it comes to affection, you...',
    dimension: 'cuddly_accept',
    options: [
      { text: 'Love giving hugs and physical affection', value: 'A' },
      { text: 'Enjoy receiving care and being pampered', value: 'B' }
    ]
  },
  {
    id: 5,
    question: 'In terms of caring for each other, you prefer to...',
    dimension: 'cuddly_accept',
    options: [
      { text: 'Be the one who nurtures and comforts', value: 'A' },
      { text: 'Be the one who receives comfort and care', value: 'B' }
    ]
  },
  {
    id: 6,
    question: 'When expressing love, you tend to...',
    dimension: 'cuddly_accept',
    options: [
      { text: 'Show affection and pamper your partner', value: 'A' },
      { text: 'Accept and appreciate being pampered', value: 'B' }
    ]
  },
  {
    id: 7,
    question: 'Your ideal relationship is...',
    dimension: 'realistic_passionate',
    options: [
      { text: 'Practical, stable, and grounded in reality', value: 'A' },
      { text: 'Intense, romantic, and full of passion', value: 'B' }
    ]
  },
  {
    id: 8,
    question: 'When thinking about love, you value...',
    dimension: 'realistic_passionate',
    options: [
      { text: 'Realistic expectations and steady connection', value: 'A' },
      { text: 'Deep emotions and romantic intensity', value: 'B' }
    ]
  },
  {
    id: 9,
    question: 'In relationships, you prefer...',
    dimension: 'realistic_passionate',
    options: [
      { text: 'Being down-to-earth and practical', value: 'A' },
      { text: 'Being romantic and emotionally intense', value: 'B' }
    ]
  },
  {
    id: 10,
    question: 'Your approach to relationships is...',
    dimension: 'optimistic_earnest',
    options: [
      { text: 'Lighthearted, fun, and carefree', value: 'A' },
      { text: 'Serious, committed, and dedicated', value: 'B' }
    ]
  },
  {
    id: 11,
    question: 'When it comes to commitment, you are...',
    dimension: 'optimistic_earnest',
    options: [
      { text: 'Relaxed and go with the flow', value: 'A' },
      { text: 'Deeply serious and fully devoted', value: 'B' }
    ]
  },
  {
    id: 12,
    question: 'In love, you prefer to be...',
    dimension: 'optimistic_earnest',
    options: [
      { text: 'Free-spirited and optimistic', value: 'A' },
      { text: 'Earnest and deeply committed', value: 'B' }
    ]
  }
];