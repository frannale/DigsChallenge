import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * Based on iPhone 11 scale
 */
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for width  pixel
export const normalizeHorizontal = (size: number) => {
  return normalize(size, 'width');
};
// for height  pixel
export const normalizeVertical = (size: number) => {
  return normalize(size, 'height');
};
// for font  pixel
export const normalizeFont = (size: number) => {
  return normalizeVertical(size) + (Platform.OS === 'android' ? 2 : 0);
};
