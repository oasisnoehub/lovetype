import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, CircleCheck as CheckCircle, Users, Sparkles } from 'lucide-react-native';
import { calculateLoveType } from '@/lib/quiz-calculator';
import { supabase } from '@/lib/supabase';
import { LoveTypeDescription } from '@/types/love-type';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function ResultScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const params = useLocalSearchParams();
  const [loveType, setLoveType] = useState<LoveTypeDescription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResult();
  }, []);

  const loadResult = async () => {
    try {
      const answersParam = params.answers as string;
      const answers = JSON.parse(answersParam);
      const result = calculateLoveType(answers);

      const { data, error } = await supabase
        .from('love_type_descriptions')
        .select('*')
        .eq('code', result.love_type_code)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setLoveType(data);

        await supabase.from('quiz_results').insert({
          lead_follow: result.lead_follow,
          cuddly_accept: result.cuddly_accept,
          realistic_passionate: result.realistic_passionate,
          optimistic_earnest: result.optimistic_earnest,
          love_type_code: result.love_type_code,
        });
      }
    } catch (error) {
      console.error('Error loading result:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LinearGradient
        colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
        style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B9D" />
          <Text style={styles.loadingText}>{t('quiz.calculating', language)}</Text>
        </View>
      </LinearGradient>
    );
  }

  if (!loveType) {
    return (
      <LinearGradient
        colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
        style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Unable to load results</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => router.replace('/')}>
            <Text style={styles.retryText}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Heart size={64} color="#FF6B9D" />
          <Text style={styles.yourType}>{t('result.your_type', language)}</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.code}>{loveType.code}</Text>
          </View>
          <Text style={styles.typeName}>{loveType.name}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>{loveType.description}</Text>
        </View>

        {loveType.characteristics && loveType.characteristics.length > 0 && (
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Sparkles size={24} color="#FF6B9D" />
              <Text style={styles.sectionTitle}>{t('result.key_characteristics', language)}</Text>
            </View>
            {loveType.characteristics.map((char, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{char}</Text>
              </View>
            ))}
          </View>
        )}

        {loveType.strengths && loveType.strengths.length > 0 && (
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <CheckCircle size={24} color="#FF6B9D" />
              <Text style={styles.sectionTitle}>{t('result.strengths', language)}</Text>
            </View>
            {loveType.strengths.map((strength, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{strength}</Text>
              </View>
            ))}
          </View>
        )}

        {loveType.compatibility && loveType.compatibility.length > 0 && (
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Users size={24} color="#FF6B9D" />
              <Text style={styles.sectionTitle}>{t('result.compatible', language)}</Text>
            </View>
            <View style={styles.compatibilityContainer}>
              {loveType.compatibility.map((code, index) => (
                <View key={index} style={styles.compatibilityTag}>
                  <Text style={styles.compatibilityText}>{code}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.replace('/')}>
          <LinearGradient
            colors={['#FF6B9D', '#FF8FAB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.homeButtonGradient}>
            <Text style={styles.homeButtonText}>{t('result.back_home', language)}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 60,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  retryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#FF6B9D',
    borderRadius: 12,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  yourType: {
    fontSize: 18,
    color: '#999',
    marginTop: 16,
  },
  codeContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  code: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6B9D',
    letterSpacing: 2,
  },
  typeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B9D',
    marginTop: 8,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  compatibilityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  compatibilityTag: {
    backgroundColor: '#FFF5F8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF6B9D',
  },
  compatibilityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B9D',
  },
  homeButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  homeButtonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});