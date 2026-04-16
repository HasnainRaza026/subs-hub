import { MOCK_SUBSCRIPTIONS } from '@/data/mock-subscriptions';
import {
  formatCurrency,
  getMonthlySpend,
  getUpcomingRenewalCount,
  getYearlyProjection,
} from '@/data/subscription-metrics';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const monthly = getMonthlySpend();
  const yearly = getYearlyProjection();
  const upcoming = getUpcomingRenewalCount();
  const activeCount = MOCK_SUBSCRIPTIONS.filter(
    (item) => item.status === 'Active',
  ).length;

  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='gap-5 p-5'
      contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
    >
      <View className='gap-2.5'>
        <Text selectable className='font-bold tracking-[1.2px] text-[#BBD0EA]'>
          SNAPSHOT
        </Text>
        <Text selectable className='text-[28px] font-extrabold text-[#F6FAFF]'>
          Your subscription overview
        </Text>
      </View>

      <View className='gap-3.5'>
        <View className='gap-2.5 rounded-[22px] bg-[#113256] p-5'>
          <Text selectable className='font-semibold text-[#BBD0EA]'>
            Active Monthly Spend
          </Text>
          <Text
            selectable
            className='tabular-nums text-[30px] font-black text-[#D7F4FF]'
          >
            {formatCurrency(monthly)}
          </Text>
        </View>

        <View className='flex-row gap-3.5'>
          <View className='flex-1 gap-1.5 rounded-2xl bg-[#1A2E4D] p-3.5'>
            <Text selectable className='text-[#BBD0EA]'>
              Active Services
            </Text>
            <Text selectable className='text-2xl font-extrabold text-[#F6FAFF]'>
              {activeCount}
            </Text>
          </View>

          <View className='flex-1 gap-1.5 rounded-2xl bg-[#1A2E4D] p-3.5'>
            <Text selectable className='text-[#BBD0EA]'>
              Renewals Soon
            </Text>
            <Text selectable className='text-2xl font-extrabold text-[#F6FAFF]'>
              {upcoming}
            </Text>
          </View>
        </View>
      </View>

      <View className='gap-1.5 rounded-2xl bg-[#12253F] p-3.5'>
        <Text selectable className='text-[#BBD0EA]'>
          Yearly Projection
        </Text>
        <Text selectable className='text-[22px] font-extrabold text-[#F6FAFF]'>
          {formatCurrency(yearly)}
        </Text>
        <Text selectable className='text-[#84A3C6]'>
          Based on current active plans and billing cycles.
        </Text>
      </View>
    </ScrollView>
  );
}
