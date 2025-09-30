import { Language } from './i18n';

type TranslationKey = string;
type Translations = Record<Language, Record<TranslationKey, string>>;

export const translations: Translations = {
  en: {
    'app.title': '16 Love Type',
    'app.subtitle': 'Discover Your Unique Love Personality',
    'home.title': '16 Love Type',
    'home.what_is': 'What is 16 Love Type?',
    'home.description': 'Discover your unique approach to relationships through 4 core dimensions that define how you love:',
    'home.start_quiz': 'Start Quiz',
    'home.final_text': "Through 12 carefully crafted questions, we'll identify your combination of these traits and match you to one of 16 distinct love types.",

    'dimension.lead_follow': 'Lead / Follow',
    'dimension.lead_follow_desc': "Whether you set the pace or match your partner's rhythm",
    'dimension.cuddly_accept': 'Cuddly / Accept',
    'dimension.cuddly_accept_desc': 'Whether you prefer giving affection or receiving care',
    'dimension.realistic_passionate': 'Realistic / Passionate',
    'dimension.realistic_passionate_desc': 'Whether you value practical love or intense romance',
    'dimension.optimistic_earnest': 'Optimistic / Earnest',
    'dimension.optimistic_earnest_desc': "Whether you're carefree or deeply serious about love",

    'quiz.question': 'Question',
    'quiz.next': 'Next',
    'quiz.view_results': 'View Results',
    'quiz.calculating': 'Calculating your love type...',

    'result.your_type': 'Your Love Type',
    'result.key_characteristics': 'Key Characteristics',
    'result.strengths': 'Your Strengths',
    'result.compatible': 'Compatible With',
    'result.back_home': 'Back to Home',

    'types.title': '16 Love Types',
    'types.subtitle': 'Explore all personality types',

    'profile.title': 'Quiz History',
    'profile.subtitle': 'Your past results',
    'profile.no_results': 'No quiz results yet',
    'profile.take_quiz': 'Take the quiz to see your love type!',

    'tab.home': 'Home',
    'tab.types': 'Love Types',
    'tab.profile': 'Profile',

    'language.english': 'English',
    'language.chinese': '简体中文',
    'language.korean': '한국어',
    'language.japanese': '日本語',
  },
  zh: {
    'app.title': '16种爱情类型',
    'app.subtitle': '发现你独特的爱情性格',
    'home.title': '16种爱情类型',
    'home.what_is': '什么是16种爱情类型？',
    'home.description': '通过定义你如何去爱的4个核心维度，发现你独特的关系方式：',
    'home.start_quiz': '开始测试',
    'home.final_text': '通过12个精心设计的问题，我们将识别你这些特征的组合，并将你匹配到16种独特的爱情类型之一。',

    'dimension.lead_follow': '主导 / 跟随',
    'dimension.lead_follow_desc': '你是设定节奏还是匹配伴侣的节奏',
    'dimension.cuddly_accept': '亲昵 / 接受',
    'dimension.cuddly_accept_desc': '你更喜欢给予关爱还是接受照顾',
    'dimension.realistic_passionate': '现实 / 热情',
    'dimension.realistic_passionate_desc': '你重视实际的爱情还是强烈的浪漫',
    'dimension.optimistic_earnest': '乐观 / 认真',
    'dimension.optimistic_earnest_desc': '你对爱情是无忧无虑还是非常认真',

    'quiz.question': '问题',
    'quiz.next': '下一个',
    'quiz.view_results': '查看结果',
    'quiz.calculating': '正在计算你的爱情类型...',

    'result.your_type': '你的爱情类型',
    'result.key_characteristics': '关键特征',
    'result.strengths': '你的优势',
    'result.compatible': '兼容对象',
    'result.back_home': '返回首页',

    'types.title': '16种爱情类型',
    'types.subtitle': '探索所有性格类型',

    'profile.title': '测试历史',
    'profile.subtitle': '你的过去结果',
    'profile.no_results': '还没有测试结果',
    'profile.take_quiz': '参加测试以查看你的爱情类型！',

    'tab.home': '首页',
    'tab.types': '爱情类型',
    'tab.profile': '个人资料',

    'language.english': 'English',
    'language.chinese': '简体中文',
    'language.korean': '한국어',
    'language.japanese': '日本語',
  },
  ko: {
    'app.title': '16가지 사랑 유형',
    'app.subtitle': '당신만의 독특한 사랑 성격을 발견하세요',
    'home.title': '16가지 사랑 유형',
    'home.what_is': '16가지 사랑 유형이란?',
    'home.description': '사랑하는 방식을 정의하는 4가지 핵심 차원을 통해 관계에 대한 독특한 접근 방식을 발견하세요:',
    'home.start_quiz': '퀴즈 시작',
    'home.final_text': '12개의 신중하게 제작된 질문을 통해 이러한 특성의 조합을 식별하고 16가지 독특한 사랑 유형 중 하나와 일치시킵니다.',

    'dimension.lead_follow': '주도 / 추종',
    'dimension.lead_follow_desc': '당신이 속도를 설정하는지 파트너의 리듬에 맞추는지',
    'dimension.cuddly_accept': '애정표현 / 수용',
    'dimension.cuddly_accept_desc': '애정을 주는 것을 선호하는지 보살핌을 받는 것을 선호하는지',
    'dimension.realistic_passionate': '현실적 / 열정적',
    'dimension.realistic_passionate_desc': '실용적인 사랑을 중시하는지 강렬한 로맨스를 중시하는지',
    'dimension.optimistic_earnest': '낙관적 / 진지한',
    'dimension.optimistic_earnest_desc': '사랑에 대해 자유로운지 깊이 진지한지',

    'quiz.question': '질문',
    'quiz.next': '다음',
    'quiz.view_results': '결과 보기',
    'quiz.calculating': '사랑 유형을 계산하는 중...',

    'result.your_type': '당신의 사랑 유형',
    'result.key_characteristics': '주요 특징',
    'result.strengths': '당신의 강점',
    'result.compatible': '호환 가능',
    'result.back_home': '홈으로 돌아가기',

    'types.title': '16가지 사랑 유형',
    'types.subtitle': '모든 성격 유형 탐색',

    'profile.title': '퀴즈 기록',
    'profile.subtitle': '과거 결과',
    'profile.no_results': '아직 퀴즈 결과가 없습니다',
    'profile.take_quiz': '퀴즈를 풀어 사랑 유형을 확인하세요!',

    'tab.home': '홈',
    'tab.types': '사랑 유형',
    'tab.profile': '프로필',

    'language.english': 'English',
    'language.chinese': '简体中文',
    'language.korean': '한국어',
    'language.japanese': '日本語',
  },
  ja: {
    'app.title': '16の恋愛タイプ',
    'app.subtitle': 'あなただけの恋愛性格を発見',
    'home.title': '16の恋愛タイプ',
    'home.what_is': '16の恋愛タイプとは？',
    'home.description': '愛し方を定義する4つの核心的な次元を通じて、関係への独自のアプローチを発見してください：',
    'home.start_quiz': 'クイズを始める',
    'home.final_text': '12の慎重に作成された質問を通じて、これらの特性の組み合わせを特定し、16の異なる恋愛タイプの1つに一致させます。',

    'dimension.lead_follow': 'リード / フォロー',
    'dimension.lead_follow_desc': 'ペースを設定するか、パートナーのリズムに合わせるか',
    'dimension.cuddly_accept': '甘える / 受け入れる',
    'dimension.cuddly_accept_desc': '愛情を与えることを好むか、ケアを受けることを好むか',
    'dimension.realistic_passionate': '現実的 / 情熱的',
    'dimension.realistic_passionate_desc': '実用的な愛を重視するか、激しいロマンスを重視するか',
    'dimension.optimistic_earnest': '楽観的 / 真剣',
    'dimension.optimistic_earnest_desc': '恋愛について屈託がないか、深く真剣か',

    'quiz.question': '質問',
    'quiz.next': '次へ',
    'quiz.view_results': '結果を見る',
    'quiz.calculating': 'あなたの恋愛タイプを計算中...',

    'result.your_type': 'あなたの恋愛タイプ',
    'result.key_characteristics': '主な特徴',
    'result.strengths': 'あなたの強み',
    'result.compatible': '相性が良い',
    'result.back_home': 'ホームに戻る',

    'types.title': '16の恋愛タイプ',
    'types.subtitle': 'すべての性格タイプを探索',

    'profile.title': 'クイズ履歴',
    'profile.subtitle': '過去の結果',
    'profile.no_results': 'まだクイズ結果がありません',
    'profile.take_quiz': 'クイズに答えて恋愛タイプを確認しましょう！',

    'tab.home': 'ホーム',
    'tab.types': '恋愛タイプ',
    'tab.profile': 'プロフィール',

    'language.english': 'English',
    'language.chinese': '简体中文',
    'language.korean': '한국어',
    'language.japanese': '日本語',
  },
};

export function t(key: TranslationKey, language: Language): string {
  return translations[language][key] || translations.en[key] || key;
}