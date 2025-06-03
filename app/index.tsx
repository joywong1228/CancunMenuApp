import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Cancun App</Text>
      <Button title="Go to Nizuc" onPress={() => router.push('/nizuc')} />
        <Button title="Go to Sunrise" onPress={() => router.push('/sunrise')} />
    </View>
  );
}
