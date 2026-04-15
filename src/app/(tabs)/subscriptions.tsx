import { MOCK_SUBSCRIPTIONS } from '@/data/mock-subscriptions';
import { ScrollView, Text, View } from 'react-native';

function StatusPill({ status }: { status: 'Active' | 'Paused' | 'Canceled' }) {
  const statusContainerClass =
    status === 'Active'
      ? 'bg-emerald-500/15'
      : status === 'Paused'
        ? 'bg-amber-500/15'
        : 'bg-rose-500/15';
  const statusTextClass =
    status === 'Active'
      ? 'text-emerald-400'
      : status === 'Paused'
        ? 'text-amber-400'
        : 'text-rose-400';

  return (
    <View
      className={`self-start rounded-full px-3 py-[5px] ${statusContainerClass}`}
    >
      <Text selectable className={`text-xs font-bold ${statusTextClass}`}>
        {status}
      </Text>
    </View>
  );
}

export default function MySubscriptionScreen() {
  return (
    <ScrollView
      className='flex-1 bg-[#0E1A2B]'
      contentInsetAdjustmentBehavior='automatic'
      contentContainerClassName='gap-3.5 p-5'
    >
      <View className='gap-1.5'>
        <Text selectable className='font-bold tracking-[1.2px] text-[#BBD0EA]'>
          MANAGE
        </Text>
        <Text selectable className='text-[27px] font-extrabold text-[#F6FAFF]'>
          My Subscriptions
        </Text>
      </View>

      {MOCK_SUBSCRIPTIONS.length === 0 ? (
        <View className='gap-1.5 rounded-2xl bg-[#12253F] p-5'>
          <Text selectable className='font-bold text-[#F6FAFF]'>
            No subscriptions yet
          </Text>
          <Text selectable className='text-[#BBD0EA]'>
            Connect a provider later when backend is ready.
          </Text>
        </View>
      ) : (
        MOCK_SUBSCRIPTIONS.map((item) => (
          <View
            key={item.id}
            className='gap-2.5 rounded-2xl border border-[#243F62] bg-[#12253F] p-3.5'
          >
            <View className='flex-row items-center justify-between'>
              <View className='flex-1 gap-0.5 pr-2.5'>
                <Text
                  selectable
                  className='text-lg font-extrabold text-[#F6FAFF]'
                >
                  {item.name}
                </Text>
                <Text selectable className='text-[#BBD0EA]'>
                  {item.category}
                </Text>
              </View>

              <View className='items-end gap-0.5'>
                <Text
                  selectable
                  className='tabular-nums font-extrabold text-[#D7F4FF]'
                >
                  ${item.price.toFixed(2)}
                </Text>
                <Text selectable className='text-xs text-[#BBD0EA]'>
                  {item.billingCycle}
                </Text>
              </View>
            </View>

            <StatusPill status={item.status} />

            <Text selectable className='text-[#9FB8D6]'>
              Next billing: {item.nextBillingDate}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
