import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import 'src/i18n';
import { AppProvider } from './providers';

export default function App() {
  const { t } = useTranslation('translation');

  return (
    <AppProvider>
      <View className="flex-1 items-center justify-center">
        <Text className="font-primary-600">{t('welcome_description')}</Text>
      </View>
    </AppProvider>
  );
}
