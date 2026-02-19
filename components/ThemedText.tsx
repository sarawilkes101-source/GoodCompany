import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Theme } from '../constants/Theme';

type TextVariant = 'title' | 'subtitle' | 'body' | 'caption';

interface ThemedTextProps extends TextProps {
  variant?: TextVariant;
}

export function ThemedText({ variant = 'body', style, ...props }: ThemedTextProps) {
  return <Text style={[styles[variant], style]} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: Theme.fontSize.xxxl,
    fontWeight: Theme.fontWeight.bold,
    color: Colors.text,
  },
  subtitle: {
    fontSize: Theme.fontSize.xl,
    fontWeight: Theme.fontWeight.semibold,
    color: Colors.text,
  },
  body: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.regular,
    color: Colors.text,
  },
  caption: {
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.regular,
    color: Colors.textSecondary,
  },
});
