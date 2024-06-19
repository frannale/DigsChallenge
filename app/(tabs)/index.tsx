import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import { RefreshControl } from 'react-native-gesture-handler';

import { ScreenLayout } from '@/components/common/layout/ScreenLayout/ScreenLayout.component';
import Month from '@/components/events/month/Month';
import { useTranslationByNamespace } from '@/hooks/useTranslationByNameSpace';
import { useGetEventsQuery } from '@/store/api/events/Events.api';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { spaceSizes } from '@/theme/spaceSizes';

export default function Calendar() {
  const { t } = useTranslationByNamespace('calendar.');
  const { data, isLoading, isFetching, refetch } = useGetEventsQuery({});

  return (
    <>
      <Stack.Screen options={{ title: t('title') }} />
      <ScreenLayout isLoading={isLoading}>
        <ThemedView style={styles.container}>
          <FlashList
            data={data?.calendar}
            renderItem={({ item }) => (
              <Month month={item} customer={data?.customer} />
            )}
            estimatedItemSize={100}
            refreshing={isFetching}
            refreshControl={
              <RefreshControl refreshing={isFetching} onRefresh={refetch} />
            }
          />
        </ThemedView>
      </ScreenLayout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceSizes.space8H,
  },
});
