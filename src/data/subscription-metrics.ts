import { MOCK_SUBSCRIPTIONS } from '@/data/mock-subscriptions';

const monthFromYearly = (value: number) => value / 12;

export const formatCurrency = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

export const getMonthlySpend = (): number => {
  return MOCK_SUBSCRIPTIONS.filter((item) => item.status === 'Active').reduce(
    (sum, item) => {
      return (
        sum +
        (item.billingCycle === 'Monthly'
          ? item.price
          : monthFromYearly(item.price))
      );
    },
    0,
  );
};

export const getYearlyProjection = (): number => {
  return getMonthlySpend() * 12;
};

export const getUpcomingRenewalCount = (): number => {
  const currentDate = new Date('2026-04-16');
  const windowLimit = new Date('2026-05-16');

  return MOCK_SUBSCRIPTIONS.filter((item) => {
    if (item.status !== 'Active') {
      return false;
    }

    const renewalDate = new Date(item.nextBillingDate);
    return renewalDate >= currentDate && renewalDate <= windowLimit;
  }).length;
};

export const getCategoryBreakdown = (): {
  category: string;
  value: number;
}[] => {
  const categorySpend = new Map<string, number>();

  for (const item of MOCK_SUBSCRIPTIONS) {
    if (item.status !== 'Active') {
      continue;
    }

    const normalized =
      item.billingCycle === 'Monthly'
        ? item.price
        : monthFromYearly(item.price);
    categorySpend.set(
      item.category,
      (categorySpend.get(item.category) ?? 0) + normalized,
    );
  }

  return Array.from(categorySpend.entries())
    .map(([category, value]) => ({ category, value }))
    .sort((a, b) => b.value - a.value);
};
