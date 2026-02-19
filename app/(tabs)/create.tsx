import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

const CATEGORIES = ['Outdoors', 'Arts', 'Food', 'Wellness', 'Social', 'Learning'];
const VIBES = ['Low-key', 'Active', 'Creative', 'Cozy', 'Adventurous', 'Chill'];
const GROUP_SIZES = ['2–5', '6–10', '11–20', '20+'];

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <ThemedText variant="title">Host an activity</ThemedText>
          <ThemedText variant="caption" color={Colors.textSecondary} style={styles.headerSub}>
            Share something you love doing with good company
          </ThemedText>
        </View>

        {/* Photo upload */}
        <TouchableOpacity style={styles.photoUpload} activeOpacity={0.8}>
          <View style={styles.photoInner}>
            <Feather name="camera" size={28} color={Colors.primary} />
            <ThemedText variant="bodyMedium" color={Colors.primary} style={styles.photoLabel}>
              Add a cover photo
            </ThemedText>
            <ThemedText variant="caption" color={Colors.textTertiary}>
              Show what the vibe looks like
            </ThemedText>
          </View>
        </TouchableOpacity>

        {/* Title */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Activity name
          </ThemedText>
          <TextInput
            style={styles.input}
            placeholder="e.g. Sunrise hike at Runyon Canyon"
            placeholderTextColor={Colors.textTertiary}
          />
        </View>

        {/* Category */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Category
          </ThemedText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pills}
          >
            {CATEGORIES.map((cat, i) => (
              <TouchableOpacity
                key={cat}
                style={[styles.pill, i === 0 && styles.pillActive]}
                activeOpacity={0.75}
              >
                <ThemedText
                  variant="caption"
                  style={[styles.pillText, i === 0 && styles.pillTextActive]}
                >
                  {cat}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Description */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Tell the vibe
          </ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="What will you do together? Who is this perfect for? What should people bring?"
            placeholderTextColor={Colors.textTertiary}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Date & Time */}
        <View style={styles.row}>
          <View style={[styles.field, { flex: 1 }]}>
            <ThemedText variant="label" style={styles.fieldLabel}>
              Date
            </ThemedText>
            <TouchableOpacity style={[styles.input, styles.selectRow]}>
              <Feather name="calendar" size={16} color={Colors.textSecondary} />
              <ThemedText variant="body" color={Colors.textTertiary}>
                Pick a date
              </ThemedText>
            </TouchableOpacity>
          </View>
          <View style={[styles.field, { flex: 1 }]}>
            <ThemedText variant="label" style={styles.fieldLabel}>
              Time
            </ThemedText>
            <TouchableOpacity style={[styles.input, styles.selectRow]}>
              <Feather name="clock" size={16} color={Colors.textSecondary} />
              <ThemedText variant="body" color={Colors.textTertiary}>
                Set time
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Location */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Location
          </ThemedText>
          <TouchableOpacity style={[styles.input, styles.selectRow]}>
            <Feather name="map-pin" size={16} color={Colors.textSecondary} />
            <ThemedText variant="body" color={Colors.textTertiary}>
              Add neighborhood or address
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Group size */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Group size
          </ThemedText>
          <View style={styles.sizeRow}>
            {GROUP_SIZES.map((size, i) => (
              <TouchableOpacity
                key={size}
                style={[styles.sizeChip, i === 1 && styles.sizeChipActive]}
                activeOpacity={0.75}
              >
                <ThemedText
                  variant="caption"
                  style={[styles.sizeText, i === 1 && styles.sizeTextActive]}
                >
                  {size}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Vibe tags */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Vibe tags
          </ThemedText>
          <View style={styles.vibeGrid}>
            {VIBES.map((vibe, i) => (
              <TouchableOpacity
                key={vibe}
                style={[styles.vibeTag, i === 2 && styles.vibeTagActive]}
                activeOpacity={0.75}
              >
                <ThemedText
                  variant="caption"
                  style={[styles.vibeText, i === 2 && styles.vibeTextActive]}
                >
                  {vibe}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Cost */}
        <View style={styles.field}>
          <ThemedText variant="label" style={styles.fieldLabel}>
            Cost per person (optional)
          </ThemedText>
          <View style={styles.costRow}>
            <View style={styles.currencyBadge}>
              <ThemedText variant="bodyMedium" color={Colors.textSecondary}>
                $
              </ThemedText>
            </View>
            <TextInput
              style={[styles.input, styles.costInput]}
              placeholder="0  —  leave blank for free"
              placeholderTextColor={Colors.textTertiary}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85}>
          <ThemedText variant="bodyMedium" color={Colors.textInverse} style={styles.submitText}>
            Post activity
          </ThemedText>
          <Feather name="arrow-right" size={18} color={Colors.textInverse} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.draftBtn} activeOpacity={0.7}>
          <ThemedText variant="caption" color={Colors.textSecondary}>
            Save as draft
          </ThemedText>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Theme.spacing.md },

  header: {
    paddingTop: Theme.spacing.lg,
    paddingBottom: Theme.spacing.md,
    gap: 4,
  },
  headerSub: { lineHeight: 20 },

  photoUpload: {
    height: 160,
    borderRadius: Theme.borderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.primary + '66',
    borderStyle: 'dashed',
    backgroundColor: Colors.accent + '44',
    marginBottom: Theme.spacing.lg,
    overflow: 'hidden',
  },
  photoInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  photoLabel: { marginTop: 4 },

  field: { marginBottom: Theme.spacing.lg },
  fieldLabel: {
    color: Colors.textSecondary,
    marginBottom: Theme.spacing.sm,
  },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 12,
    fontFamily: Theme.fontFamily.body,
    fontSize: Theme.fontSize.md,
    color: Colors.text,
  },
  textArea: {
    height: 110,
    paddingTop: 12,
  },
  selectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  row: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },

  pills: { gap: Theme.spacing.sm },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  pillText: { color: Colors.textSecondary },
  pillTextActive: { color: Colors.textInverse },

  sizeRow: { flexDirection: 'row', gap: Theme.spacing.sm },
  sizeChip: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: Theme.borderRadius.md,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sizeChipActive: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accentDark,
  },
  sizeText: { color: Colors.textSecondary },
  sizeTextActive: { color: Colors.text },

  vibeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
  },
  vibeTag: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  vibeTagActive: {
    backgroundColor: Colors.secondaryLight + '44',
    borderColor: Colors.secondary,
  },
  vibeText: { color: Colors.textSecondary },
  vibeTextActive: { color: Colors.secondaryDark },

  costRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  currencyBadge: {
    width: 44,
    height: 44,
    borderRadius: Theme.borderRadius.md,
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costInput: { flex: 1 },

  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
    borderRadius: Theme.borderRadius.lg,
    paddingVertical: 16,
    marginBottom: Theme.spacing.md,
    ...Theme.shadow.md,
  },
  submitText: { fontSize: Theme.fontSize.lg },
  draftBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});
