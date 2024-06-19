import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';

import { Loader } from '../../loader/Loader/Loader.component';
import type { ScreenLayoutProps } from './ScreenLayout.types';

export const ScreenLayout = ({
  children,
  isLoading,
  safeAreaBottom,
  safeAreaTop,
  style,
}: ScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  const shouldShowContent = !isLoading;

  return (
    <ThemedView
      style={[
        styles.container,
        safeAreaTop && { paddingTop: insets.top },
        safeAreaBottom && { paddingBottom: insets.bottom },
        style,
      ]}>
      {isLoading && (
        <ThemedView>
          <Loader size={48} />
        </ThemedView>
      )}
      {shouldShowContent && children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
