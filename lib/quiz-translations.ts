import { Language } from './i18n';

export interface QuizQuestionTranslation {
  question: Record<Language, string>;
  optionA: Record<Language, string>;
  optionB: Record<Language, string>;
}

export const quizQuestionsTranslations: Record<number, QuizQuestionTranslation> = {
  1: {
    question: {
      en: 'In a relationship, do you prefer to...',
      zh: '在恋爱关系中，你更喜欢...',
      ko: '관계에서 당신은...',
      ja: '関係において、あなたは...',
    },
    optionA: {
      en: 'Set the pace and take initiative',
      zh: '设定节奏并主动出击',
      ko: '속도를 설정하고 주도권을 잡다',
      ja: 'ペースを設定し主導権を取る',
    },
    optionB: {
      en: "Match your partner's rhythm and adapt",
      zh: '匹配伴侣的节奏并适应',
      ko: '파트너의 리듬에 맞추고 적응하다',
      ja: 'パートナーのリズムに合わせ適応する',
    },
  },
  2: {
    question: {
      en: 'When making plans together, you usually...',
      zh: '当一起制定计划时，你通常...',
      ko: '함께 계획을 세울 때, 당신은 보통...',
      ja: '一緒に計画を立てるとき、あなたは通常...',
    },
    optionA: {
      en: 'Decide what to do and guide the way',
      zh: '决定做什么并引导方向',
      ko: '무엇을 할지 결정하고 길을 안내하다',
      ja: '何をするか決めて道を導く',
    },
    optionB: {
      en: 'Go along with what your partner suggests',
      zh: '配合伴侣的建议',
      ko: '파트너가 제안하는 것에 따르다',
      ja: 'パートナーが提案することに従う',
    },
  },
  3: {
    question: {
      en: 'In the relationship dynamic, you prefer to...',
      zh: '在关系动态中，你更喜欢...',
      ko: '관계 역학에서 당신은...',
      ja: '関係のダイナミクスにおいて、あなたは...',
    },
    optionA: {
      en: 'Lead and direct the flow',
      zh: '领导并指导流程',
      ko: '이끌고 흐름을 지시하다',
      ja: '導き、流れを指示する',
    },
    optionB: {
      en: 'Follow and support your partner',
      zh: '跟随并支持伴侣',
      ko: '따라가고 파트너를 지원하다',
      ja: 'パートナーに従いサポートする',
    },
  },
  4: {
    question: {
      en: 'When it comes to affection, you...',
      zh: '当涉及到情感时，你...',
      ko: '애정에 관해서는, 당신은...',
      ja: '愛情について、あなたは...',
    },
    optionA: {
      en: 'Love giving hugs and physical affection',
      zh: '喜欢给予拥抱和身体接触',
      ko: '포옹과 신체적 애정을 주는 것을 좋아하다',
      ja: 'ハグや身体的な愛情を与えるのが好き',
    },
    optionB: {
      en: 'Enjoy receiving care and being pampered',
      zh: '享受接受照顾和被宠爱',
      ko: '보살핌을 받고 애지중지 받는 것을 즐기다',
      ja: 'ケアを受け甘やかされることを楽しむ',
    },
  },
  5: {
    question: {
      en: 'In terms of caring for each other, you prefer to...',
      zh: '在相互关心方面，你更喜欢...',
      ko: '서로를 돌보는 것에 관해서, 당신은...',
      ja: '互いにケアすることについて、あなたは...',
    },
    optionA: {
      en: 'Be the one who nurtures and comforts',
      zh: '成为那个滋养和安慰的人',
      ko: '양육하고 위로하는 사람이 되다',
      ja: '育て慰める人である',
    },
    optionB: {
      en: 'Be the one who receives comfort and care',
      zh: '成为那个接受安慰和照顾的人',
      ko: '위로와 보살핌을 받는 사람이 되다',
      ja: '慰めとケアを受ける人である',
    },
  },
  6: {
    question: {
      en: 'When expressing love, you tend to...',
      zh: '当表达爱意时，你倾向于...',
      ko: '사랑을 표현할 때, 당신은...',
      ja: '愛を表現するとき、あなたは...',
    },
    optionA: {
      en: 'Show affection and pamper your partner',
      zh: '表现情感并宠爱伴侣',
      ko: '애정을 보이고 파트너를 애지중지하다',
      ja: '愛情を示しパートナーを甘やかす',
    },
    optionB: {
      en: 'Accept and appreciate being pampered',
      zh: '接受并感激被宠爱',
      ko: '애지중지 받는 것을 받아들이고 감사하다',
      ja: '甘やかされることを受け入れ感謝する',
    },
  },
  7: {
    question: {
      en: 'Your ideal relationship is...',
      zh: '你理想的关系是...',
      ko: '당신의 이상적인 관계는...',
      ja: 'あなたの理想の関係は...',
    },
    optionA: {
      en: 'Practical, stable, and grounded in reality',
      zh: '实际的、稳定的、基于现实的',
      ko: '실용적이고 안정적이며 현실에 기반한',
      ja: '実用的で安定した現実に根ざした',
    },
    optionB: {
      en: 'Intense, romantic, and full of passion',
      zh: '强烈的、浪漫的、充满激情的',
      ko: '강렬하고 낭만적이며 열정으로 가득한',
      ja: '激しくロマンチックで情熱に満ちた',
    },
  },
  8: {
    question: {
      en: 'When thinking about love, you value...',
      zh: '当思考爱情时，你重视...',
      ko: '사랑에 대해 생각할 때, 당신은...',
      ja: '愛について考えるとき、あなたは...',
    },
    optionA: {
      en: 'Realistic expectations and steady connection',
      zh: '现实的期望和稳定的联系',
      ko: '현실적인 기대와 꾸준한 연결',
      ja: '現実的な期待と安定したつながり',
    },
    optionB: {
      en: 'Deep emotions and romantic intensity',
      zh: '深刻的情感和浪漫的强度',
      ko: '깊은 감정과 낭만적인 강렬함',
      ja: '深い感情とロマンチックな強さ',
    },
  },
  9: {
    question: {
      en: 'In relationships, you prefer...',
      zh: '在关系中，你更喜欢...',
      ko: '관계에서 당신은...',
      ja: '関係において、あなたは...',
    },
    optionA: {
      en: 'Being down-to-earth and practical',
      zh: '脚踏实地和实际',
      ko: '현실적이고 실용적인 것',
      ja: '現実的で実用的であること',
    },
    optionB: {
      en: 'Being romantic and emotionally intense',
      zh: '浪漫和情感强烈',
      ko: '낭만적이고 감정적으로 강렬한 것',
      ja: 'ロマンチックで感情的に激しいこと',
    },
  },
  10: {
    question: {
      en: 'Your approach to relationships is...',
      zh: '你对待关系的方式是...',
      ko: '관계에 대한 당신의 접근 방식은...',
      ja: '関係へのあなたのアプローチは...',
    },
    optionA: {
      en: 'Lighthearted, fun, and carefree',
      zh: '轻松、有趣、无忧无虑',
      ko: '가볍고 재미있고 자유로운',
      ja: '軽快で楽しく屈託のない',
    },
    optionB: {
      en: 'Serious, committed, and dedicated',
      zh: '认真、投入、专注',
      ko: '진지하고 헌신적이며 전념하는',
      ja: '真剣で献身的で専念した',
    },
  },
  11: {
    question: {
      en: 'When it comes to commitment, you are...',
      zh: '当涉及到承诺时，你是...',
      ko: '헌신에 관해서, 당신은...',
      ja: 'コミットメントについて、あなたは...',
    },
    optionA: {
      en: 'Relaxed and go with the flow',
      zh: '放松并随波逐流',
      ko: '편안하고 흐름에 따르는',
      ja: 'リラックスして流れに任せる',
    },
    optionB: {
      en: 'Deeply serious and fully devoted',
      zh: '非常认真并全心投入',
      ko: '매우 진지하고 완전히 헌신하는',
      ja: '非常に真剣で完全に献身的',
    },
  },
  12: {
    question: {
      en: 'In love, you prefer to be...',
      zh: '在爱情中，你更喜欢...',
      ko: '사랑에서 당신은...',
      ja: '恋愛において、あなたは...',
    },
    optionA: {
      en: 'Free-spirited and optimistic',
      zh: '自由自在和乐观',
      ko: '자유로운 정신과 낙관적인',
      ja: '自由な精神で楽観的',
    },
    optionB: {
      en: 'Earnest and deeply committed',
      zh: '真挚和深度投入',
      ko: '진지하고 깊이 헌신하는',
      ja: '真剣で深く献身的',
    },
  },
};