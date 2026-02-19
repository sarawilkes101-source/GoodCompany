import { Colors } from '../constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeColorKey = keyof typeof Colors;

export function useThemeColor(lightKey: ThemeColorKey, darkKey?: ThemeColorKey): string {
  const scheme = useColorScheme();
  if (scheme === 'dark' && darkKey) {
    return Colors[darkKey];
  }
  return Colors[lightKey];
}
