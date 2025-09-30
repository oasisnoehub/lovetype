import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Sparkles } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Heart size={48} color="#FF6B9D" />
          <Text style={styles.title}>16 Love Type</Text>
          <Text style={styles.subtitle}>Discover Your Unique Love Personality</Text>
        </View>

        <View style={styles.card}>
          <Sparkles size={32} color="#FF6B9D" />
          <Text style={styles.cardTitle}>What is 16 Love Type?</Text>
          <Text style={styles.cardText}>
            Discover your unique approach to relationships through 4 core dimensions that define how you love:
          </Text>

          <View style={styles.dimensionList}>
            <DimensionItem
              title="Lead / Follow"
              description="Whether you set the pace or match your partner's rhythm"
            />
            <DimensionItem
              title="Cuddly / Accept"
              description="Whether you prefer giving affection or receiving care"
            />
            <DimensionItem
              title="Realistic / Passionate"
              description="Whether you value practical love or intense romance"
            />
            <DimensionItem
              title="Optimistic / Earnest"
              description="Whether you're carefree or deeply serious about love"
            />
          </View>

          <Text style={styles.cardText}>
            Through 12 carefully crafted questions, we'll identify your combination of these traits and match you to one of 16 distinct love types.
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
            <Text style={styles.buttonText}>Start Quiz</Text>
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