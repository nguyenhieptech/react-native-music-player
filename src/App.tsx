import { Text, View } from 'react-native';
import { AppProvider } from './providers';

export default function App() {
  return (
    <AppProvider>
      <View className="flex-1 items-center justify-center">
        <Text className="font-primary-600">React Native Misium</Text>
      </View>
    </AppProvider>
  );
}
