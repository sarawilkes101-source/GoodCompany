import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

const STATS = [
  { label: 'Activities', value: '23' },
  { label: 'Hosted', value: '8' },
  { label: 'Friends', value: '64' },
];

const INTERESTS = ['Outdoors', 'Ceramics', 'Natural wine', 'Yoga', 'Live music', 'Cooking'];

const PAST_EVENTS = [
  {
    id: 'p1',
    title: 'Griffith Park sunrise',
    date: 'Feb 8',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
  },
  {
    id: 'p2',
    title: 'Pottery workshop',
    date: 'Jan 25',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80',
  },
  {
    id: 'p3',
    title: 'Sound bath',
    date: 'Jan 12',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  },
];

const UPCOMING = [
  {
    id: 'u1',
    title: 'Natural wine tasting',
    host: 'James T.',
    date: 'Feb 28 · 7 PM',
    location: 'Los Feliz',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header bar */}
        <View style={styles.headerBar}>
          <ThemedText variant="title">Profile</ThemedText>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="share-2" size={18} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="settings" size={18} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarRow}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/200?img=25' }}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editAvatarBtn}>
                <Feather name="camera" size={12} color={Colors.textInverse} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.editProfileBtn} activeOpacity={0.8}>
              <ThemedText variant="caption" color={Colors.primary}>
                Edit profile
              </ThemedText>
            </TouchableOpacity>
          </View>

          <ThemedText variant="subtitle" style={styles.name}>
            Sara Wilkes
          </ThemedText>
          <View style={styles.locationRow}>
            <Feather name="map-pin" size={13} color={Colors.textSecondary} />
            <ThemedText variant="caption" color={Colors.textSecondary}>
              Silver Lake, Los Angeles
            </ThemedText>
          </View>
          <ThemedText variant="body" color={Colors.textSecondary} style={styles.bio}>
            UX designer by day, trail finder by weekend. Looking for good people to explore LA with — no small talk required.
          </ThemedText>

          {/* Stats */}
          <View style={styles.statsRow}>
            {STATS.map((stat, i) => (
              <View key={stat.label} style={[styles.stat, i < STATS.length - 1 && styles.statBorder]}>
                <ThemedText variant="title" color={Colors.primary} style={styles.statValue}>
                  {stat.value}
                </ThemedText>
                <ThemedText variant="caption" color={Colors.textSecondary}>
                  {stat.label}
                </ThemedText>
              </View>
            ))}
          </View>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <ThemedText variant="subtitle" style={styles.sectionTitle}>
            Into
          </ThemedText>
          <View style={styles.interestGrid}>
            {INTERESTS.map((interest) => (
              <View key={interest} style={styles.interestChip}>
                <ThemedText variant="caption" color={Colors.text}>
                  {interest}
                </ThemedText>
              </View>
            ))}
          </View>
        </View>

        {/* Upcoming */}
        <View style={styles.section}>
          <ThemedText variant="subtitle" style={styles.sectionTitle}>
            Coming up
          </ThemedText>
          {UPCOMING.map((event) => (
            <TouchableOpacity key={event.id} style={styles.upcomingCard} activeOpacity={0.88}>
              <Image source={{ uri: event.image }} style={styles.upcomingImage} />
              <View style={styles.upcomingInfo}>
                <ThemedText variant="bodyMedium" style={styles.upcomingTitle}>
                  {event.title}
                </ThemedText>
                <ThemedText variant="caption" color={Colors.textSecondary}>
                  Hosted by {event.host}
                </ThemedText>
                <View style={styles.upcomingMeta}>
                  <Feather name="calendar" size={11} color={Colors.primary} />
                  <ThemedText variant="caption" color={Colors.primary}>
                    {' '}{event.date}
                  </ThemedText>
                </View>
                <View style={styles.upcomingMeta}>
                  <Feather name="map-pin" size={11} color={Colors.textTertiary} />
                  <ThemedText variant="caption" color={Colors.textTertiary}>
                    {' '}{event.location}
                  </ThemedText>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Past activities */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText variant="subtitle">Past activities</ThemedText>
            <TouchableOpacity>
              <ThemedText variant="caption" color={Colors.primary}>
                See all
              </ThemedText>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pastGrid}
          >
            {PAST_EVENTS.map((ev) => (
              <TouchableOpacity key={ev.id} style={styles.pastCard} activeOpacity={0.88}>
                <Image source={{ uri: ev.image }} style={styles.pastImage} />
                <View style={styles.pastOverlay}>
                  <ThemedText variant="caption" color={Colors.accent} style={styles.pastTitle}>
                    {ev.title}
                  </ThemedText>
                  <ThemedText variant="caption" color={Colors.accentDark}>
                    {ev.date}
                  </ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Settings links */}
        <View style={styles.settingsSection}>
          {[
            { icon: 'bell', label: 'Notifications' },
            { icon: 'shield', label: 'Privacy' },
            { icon: 'help-circle', label: 'Help & feedback' },
            { icon: 'log-out', label: 'Sign out' },
          ].map(({ icon, label }) => (
            <TouchableOpacity key={label} style={styles.settingsRow} activeOpacity={0.75}>
              <Feather name={icon as React.ComponentProps<typeof Feather>['name']} size={18} color={Colors.textSecondary} />
              <ThemedText variant="body" style={styles.settingsLabel}>
                {label}
              </ThemedText>
              <Feather name="chevron-right" size={16} color={Colors.textTertiary} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Theme.spacing.md },

  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.sm,
  },
  headerActions: { flexDirection: 'row', gap: Theme.spacing.sm },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileCard: {
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.xl,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Theme.shadow.sm,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Theme.spacing.md,
  },
  avatarContainer: { position: 'relative' },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: Theme.borderRadius.full,
    borderWidth: 3,
    borderColor: Colors.accent,
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.surface,
  },
  editProfileBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },

  name: { marginBottom: 4 },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: Theme.spacing.sm,
  },
  bio: { lineHeight: 22, marginBottom: Theme.spacing.lg },

  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    paddingTop: Theme.spacing.md,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: Colors.divider,
  },
  statValue: {
    fontSize: Theme.fontSize.xxl,
    fontFamily: Theme.fontFamily.heading,
    lineHeight: 32,
  },

  section: { marginBottom: Theme.spacing.xl },
  sectionTitle: { marginBottom: Theme.spacing.md },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },

  interestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
  },
  interestChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.accent + '77',
    borderWidth: 1,
    borderColor: Colors.accentDark,
  },

  upcomingCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Theme.shadow.sm,
  },
  upcomingImage: { width: 90, height: 110 },
  upcomingInfo: { flex: 1, padding: Theme.spacing.md, gap: 4 },
  upcomingTitle: { lineHeight: 20, marginBottom: 2 },
  upcomingMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },

  pastGrid: { gap: Theme.spacing.md },
  pastCard: {
    width: 150,
    height: 150,
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
  },
  pastImage: { width: '100%', height: '100%' },
  pastOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(44,44,44,0.45)',
    justifyContent: 'flex-end',
    padding: Theme.spacing.sm,
  },
  pastTitle: { lineHeight: 17, marginBottom: 2 },

  settingsSection: {
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    marginBottom: Theme.spacing.lg,
    overflow: 'hidden',
    ...Theme.shadow.sm,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
    padding: Theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  settingsLabel: { flex: 1 },
});
