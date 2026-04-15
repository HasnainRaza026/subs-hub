export type BillingCycle = 'Monthly' | 'Yearly';

export type SubscriptionStatus = 'Active' | 'Paused' | 'Canceled';

export type SubscriptionCategory =
  | 'Entertainment'
  | 'Productivity'
  | 'Fitness'
  | 'Music'
  | 'Cloud';

export type Subscription = {
  id: string;
  name: string;
  category: SubscriptionCategory;
  price: number;
  billingCycle: BillingCycle;
  nextBillingDate: string;
  status: SubscriptionStatus;
  color: string;
};
