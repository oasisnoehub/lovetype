import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Sparkles } from 'lucide-react-native';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { LanguageSelector } from '@/components/LanguageSelector';

export default function HomeScreen() {
  const router = useRouter();
  const { language } = useLanguage();

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.languageSelectorContainer}>
          <LanguageSelector />
        </View>
        <View style={styles.header}>
          <Heart size={48} color="#FF6B9D" />
          <Text style={styles.title}>{t('home.title', language)}</Text>
          <Text style={styles.subtitle}>{t('app.subtitle', language)}</Text>
        </View>

        <View style={styles.card}>
          <Sparkles size={32} color="#FF6B9D" />
          <Text style={styles.cardTitle}>{t('home.what_is', language)}</Text>
          <Text style={styles.cardText}>
            {t('home.description', language)}
          </Text>

          <View style={styles.dimensionList}>
            <DimensionItem
              title={t('dimension.lead_follow', language)}
              description={t('dimension.lead_follow_desc', language)}
            />
            <DimensionItem
              title={t('dimension.cuddly_accept', language)}
              description={t('dimension.cuddly_accept_desc', language)}
            />
            <DimensionItem
              title={t('dimension.realistic_passionate', language)}
              description={t('dimension.realistic_passionate_desc', language)}
            />
            <DimensionItem
              title={t('dimension.optimistic_earnest', language)}
              description={t('dimension.optimistic_earnest_desc', language)}
            />
          </View>

          <Text style={styles.cardText}>
            {t('home.final_text', language)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push('/quiz')}>
          <LinearGradient
            colors={['#FF6B9D', '#FF8FAB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>{t('home.start_quiz', language)}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function DimensionItem({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.dimensionItem}>
      <View style={styles.dimensionDot} />
      <View style={styles.dimensionTextContainer}>
        <Text style={styles.dimensionTitle}>{title}</Text>
        <Text style={styles.dimensionDescription}>{description}</Text>
      </View>
    </View>
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
  languageSelectorContainer: {
    position: 'absolute',
    top: 16,
    right: 24,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6B9D',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  dimensionList: {
    marginVertical: 16,
  },
  dimensionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  dimensionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B9D',
    marginTop: 6,
    marginRight: 12,
  },
  dimensionTextContainer: {
    flex: 1,
  },
  dimensionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  dimensionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});