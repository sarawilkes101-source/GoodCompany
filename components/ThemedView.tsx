import { View, ViewProps, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface ThemedViewProps extends ViewProps {
  variant?: 'default' | 'surface' | 'warm';
}

export function ThemedView({ variant = 'default', style, ...props }: ThemedViewProps) {
  return <View style={[styles[variant], style]} {...props} />;
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: Colors.background,
  },
  surface: {
    backgroundColor: Colors.surface,
  },
  warm: {
    backgroundColor: Colors.surfaceWarm,
  },
});
