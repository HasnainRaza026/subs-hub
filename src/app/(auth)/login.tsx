import { useAppState } from '@/state/app-state';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const { signIn } = useAppState();
  const [email, setEmail] = useState('demo@subshub.app');
  const [password, setPassword] = useState('pass1234');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const result = signIn({ email, password });

    if (!result.ok) {
      setError(result.message ?? 'Login failed.');
      return;
    }

    setError(null);
    router.replace('/(tabs)' as any);
  };

  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='flex-grow justify-center gap-5 p-7'
    >
      <View className='gap-2.5'>
        <Text selectable className='text-[13px] font-bold text-sky-400'>
          Welcome back
        </Text>
        <Text selectable className='text-[30px] font-extrabold text-[#F6FAFF]'>
          Login to Subs Hub
        </Text>
        <Text selectable className='leading-5 text-[#BBD0EA]'>
          Use demo@subshub.app with password pass1234 to continue.
        </Text>
      </View>

      <View className='gap-3.5 rounded-[22px] bg-[#12253F] p-5'>
        <View className='gap-1.5'>
          <Text selectable className='font-semibold text-[#BBD0EA]'>
            Email
          </Text>
          <TextInput
            autoCapitalize='none'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            placeholder='demo@subshub.app'
            placeholderTextColor='#6D86A8'
            className='rounded-2xl border border-[#28476B] bg-[#0F1F35] px-3.5 py-2.5 text-[#F6FAFF]'
          />
        </View>

        <View className='gap-1.5'>
          <Text selectable className='font-semibold text-[#BBD0EA]'>
            Password
          </Text>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder='pass1234'
            placeholderTextColor='#6D86A8'
            className='rounded-2xl border border-[#28476B] bg-[#0F1F35] px-3.5 py-2.5 text-[#F6FAFF]'
          />
        </View>

        {error ? (
          <Text selectable className='font-semibold text-rose-300'>
            {error}
          </Text>
        ) : null}

        <Pressable
          onPress={handleSubmit}
          className='items-center rounded-2xl bg-sky-500 py-3.5'
        >
          <Text selectable className='font-extrabold text-[#062033]'>
            Login
          </Text>
        </Pressable>
      </View>

      <Text selectable className='text-center text-[#BBD0EA]'>
        New here?{' '}
        <Link href={'/signup' as any}>
          <Text selectable className='font-bold text-sky-400'>
            Create account
          </Text>
        </Link>
      </Text>
    </ScrollView>
  );
}
