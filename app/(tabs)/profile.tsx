import { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Clock, Heart } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import { QuizResult } from '@/types/love-type';

export default function ProfileScreen() {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadResults();
    }, [])
  );

  const loadResults = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      if (data) setResults(data);
    } catch (error) {
      console.error('Error loading results:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <LinearGradient
        colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
        style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B9D" />
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <View style={styles.header}>
        <User size={32} color="#FF6B9D" />
        <Text style={styles.title}>Quiz History</Text>
        <Text style={styles.subtitle}>Your past results</Text>
      </View>

      {results.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Heart size={48} color="#ccc" />
          <Text style={styles.emptyText}>No quiz results yet</Text>
          <Text style={styles.emptySubtext}>Take the quiz to see your love type!</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.resultCard}>
              <View style={styles.resultHeader}>
                <View style={styles.codeContainer}>
                  <Text style={styles.code}>{item.love_type_code}</Text>
                </View>
                <View style={styles.dateContainer}>
                  <Clock size={14} color="#999" />
                  <Text style={styles.date}>{formatDate(item.created_at)}</Text>
                </View>
              </View>

              <View style={styles.traitsContainer}>
                <TraitPill label={item.lead_follow} />
                <TraitPill label={item.cuddly_accept} />
                <TraitPill label={item.realistic_passionate} />
                <TraitPill label={item.optimistic_earnest} />
              </View>
            </View>
          )}
        />
      )}
    </LinearGradient>
  );
}

function TraitPill({ label }: { label: string }) {
  return (
    <View style={styles.traitPill}>
      <Text style={styles.traitText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B9D',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#999',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 8,
    textAlign: 'center',
  },
  listContent: {
    padding: 24,
    paddingBottom: 100,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  codeContainer: {
    backgroundColor: '#FFF5F8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6B9D',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B9D',
    letterSpacing: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  traitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  traitPill: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  traitText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
});