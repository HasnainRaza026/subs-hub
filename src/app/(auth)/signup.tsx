import { useAppState } from '@/state/app-state';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function SignUpScreen() {
  const { signUp } = useAppState();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const result = signUp({ fullName, email, password });

    if (!result.ok) {
      setError(result.message ?? 'Sign up failed.');
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
          Start managing smarter
        </Text>
        <Text selectable className='text-[30px] font-extrabold text-[#F6FAFF]'>
          Create your account
        </Text>
      </View>

      <View className='gap-3.5 rounded-[22px] bg-[#12253F] p-5'>
        <View className='gap-1.5'>
          <Text selectable className='font-semibold text-[#BBD0EA]'>
            Full Name
          </Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder='Jane Doe'
            placeholderTextColor='#6D86A8'
            className='rounded-2xl border border-[#28476B] bg-[#0F1F35] px-3.5 py-2.5 text-[#F6FAFF]'
          />
        </View>

        <View className='gap-1.5'>
          <Text selectable className='font-semibold text-[#BBD0EA]'>
            Email
          </Text>
          <TextInput
            autoCapitalize='none'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            placeholder='jane@example.com'
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
            placeholder='Create password'
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
            Create Account
          </Text>
        </Pressable>
      </View>

      <Text selectable className='text-center text-[#BBD0EA]'>
        Already have an account?{' '}
        <Link href={'/login' as any}>
          <Text selectable className='font-bold text-sky-400'>
            Login
          </Text>
        </Link>
      </Text>
    </ScrollView>
  );
}
