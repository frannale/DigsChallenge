import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { borderRadius } from '@/theme/borderRadius';

import type { EventProps } from './Event.types';
import Card from '@/components/events/card/Card';
import { ThemedView } from '@/components/ThemedView';
import { format, getDay } from 'date-fns';
import { CheckCircleIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { ClockIcon } from 'react-native-heroicons/outline';

import { normalizeFont, normalizeHorizontal } from '@/theme/normalize';
import { spaceSizes } from '@/theme/spaceSizes';
import { palette } from '@/theme/palette';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useTranslationByNamespace } from '@/hooks/useTranslationByNameSpace';

export default function Event({ event, customer }: EventProps) {
  const { t } = useTranslationByNamespace('calendar.event.status.');
  const color = useThemeColor({ light: palette.text.dark }, 'text');
  const backgroundedColor = useThemeColor(
    { light: palette.text.light },
    'text',
  );
  const {
    scheduledDate,
    name,
    vendor,
    status,
    arrivalStartWindow,
    arrivalEndWindow,
  } = event;

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.status}>
        {scheduledDate ? (
          <ThemedView style={styles.date}>
            <ThemedText type="defaultSemiBold" lightColor={palette.text.gray}>
              {format(scheduledDate, 'EEE')}
            </ThemedText>
            <ThemedText lightColor={color} type="title" style={styles.dateText}>
              {getDay(scheduledDate)}
            </ThemedText>
            {event.status === 'Completed' && (
              <CheckCircleIcon color={palette.events.completed} />
            )}
            {event.status === 'Scheduled' && (
              <ClockIcon color={palette.events.scheduled} />
            )}
          </ThemedView>
        ) : (
          <ThemedText type="defaultSemiBold" lightColor={palette.text.gray}>
            TBD
          </ThemedText>
        )}
      </ThemedView>
      <Card status={status}>
        <ThemedText type="subtitle" lightColor={backgroundedColor}>
          {name}
        </ThemedText>
        {vendor?.vendorName && (
          <ThemedText lightColor={backgroundedColor}>
            {vendor?.vendorName}
          </ThemedText>
        )}
        {vendor?.phoneNumber && (
          <ThemedText type="defaultSemiBold" lightColor={backgroundedColor}>
            {vendor?.phoneNumber}
          </ThemedText>
        )}
        <View style={styles.address}>
          <MapPinIcon color="white" size={normalizeFont(16)} />
          <ThemedText lightColor={backgroundedColor}>
            {customer?.street}
          </ThemedText>
        </View>
        <View style={styles.statusDetail}>
          <ThemedText lightColor={backgroundedColor}>{t(status)} </ThemedText>
          {arrivalStartWindow && (
            <ThemedText lightColor={backgroundedColor}>
              {arrivalStartWindow}
            </ThemedText>
          )}
          {arrivalEndWindow && (
            <ThemedText lightColor={backgroundedColor}>
              {' '}
              - {arrivalEndWindow}
            </ThemedText>
          )}
        </View>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: borderRadius.md,
  },
  status: {
    alignItems: 'center',
    width: normalizeHorizontal(40),
  },
  date: {
    alignItems: 'center',
  },
  dateText: {
    marginVertical: spaceSizes.space8V,
  },
  address: {
    flexDirection: 'row',
    marginTop: spaceSizes.space4V,
    alignItems: 'center',
  },
  statusDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
