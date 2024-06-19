import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import type { LoaderProps } from './Loader.types';

export const Loader = ({ size = 48 }: LoaderProps) => {
  const color = useThemeColor({}, 'text');
  return <ActivityIndicator animating size={size} color={color} />;
};
