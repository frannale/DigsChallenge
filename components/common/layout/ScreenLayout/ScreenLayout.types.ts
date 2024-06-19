import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ScreenLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
  safeAreaBottom?: boolean;
  safeAreaTop?: boolean;
  style?: StyleProp<ViewStyle>;
}
