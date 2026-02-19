export const Colors = {
  // Brand palette
  background: '#FAF7F2',
  primary: '#C4724A',
  primaryLight: '#D4896A',
  primaryDark: '#A55A35',
  secondary: '#7A9E7E',
  secondaryLight: '#9AB89E',
  secondaryDark: '#5C7E60',
  accent: '#E8DDD0',
  accentDark: '#D4C4B0',

  // Text
  text: '#2C2C2C',
  textSecondary: '#7A7A7A',
  textTertiary: '#ADADAD',
  textInverse: '#FAF7F2',

  // UI surfaces
  surface: '#FFFFFF',
  surfaceWarm: '#F2EDE6',
  border: '#E8DDD0',
  borderLight: '#F0EBE3',
  divider: '#EDE6DC',

  // Tab bar
  tabActive: '#C4724A',
  tabInactive: '#ADADAD',
  tabBackground: '#FFFFFF',

  // Functional
  error: '#D64A4A',
  success: '#7A9E7E',
  warning: '#D4924A',
} as const;

export type ColorKey = keyof typeof Colors;
