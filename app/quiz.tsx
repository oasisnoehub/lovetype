import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { quizQuestions } from '@/lib/quiz-data';

export default function QuizScreen() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnswer = answers[question.id] !== undefined;

  const handleAnswer = (value: 'A' | 'B') => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      router.push({
        pathname: '/result',
        params: { answers: JSON.stringify(answers) },
      });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      router.back();
    }
  };

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#FF6B9D" />
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {currentQuestion + 1} / {quizQuestions.length}
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.questionNumber}>Question {currentQuestion + 1}</Text>
        <Text style={styles.questionText}>{question.question}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.optionButton,
                answers[question.id] === option.value && styles.optionButtonSelected,
              ]}
              onPress={() => handleAnswer(option.value)}>
              <View style={styles.optionContent}>
                <View
                  style={[
                    styles.radio,
                    answers[question.id] === option.value && styles.radioSelected,
                  ]}>
                  {answers[question.id] === option.value && (
                    <View style={styles.radioDot} />
                  )}
                </View>
                <Text
                  style={[
                    styles.optionText,
                    answers[question.id] === option.value && styles.optionTextSelected,
                  ]}>
                  {option.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, !hasAnswer && styles.nextButtonDisabled]}
          onPress={handleNext}
          disabled={!hasAnswer}>
          <LinearGradient
            colors={hasAnswer ? ['#FF6B9D', '#FF8FAB'] : ['#ccc', '#ddd']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.nextButtonGradient}>
            <Text style={styles.nextButtonText}>
              {isLastQuestion ? 'View Results' : 'Next'}
            </Text>
            {!isLastQuestion && <ChevronRight size={20} color="#fff" />}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    marginLeft: 12,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF6B9D',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
    textAlign: 'right',
  },
  content: {
    padding: 24,
    paddingTop: 0,
  },
  questionNumber: {
    fontSize: 14,
    color: '#FF6B9D',
    fontWeight: '600',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 32,
    marginBottom: 32,
  },
  optionsContainer: {
    gap: 16,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
  optionButtonSelected: {
    borderColor: '#FF6B9D',
    backgroundColor: '#FFF5F8',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  radioSelected: {
    borderColor: '#FF6B9D',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF6B9D',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  optionTextSelected: {
    color: '#333',
    fontWeight: '600',
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  nextButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonDisabled: {
    shadowOpacity: 0,
    elevation: 0,
  },
  nextButtonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});