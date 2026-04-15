import type { Subscription } from '@/types/subscription';

export const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    id: 's-netflix',
    name: 'Netflix Premium',
    category: 'Entertainment',
    price: 15.99,
    billingCycle: 'Monthly',
    nextBillingDate: '2026-04-23',
    status: 'Active',
    color: '#E50914',
  },
  {
    id: 's-spotify',
    name: 'Spotify Family',
    category: 'Music',
    price: 12.99,
    billingCycle: 'Monthly',
    nextBillingDate: '2026-04-25',
    status: 'Active',
    color: '#1DB954',
  },
  {
    id: 's-notion',
    name: 'Notion Plus',
    category: 'Productivity',
    price: 10,
    billingCycle: 'Monthly',
    nextBillingDate: '2026-05-02',
    status: 'Active',
    color: '#111111',
  },
  {
    id: 's-icloud',
    name: 'iCloud+ 2TB',
    category: 'Cloud',
    price: 9.99,
    billingCycle: 'Monthly',
    nextBillingDate: '2026-05-04',
    status: 'Paused',
    color: '#0A84FF',
  },
  {
    id: 's-strava',
    name: 'Strava',
    category: 'Fitness',
    price: 79.99,
    billingCycle: 'Yearly',
    nextBillingDate: '2026-09-10',
    status: 'Active',
    color: '#FC4C02',
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Entertainment: '#FFE5E7',
  Productivity: '#EAF1FF',
  Fitness: '#FFF2E1',
  Music: '#E8FFEF',
  Cloud: '#E8F4FF',
};
