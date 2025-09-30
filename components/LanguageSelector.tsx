import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { Globe, Check } from 'lucide-react-native';
import { useLanguage, Language } from '@/lib/i18n';
import { t } from '@/lib/translations';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t('language.english', language) },
    { code: 'zh', label: t('language.chinese', language) },
    { code: 'ko', label: t('language.korean', language) },
    { code: 'ja', label: t('language.japanese', language) },
  ];

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Globe size={24} color="#FF6B9D" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Globe size={28} color="#FF6B9D" />
              <Text style={styles.modalTitle}>Select Language</Text>
            </View>

            {languages.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={[
                  styles.languageOption,
                  language === lang.code && styles.languageOptionSelected,
                ]}
                onPress={() => handleSelectLanguage(lang.code)}>
                <Text
                  style={[
                    styles.languageText,
                    language === lang.code && styles.languageTextSelected,
                  ]}>
                  {lang.label}
                </Text>
                {language === lang.code && (
                  <Check size={20} color="#FF6B9D" />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
  },
  languageOptionSelected: {
    backgroundColor: '#FFF5F8',
    borderWidth: 2,
    borderColor: '#FF6B9D',
  },
  languageText: {
    fontSize: 18,
    color: '#666',
  },
  languageTextSelected: {
    color: '#FF6B9D',
    fontWeight: '600',
  },
  closeButton: {
    marginTop: 12,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
});