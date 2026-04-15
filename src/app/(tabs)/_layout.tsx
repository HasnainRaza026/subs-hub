import { useAppState } from '@/state/app-state';
import { palette } from '@/theme/tokens';
import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ glyph }: { glyph: string }) {
  return <Text className='text-sm'>{glyph}</Text>;
}

export default function TabsLayout() {
  const { isAuthenticated, isBootstrapping } = useAppState();

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
        headerStyle: { backgroundColor: palette.background },
        headerTintColor: palette.textPrimary,
        headerTitleStyle: { fontWeight: '700' },
        sceneStyle: { backgroundColor: palette.background },
        tabBarStyle: {
          backgroundColor: '#102037',
          borderTopColor: '#1A3456',
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
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
