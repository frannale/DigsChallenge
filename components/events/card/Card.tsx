import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { borderRadius } from '@/theme/borderRadius';

import type { CardProps } from './Card.types';
import { spaceSizes } from '@/theme/spaceSizes';
import { normalizeVertical } from '@/theme/normalize';
import { palette } from '@/theme/palette';

export default function Card({ children, status }: CardProps) {
  return (
    <ThemedView
      style={[
        styles.container,
        status === 'Completed' && styles.completed,
        status === 'Scheduled' && styles.scheduled,
        status === 'Unscheduled' && styles.tbd,
        status === 'Maintenance' && styles.maintenance,
      ]}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: borderRadius.md,
    marginHorizontal: spaceSizes.space4H,
    marginVertical: spaceSizes.space4V,
    minHeight: normalizeVertical(50),
    paddingHorizontal: spaceSizes.space16H,
    paddingVertical: spaceSizes.space12V,
  },
  completed: {
    backgroundColor: palette.events.completed,
  },
  scheduled: {
    backgroundColor: palette.events.scheduled,
  },
  tbd: {
    backgroundColor: palette.events.unscheduled,
  },
  maintenance: {
    backgroundColor: palette.events.maintenance,
  },
});
