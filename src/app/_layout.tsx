import { AppStateProvider } from '@/state/app-state';
import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
  return (
    <AppStateProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='splash' />
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
      </Stack>
    </AppStateProvider>
  );
}
