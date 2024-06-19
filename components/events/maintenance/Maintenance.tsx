import { ThemedText } from '@/components/ThemedText';
import { useTranslationByNamespace } from '@/hooks/useTranslationByNameSpace';
import Card from '../card/Card';
import { palette } from '@/theme/palette';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
import { normalizeHorizontal } from '@/theme/normalize';

export default function Maintenance() {
  const { t } = useTranslationByNamespace('calendar.');
  const backgroundedColor = useThemeColor(
    { light: palette.text.light, dark: palette.text.dark },
    'text',
  );
  return (
    <ThemedView style={styles.status}>
      <Card status="Maintenance">
        <ThemedText type="subtitle" lightColor={backgroundedColor}>
          {t('maintenance')}{' '}
        </ThemedText>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  status: {
    flex: 1,
    marginLeft: normalizeHorizontal(40),
  },
});
