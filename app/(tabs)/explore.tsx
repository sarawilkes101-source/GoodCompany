import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

const FILTER_TAGS = ['This week', 'Free', 'Small group', 'Outdoors', 'Creative', 'Evening'];

const COLLECTIONS = [
  {
    id: 'c1',
    title: 'Weekend Escapes',
    count: 14,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80',
    color: Colors.secondary,
  },
  {
    id: 'c2',
    title: 'Creative Mornings',
    count: 9,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    color: Colors.primary,
  },
];

const RESULTS = [
  {
    id: 'r1',
    title: 'Urban Sketching Walk',
    host: 'Leo A.',
    date: 'Sat · 9 AM',
    location: 'DTLA',
    category: 'Arts',
    spots: 5,
    image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=600&q=80',
  },
  {
    id: 'r2',
    title: 'Breathwork & Cacao Ceremony',
    host: 'Anika S.',
    date: 'Sun · 11 AM',
    location: 'Topanga',
    category: 'Wellness',
    spots: 10,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
  {
    id: 'r3',
    title: 'Rooftop Salsa Social',
    host: 'Carlos V.',
    date: 'Fri · 8 PM',
    location: 'Hollywood',
    category: 'Social',
    spots: 20,
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=80',
  },
  {
    id: 'r4',
    title: 'Farmers Market Cook-Along',
    host: 'Dana L.',
    date: 'Sat · 10 AM',
    location: 'Santa Monica',
    category: 'Food',
    spots: 6,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80',
  },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <ThemedText variant="title">Explore</ThemedText>
          <TouchableOpacity style={styles.mapButton}>
            <Feather name="map" size={18} color={Colors.primary} />
            <ThemedText variant="caption" color={Colors.primary} style={styles.mapText}>
              Map
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={18} color={Colors.textTertiary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search activities, neighborhoods…"
              placeholderTextColor={Colors.textTertiary}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Feather name="sliders" size={18} color={Colors.text} />
          </TouchableOpacity>
        </View>

        {/* Filter pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterPills}
        >
          {FILTER_TAGS.map((tag, i) => (
            <TouchableOpacity
              key={tag}
              style={[styles.pill, i === 0 && styles.pillActive]}
              activeOpacity={0.75}
            >
              <ThemedText
                variant="caption"
                style={[styles.pillText, i === 0 && styles.pillTextActive]}
              >
                {tag}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Collections */}
        <ThemedText variant="subtitle" style={styles.sectionTitle}>
          Collections
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.collections}
        >
          {COLLECTIONS.map((col) => (
            <TouchableOpacity key={col.id} style={styles.collectionCard} activeOpacity={0.88}>
              <Image source={{ uri: col.image }} style={styles.collectionImage} />
              <View style={[styles.collectionOverlay, { backgroundColor: col.color + 'CC' }]}>
                <ThemedText variant="bodyMedium" color={Colors.textInverse} style={styles.colTitle}>
                  {col.title}
                </ThemedText>
                <ThemedText variant="caption" color={Colors.accent}>
                  {col.count} activities
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Results */}
        <View style={styles.resultsHeader}>
          <ThemedText variant="subtitle">All activities</ThemedText>
          <ThemedText variant="caption" color={Colors.textSecondary}>
            {RESULTS.length} near you
          </ThemedText>
        </View>

        {RESULTS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.resultCard} activeOpacity={0.88}>
            <Image source={{ uri: item.image }} style={styles.resultImage} />
            <View style={styles.resultContent}>
              <View style={styles.resultTop}>
                <View style={styles.categoryTag}>
                  <ThemedText variant="label" color={Colors.primary}>
                    {item.category}
                  </ThemedText>
                </View>
                <TouchableOpacity>
                  <Feather name="heart" size={16} color={Colors.textTertiary} />
                </TouchableOpacity>
              </View>
              <ThemedText variant="bodyMedium" style={styles.resultTitle}>
                {item.title}
              </ThemedText>
              <ThemedText variant="caption" color={Colors.textSecondary}>
                Hosted by {item.host}
              </ThemedText>
              <View style={styles.resultMeta}>
                <View style={styles.metaItem}>
                  <Feather name="calendar" size={11} color={Colors.textTertiary} />
                  <ThemedText variant="caption" color={Colors.textTertiary}>
                    {' '}
                    {item.date}
                  </ThemedText>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="map-pin" size={11} color={Colors.textTertiary} />
                  <ThemedText variant="caption" color={Colors.textTertiary}>
                    {' '}
                    {item.location}
                  </ThemedText>
                </View>
                <View style={styles.spotsPill}>
                  <ThemedText variant="caption" color={Colors.secondary}>
                    {item.spots} spots
                  </ThemedText>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 32 }} />
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
    alignItems: 'center',
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.sm,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: Theme.borderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  mapText: { fontFamily: Theme.fontFamily.bodyMedium },

  searchRow: {
    flexDirection: 'row',
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.sm,
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    fontFamily: Theme.fontFamily.body,
    fontSize: Theme.fontSize.md,
    color: Colors.text,
    padding: 0,
  },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: Theme.borderRadius.md,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },

  filterPills: {
    gap: Theme.spacing.sm,
    paddingVertical: Theme.spacing.sm,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pillActive: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accentDark,
  },
  pillText: { color: Colors.textSecondary },
  pillTextActive: { color: Colors.text },

  sectionTitle: { marginTop: Theme.spacing.lg, marginBottom: Theme.spacing.md },

  collections: { gap: Theme.spacing.md },
  collectionCard: {
    width: 200,
    height: 120,
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
  },
  collectionImage: { width: '100%', height: '100%' },
  collectionOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: Theme.spacing.md,
    justifyContent: 'flex-end',
  },
  colTitle: { marginBottom: 2 },

  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Theme.spacing.xl,
    marginBottom: Theme.spacing.md,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.md,
    marginBottom: Theme.spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Theme.shadow.sm,
  },
  resultImage: { width: 110, height: 130 },
  resultContent: { flex: 1, padding: 14, gap: 4 },
  resultTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  categoryTag: {
    backgroundColor: Colors.surfaceWarm,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Theme.borderRadius.sm,
  },
  resultTitle: { lineHeight: 20, marginBottom: 2 },
  resultMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  metaItem: { flexDirection: 'row', alignItems: 'center' },
  spotsPill: {
    backgroundColor: Colors.secondaryLight + '33',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Theme.borderRadius.full,
  },
});
