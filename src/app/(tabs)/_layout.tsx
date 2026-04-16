import { useAppState } from '@/state/app-state';
import { palette } from '@/theme/tokens';
import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabIcon({ glyph }: { glyph: string }) {
  return <Text className='text-sm'>{glyph}</Text>;
}

export default function TabsLayout() {
  const { isAuthenticated, isBootstrapping } = useAppState();
  const insets = useSafeAreaInsets();

  if (isBootstrapping) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect href={'/login' as any} />;
  }

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: palette.background,
          paddingBottom: insets.bottom,
        },
        tabBarStyle: {
          backgroundColor: '#102037',
          borderTopColor: '#1A3456',
          height: 60 + insets.bottom,
          paddingBottom: Math.max(insets.bottom, 10),
          paddingTop: 8,
        },
        tabBarActiveTintColor: palette.accent,
        tabBarInactiveTintColor: '#84A3C6',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: () => <TabIcon glyph='H' />,
        }}
      />
      <Tabs.Screen
        name='subscriptions'
        options={{
          title: 'My Subscription',
          tabBarIcon: () => <TabIcon glyph='S' />,
        }}
      />
      <Tabs.Screen
        name='stats'
        options={{
          title: 'Stats',
          tabBarIcon: () => <TabIcon glyph='T' />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: () => <TabIcon glyph='P' />,
        }}
      />
    </Tabs>
  );
}
