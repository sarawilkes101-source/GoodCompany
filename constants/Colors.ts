export const Colors = {
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  secondary: '#EC4899',
  background: '#FFFFFF',
  backgroundDark: '#0F172A',
  surface: '#F8FAFC',
  surfaceDark: '#1E293B',
  text: '#0F172A',
  textDark: '#F8FAFC',
  textSecondary: '#64748B',
  textSecondaryDark: '#94A3B8',
  border: '#E2E8F0',
  borderDark: '#334155',
  error: '#EF4444',
  success: '#22C55E',
  warning: '#F59E0B',
} as const;

export type ColorKey = keyof typeof Colors;
