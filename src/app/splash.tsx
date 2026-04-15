import { useAppState } from '@/state/app-state';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

export default function SplashScreen() {
  const { isBootstrapping, isAuthenticated } = useAppState();

  useEffect(() => {
    if (!isBootstrapping) {
      router.replace((isAuthenticated ? '/(tabs)' : '/login') as any);
    }
  }, [isAuthenticated, isBootstrapping]);

  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='flex-grow justify-center p-7'
    >
      <View className='gap-5 rounded-[22px] bg-[#12253F] p-7'>
        <Text
          selectable
          className='text-[13px] font-bold uppercase tracking-[2px] text-sky-400'
        >
          Subs Hub
        </Text>

        <Text selectable className='text-[32px] font-extrabold text-[#F6FAFF]'>
          Own every recurring payment.
        </Text>

        <Text selectable className='text-[15px] leading-[22px] text-[#BBD0EA]'>
          Setting up your subscription dashboard with static demo data.
        </Text>

        <View className='flex-row items-center gap-3.5'>
          <ActivityIndicator color='#38BDF8' />
          <Text selectable className='text-[#BBD0EA]'>
            Preparing your workspace...
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
