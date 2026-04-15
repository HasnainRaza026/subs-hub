import type { AuthCredentials, UserProfile } from '@/types/auth';

export const DEMO_CREDENTIALS: AuthCredentials = {
  email: 'demo@subshub.app',
  password: 'pass1234',
};

export const DEMO_USER: UserProfile = {
  id: 'u-001',
  fullName: 'Demo User',
  email: DEMO_CREDENTIALS.email,
  avatarLabel: 'DU',
  plan: 'Pro',
};
