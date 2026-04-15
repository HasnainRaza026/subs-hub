import { DEMO_CREDENTIALS, DEMO_USER } from '@/data/mock-user';
import type { AuthCredentials, SignUpPayload, UserProfile } from '@/types/auth';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type AppStateContextValue = {
  isBootstrapping: boolean;
  isAuthenticated: boolean;
  currentUser: UserProfile | null;
  signIn: (credentials: AuthCredentials) => { ok: boolean; message?: string };
  signUp: (payload: SignUpPayload) => { ok: boolean; message?: string };
  signOut: () => void;
};

const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsBootstrapping(false);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

  const signIn = (
    credentials: AuthCredentials,
  ): { ok: boolean; message?: string } => {
    if (!credentials.email.trim() || !credentials.password.trim()) {
      return { ok: false, message: 'Please provide both email and password.' };
    }

    if (
      credentials.email.toLowerCase() !== DEMO_CREDENTIALS.email ||
      credentials.password !== DEMO_CREDENTIALS.password
    ) {
      return {
        ok: false,
        message: 'Use demo@subshub.app and pass1234 for this static build.',
      };
    }

    setCurrentUser(DEMO_USER);
    return { ok: true };
  };

  const signUp = (
    payload: SignUpPayload,
  ): { ok: boolean; message?: string } => {
    if (
      !payload.fullName.trim() ||
      !payload.email.trim() ||
      !payload.password.trim()
    ) {
      return { ok: false, message: 'All fields are required.' };
    }

    const initials = payload.fullName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');

    setCurrentUser({
      id: `user-${Date.now()}`,
      fullName: payload.fullName,
      email: payload.email,
      avatarLabel: initials || 'SU',
      plan: 'Free',
    });

    return { ok: true };
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const value = useMemo<AppStateContextValue>(
    () => ({
      isBootstrapping,
      isAuthenticated: currentUser !== null,
      currentUser,
      signIn,
      signUp,
      signOut,
    }),
    [currentUser, isBootstrapping],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }

  return context;
}
