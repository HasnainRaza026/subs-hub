import {
  formatCurrency,
  getCategoryBreakdown,
  getMonthlySpend,
  getYearlyProjection,
} from '@/data/subscription-metrics';
import { ScrollView, Text, View } from 'react-native';

export default function StatsScreen() {
  const monthly = getMonthlySpend();
  const yearly = getYearlyProjection();
  const breakdown = getCategoryBreakdown();

  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='gap-3.5 p-5'
    >
      <View className='gap-1.5'>
        <Text selectable className='font-bold tracking-[1.2px] text-[#BBD0EA]'>
          INSIGHTS
        </Text>
        <Text selectable className='text-[27px] font-extrabold text-[#F6FAFF]'>
          Spending Stats
        </Text>
      </View>

      <View className='flex-row gap-3.5'>
        <View className='flex-1 gap-1.5 rounded-2xl bg-[#113256] p-3.5'>
          <Text selectable className='text-xs text-[#BBD0EA]'>
            Monthly
          </Text>
          <Text
            selectable
            className='tabular-nums text-[22px] font-extrabold text-[#D7F4FF]'
          >
            {formatCurrency(monthly)}
          </Text>
        </View>

        <View className='flex-1 gap-1.5 rounded-2xl bg-[#1A2E4D] p-3.5'>
          <Text selectable className='text-xs text-[#BBD0EA]'>
            Yearly
          </Text>
          <Text
            selectable
            className='tabular-nums text-[22px] font-extrabold text-[#F6FAFF]'
          >
            {formatCurrency(yearly)}
          </Text>
        </View>
      </View>

      <View className='gap-2.5 rounded-2xl bg-[#12253F] p-3.5'>
        <Text selectable className='text-lg font-bold text-[#F6FAFF]'>
          Category Breakdown
        </Text>

        {breakdown.map((entry) => {
          const percentage = monthly
            ? Math.round((entry.value / monthly) * 100)
            : 0;

          return (
            <View key={entry.category} className='gap-1.5'>
              <View className='flex-row justify-between'>
                <Text selectable className='text-[#BBD0EA]'>
                  {entry.category}
                </Text>
                <Text
                  selectable
                  className='tabular-nums font-bold text-[#F6FAFF]'
                >
                  {formatCurrency(entry.value)} ({percentage}%)
                </Text>
              </View>
              <View className='h-2 rounded-full bg-[#274569]'>
                <View
                  className='h-full min-w-5 rounded-full bg-sky-400'
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
