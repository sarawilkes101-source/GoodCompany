import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

const CATEGORIES = ['All', 'Outdoors', 'Arts', 'Food', 'Wellness', 'Social'];

const EVENTS = [
  {
    id: '1',
    title: 'Sunrise Hike at Griffith Park',
    category: 'Outdoors',
    host: 'Maya R.',
    date: 'Sat, Feb 22 · 6:30 AM',
    location: 'Griffith Observatory',
    spots: 4,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    vibe: '🌅 Early birds only',
  },
  {
    id: '2',
    title: 'Ceramics & Coffee Morning',
    category: 'Arts',
    host: 'Sofia K.',
    date: 'Sun, Feb 23 · 10:00 AM',
    location: 'Silver Lake Studio',
    spots: 6,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    vibe: '🎨 Creative & cozy',
  },
  {
    id: '3',
    title: 'Natural Wine Tasting',
    category: 'Food',
    host: 'James T.',
    date: 'Fri, Feb 28 · 7:00 PM',
    location: 'Los Feliz',
    spots: 8,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    vibe: '🍷 Low-key & curious',
  },
  {
    id: '4',
    title: 'Group Sound Bath',
    category: 'Wellness',
    host: 'Priya M.',
    date: 'Wed, Feb 26 · 7:30 PM',
    location: 'Echo Park',
    spots: 12,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    vibe: '✨ Reset & restore',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <ThemedText variant="caption" color={Colors.textSecondary}>
              Good morning ☀️
            </ThemedText>
            <ThemedText variant="title">What's happening in LA</ThemedText>
          </View>
          <TouchableOpacity style={styles.notifButton}>
            <Feather name="bell" size={22} color={Colors.text} />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {CATEGORIES.map((cat, i) => (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, i === 0 && styles.chipActive]}
              activeOpacity={0.75}
            >
              <ThemedText
                variant="caption"
                style={[styles.chipText, i === 0 && styles.chipTextActive]}
              >
                {cat}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured event */}
        <View style={styles.sectionHeader}>
          <ThemedText variant="subtitle">This weekend</ThemedText>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.featuredCard}>
          <ImageBackground
            source={{ uri: EVENTS[0].image }}
            style={styles.featuredImage}
            imageStyle={styles.featuredImageStyle}
          >
            <View style={styles.featuredOverlay}>
              <View style={styles.vibeBadge}>
                <ThemedText variant="caption" color={Colors.text} style={styles.vibeText}>
                  {EVENTS[0].vibe}
                </ThemedText>
              </View>
              <View style={styles.featuredInfo}>
                <ThemedText variant="label" color={Colors.accent} style={styles.featuredCategory}>
                  {EVENTS[0].category}
                </ThemedText>
                <ThemedText variant="subtitle" color={Colors.surface} style={styles.featuredTitle}>
                  {EVENTS[0].title}
                </ThemedText>
                <View style={styles.metaRow}>
                  <Feather name="calendar" size={13} color={Colors.accentDark} />
                  <ThemedText variant="caption" color={Colors.accent} style={styles.metaText}>
                    {EVENTS[0].date}
                  </ThemedText>
                </View>
                <View style={styles.metaRow}>
                  <Feather name="map-pin" size={13} color={Colors.accentDark} />
                  <ThemedText variant="caption" color={Colors.accent} style={styles.metaText}>
                    {EVENTS[0].location}
                  </ThemedText>
                </View>
                <View style={styles.featuredFooter}>
                  <ThemedText variant="caption" color={Colors.accent}>
                    Hosted by {EVENTS[0].host}
                  </ThemedText>
                  <View style={styles.spotsBadge}>
                    <ThemedText variant="caption" color={Colors.primary} style={styles.spotsText}>
                      {EVENTS[0].spots} spots left
                    </ThemedText>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Activity feed */}
        <View style={styles.sectionHeader}>
          <ThemedText variant="subtitle">Nearby activities</ThemedText>
          <TouchableOpacity>
            <ThemedText variant="caption" color={Colors.primary}>
              See all
            </ThemedText>
          </TouchableOpacity>
        </View>

        {EVENTS.slice(1).map((event) => (
          <TouchableOpacity key={event.id} style={styles.card} activeOpacity={0.88}>
            <Image source={{ uri: event.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <ThemedText variant="label" color={Colors.primary}>
                  {event.category}
                </ThemedText>
                <View style={styles.spotsSmall}>
                  <ThemedText variant="caption" color={Colors.textSecondary}>
                    {event.spots} spots
                  </ThemedText>
                </View>
              </View>
              <ThemedText variant="bodyMedium" style={styles.cardTitle}>
                {event.title}
              </ThemedText>
              <ThemedText variant="caption" color={Colors.textSecondary} style={styles.cardVibe}>
                {event.vibe}
              </ThemedText>
              <View style={styles.cardMeta}>
                <Feather name="calendar" size={11} color={Colors.textTertiary} />
                <ThemedText variant="caption" color={Colors.textTertiary} style={styles.metaText}>
                  {event.date}
                </ThemedText>
              </View>
              <View style={styles.cardMeta}>
                <Feather name="map-pin" size={11} color={Colors.textTertiary} />
                <ThemedText variant="caption" color={Colors.textTertiary} style={styles.metaText}>
                  {event.location}
                </ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: Theme.spacing.md },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.sm,
  },
  notifButton: {
    width: 42,
    height: 42,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  notifDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.surface,
  },

  categories: {
    paddingVertical: Theme.spacing.sm,
    gap: Theme.spacing.sm,
  },
  chip: {
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipText: { color: Colors.textSecondary },
  chipTextActive: { color: Colors.textInverse },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.md,
  },

  featuredCard: {
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
    ...Theme.shadow.md,
  },
  featuredImage: { height: 340 },
  featuredImageStyle: { borderRadius: Theme.borderRadius.lg },
  featuredOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'space-between',
    padding: Theme.spacing.md,
  },
  vibeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(250,247,242,0.92)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: Theme.borderRadius.full,
  },
  vibeText: { color: Colors.text },
  featuredInfo: { gap: 4 },
  featuredCategory: { marginBottom: 2 },
  featuredTitle: { marginBottom: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  metaText: { marginLeft: 2 },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  spotsBadge: {
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Theme.borderRadius.full,
  },
  spotsText: { fontFamily: Theme.fontFamily.bodySemiBold },

  card: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.md,
    marginBottom: Theme.spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Theme.shadow.sm,
  },
  cardImage: {
    width: 100,
    height: 120,
  },
  cardContent: {
    flex: 1,
    padding: Theme.spacing.md,
    gap: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  cardTitle: { lineHeight: 20 },
  cardVibe: { marginVertical: 2 },
  cardMeta: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 1 },
  spotsSmall: {
    backgroundColor: Colors.surfaceWarm,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Theme.borderRadius.full,
  },

  bottomPad: { height: 32 },
});
