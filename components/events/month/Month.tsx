import { FlashList } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTranslationByNamespace } from '@/hooks/useTranslationByNameSpace';

import Event from '../event/Event';
import type { MonthProps } from './Month.types';
import { spaceSizes } from '@/theme/spaceSizes';
import Maintenance from '../maintenance/Maintenance';

export default function Month({ month, customer }: MonthProps) {
  const { t } = useTranslationByNamespace('common.months.');

  return (
    <ThemedView>
      <ThemedText type="subtitle" style={styles.title}>
        {t(month.month.toString()) + ' ' + month.year}
      </ThemedText>
      <FlashList
        data={month.actions}
        renderItem={({ item }) => <Event event={item} customer={customer} />}
        estimatedItemSize={100}
        ListEmptyComponent={<Maintenance />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: spaceSizes.space12V,
  },
});
