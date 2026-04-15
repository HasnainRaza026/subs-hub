import { DEMO_CREDENTIALS } from '@/data/mock-user';
import { useAppState } from '@/state/app-state';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { currentUser, signOut } = useAppState();

  const handleSignOut = () => {
    signOut();
    router.replace('/login' as any);
  };

  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='gap-3.5 p-5'
    >
      <View className='gap-1.5'>
        <Text selectable className='font-bold tracking-[1.2px] text-[#BBD0EA]'>
          ACCOUNT
        </Text>
        <Text selectable className='text-[27px] font-extrabold text-[#F6FAFF]'>
          Profile
        </Text>
      </View>

      <View className='gap-3.5 rounded-[22px] bg-[#12253F] p-5'>
        <View className='size-16 items-center justify-center rounded-full bg-[#1A3A62]'>
          <Text
            selectable
            className='text-[20px] font-extrabold text-[#F6FAFF]'
          >
            {currentUser?.avatarLabel ?? 'DU'}
          </Text>
        </View>

        <View className='gap-1.5'>
          <Text
            selectable
            className='text-[22px] font-extrabold text-[#F6FAFF]'
          >
            {currentUser?.fullName ?? 'Demo User'}
          </Text>
          <Text selectable className='text-[#BBD0EA]'>
            {currentUser?.email ?? DEMO_CREDENTIALS.email}
          </Text>
          <Text selectable className='text-[#9CD5FF]'>
            Plan: {currentUser?.plan ?? 'Pro'}
          </Text>
        </View>
      </View>

      <View className='gap-1.5 rounded-2xl bg-[#12253F] p-3.5'>
        <Text selectable className='font-bold text-[#F6FAFF]'>
          About this build
        </Text>
        <Text selectable className='leading-[21px] text-[#BBD0EA]'>
          This is a static prototype. Auth, subscriptions, and analytics
          currently use local mock data.
        </Text>
      </View>

      <Pressable
        onPress={handleSignOut}
        className='items-center rounded-2xl bg-red-900 py-3.5'
      >
        <Text selectable className='font-extrabold text-rose-100'>
          Sign Out
        </Text>
      </Pressable>
    </ScrollView>
  );
}
