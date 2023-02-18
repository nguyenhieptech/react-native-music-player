import { Text, View } from 'react-native';
import { useI18n } from 'src/i18n';
import { AppProvider } from './providers';

export default function App() {
  const { t } = useI18n();

  return (
    <AppProvider>
      <View className="flex-1 items-center justify-center">
        <Text className="font-primary-600">{t('welcome_description')}</Text>
      </View>
    </AppProvider>
  );
}
