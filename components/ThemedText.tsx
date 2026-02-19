import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

type TextVariant = 'heading' | 'title' | 'subtitle' | 'body' | 'bodyMedium' | 'caption' | 'label';

interface ThemedTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
}

export function ThemedText({ variant = 'body', color, style, ...props }: ThemedTextProps) {
  return (
    <Text
      style={[styles[variant], color ? { color } : undefined, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: Theme.fontSize.xxxl,
    fontFamily: Theme.fontFamily.heading,
    color: Colors.text,
    lineHeight: 42,
  },
  title: {
    fontSize: Theme.fontSize.xxl,
    fontFamily: Theme.fontFamily.heading,
    color: Colors.text,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: Theme.fontSize.xl,
    fontFamily: Theme.fontFamily.bodySemiBold,
    color: Colors.text,
    lineHeight: 28,
  },
  body: {
    fontSize: Theme.fontSize.md,
    fontFamily: Theme.fontFamily.body,
    color: Colors.text,
    lineHeight: 22,
  },
  bodyMedium: {
    fontSize: Theme.fontSize.md,
    fontFamily: Theme.fontFamily.bodyMedium,
    color: Colors.text,
    lineHeight: 22,
  },
  caption: {
    fontSize: Theme.fontSize.sm,
    fontFamily: Theme.fontFamily.body,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  label: {
    fontSize: Theme.fontSize.xs,
    fontFamily: Theme.fontFamily.bodySemiBold,
    color: Colors.textSecondary,
    lineHeight: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
