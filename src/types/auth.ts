export type AuthCredentials = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  fullName: string;
  email: string;
  password: string;
};

export type UserProfile = {
  id: string;
  fullName: string;
  email: string;
  avatarLabel: string;
  plan: 'Free' | 'Pro';
};
