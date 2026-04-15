import { useAppState } from '@/state/app-state';
import { Redirect } from 'expo-router';

export default function Index() {
  const { isBootstrapping, isAuthenticated } = useAppState();

  if (isBootstrapping) {
    return <Redirect href={'/splash' as any} />;
  }

  if (isAuthenticated) {
    return <Redirect href={'/(tabs)' as any} />;
  }

  return <Redirect href={'/login' as any} />;
}
