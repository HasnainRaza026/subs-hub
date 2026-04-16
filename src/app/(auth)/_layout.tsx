import { useAppState } from '@/state/app-state';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
  const { isAuthenticated, isBootstrapping } = useAppState();

  if (isBootstrapping) {
    return null;
  }

  if (isAuthenticated) {
    return <Redirect href={'/(tabs)' as any} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' options={{ title: 'Login' }} />
      <Stack.Screen name='signup' options={{ title: 'Sign Up' }} />
    </Stack>
  );
}
