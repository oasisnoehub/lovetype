import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, X } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import { LoveTypeDescription } from '@/types/love-type';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function TypesScreen() {
  const { language } = useLanguage();
  const [types, setTypes] = useState<LoveTypeDescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<LoveTypeDescription | null>(null);

  useEffect(() => {
    loadTypes();
  }, []);

  const loadTypes = async () => {
    try {
      const { data, error } = await supabase
        .from('love_type_descriptions')
        .select('*')
        .order('code');

      if (error) throw error;
      if (data) setTypes(data);
    } catch (error) {
      console.error('Error loading types:', error);
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
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#FFE5EC', '#FFF0F5', '#FFFFFF']}
      style={styles.container}>
      <View style={styles.header}>
        <Heart size={32} color="#FF6B9D" />
        <Text style={styles.title}>{t('types.title', language)}</Text>
        <Text style={styles.subtitle}>{t('types.subtitle', language)}</Text>
      </View>

      <FlatList
        data={types}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.typeCard}
            onPress={() => setSelectedType(item)}>
            <Text style={styles.typeCode}>{item.code}</Text>
            <Text style={styles.typeName} numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={selectedType !== null}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSelectedType(null)}>
        {selectedType && (
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View />
              <Text style={styles.modalTitle}>{selectedType.name}</Text>
              <TouchableOpacity
                onPress={() => setSelectedType(null)}
                style={styles.closeButton}>
                <X size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={[selectedType]}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.modalContent}
              renderItem={({ item }) => (
                <>
                  <View style={styles.modalCodeContainer}>
                    <Text style={styles.modalCode}>{item.code}</Text>
                  </View>

                  <View style={styles.modalCard}>
                    <Text style={styles.modalDescription}>{item.description}</Text>
                  </View>

                  {item.characteristics && item.characteristics.length > 0 && (
                    <View style={styles.modalCard}>
                      <Text style={styles.modalSectionTitle}>{t('result.key_characteristics', language)}</Text>
                      {item.characteristics.map((char, index) => (
                        <View key={index} style={styles.modalListItem}>
                          <View style={styles.bullet} />
                          <Text style={styles.modalListText}>{char}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {item.strengths && item.strengths.length > 0 && (
                    <View style={styles.modalCard}>
                      <Text style={styles.modalSectionTitle}>{t('result.strengths', language)}</Text>
                      {item.strengths.map((strength, index) => (
                        <View key={index} style={styles.modalListItem}>
                          <View style={styles.bullet} />
                          <Text style={styles.modalListText}>{strength}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {item.compatibility && item.compatibility.length > 0 && (
                    <View style={styles.modalCard}>
                      <Text style={styles.modalSectionTitle}>{t('result.compatible', language)}</Text>
                      <View style={styles.compatibilityContainer}>
                        {item.compatibility.map((code, index) => (
                          <View key={index} style={styles.compatibilityTag}>
                            <Text style={styles.compatibilityText}>{code}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </>
              )}
            />
          </View>
        )}
      </Modal>
    </LinearGradient>
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
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  typeCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 8,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  typeCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B9D',
    letterSpacing: 1,
    marginBottom: 8,
  },
  typeName: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 24,
  },
  modalCodeContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFF5F8',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FF6B9D',
  },
  modalCode: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B9D',
    letterSpacing: 2,
  },
  modalCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  modalListItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B9D',
    marginTop: 8,
    marginRight: 12,
  },
  modalListText: {
    flex: 1,
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  compatibilityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  compatibilityTag: {
    backgroundColor: '#FFF5F8',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6B9D',
  },
  compatibilityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B9D',
  },
});