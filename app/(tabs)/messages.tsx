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

const ACTIVE_CHATS = [
  {
    id: 'g1',
    name: 'Sunrise Hike crew 🌅',
    isGroup: true,
    lastMessage: 'Maya: Don't forget layers, it'll be cold!',
    time: '2m ago',
    unread: 3,
    avatars: [
      'https://i.pravatar.cc/100?img=1',
      'https://i.pravatar.cc/100?img=2',
      'https://i.pravatar.cc/100?img=3',
    ],
  },
  {
    id: 'g2',
    name: 'Ceramics & Coffee ☕',
    isGroup: true,
    lastMessage: 'Sofia: Excited to see you all Sunday!',
    time: '1h ago',
    unread: 1,
    avatars: [
      'https://i.pravatar.cc/100?img=4',
      'https://i.pravatar.cc/100?img=5',
    ],
  },
];

const DM_CHATS = [
  {
    id: 'd1',
    name: 'James Torres',
    avatar: 'https://i.pravatar.cc/100?img=6',
    lastMessage: 'Are you still coming to the wine tasting?',
    time: '3h ago',
    unread: 0,
  },
  {
    id: 'd2',
    name: 'Priya Mehta',
    avatar: 'https://i.pravatar.cc/100?img=7',
    lastMessage: 'The sound bath was incredible, thanks for suggesting it 🙏',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 'd3',
    name: 'Leo Andrade',
    avatar: 'https://i.pravatar.cc/100?img=8',
    lastMessage: 'Let me know when you want to do another sketch walk',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 'd4',
    name: 'Anika Shah',
    avatar: 'https://i.pravatar.cc/100?img=9',
    lastMessage: 'Just posted a new breathwork session!',
    time: 'Sun',
    unread: 0,
  },
];

function GroupAvatars({ avatars }: { avatars: string[] }) {
  return (
    <View style={styles.groupAvatars}>
      {avatars.slice(0, 3).map((uri, i) => (
        <Image
          key={i}
          source={{ uri }}
          style={[styles.groupAvatar, { left: i * 18, zIndex: 3 - i }]}
        />
      ))}
    </View>
  );
}

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <ThemedText variant="title">Messages</ThemedText>
          <TouchableOpacity style={styles.newChatBtn}>
            <Feather name="edit-2" size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Feather name="search" size={16} color={Colors.textTertiary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations…"
            placeholderTextColor={Colors.textTertiary}
          />
        </View>

        {/* Activity group chats */}
        <ThemedText variant="label" style={styles.sectionLabel}>
          Activity groups
        </ThemedText>
        <View style={styles.section}>
          {ACTIVE_CHATS.map((chat, i) => (
            <TouchableOpacity
              key={chat.id}
              style={[styles.chatRow, i < ACTIVE_CHATS.length - 1 && styles.chatBorder]}
              activeOpacity={0.75}
            >
              <GroupAvatars avatars={chat.avatars} />
              <View style={styles.chatContent}>
                <View style={styles.chatTop}>
                  <ThemedText variant="bodyMedium" style={styles.chatName} numberOfLines={1}>
                    {chat.name}
                  </ThemedText>
                  <ThemedText variant="caption" color={Colors.textTertiary}>
                    {chat.time}
                  </ThemedText>
                </View>
                <View style={styles.chatBottom}>
                  <ThemedText
                    variant="caption"
                    color={Colors.textSecondary}
                    style={styles.lastMessage}
                    numberOfLines={1}
                  >
                    {chat.lastMessage}
                  </ThemedText>
                  {chat.unread > 0 && (
                    <View style={styles.unreadBadge}>
                      <ThemedText variant="caption" color={Colors.textInverse} style={styles.unreadText}>
                        {chat.unread}
                      </ThemedText>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Direct messages */}
        <ThemedText variant="label" style={styles.sectionLabel}>
          Direct messages
        </ThemedText>
        <View style={styles.section}>
          {DM_CHATS.map((chat, i) => (
            <TouchableOpacity
              key={chat.id}
              style={[styles.chatRow, i < DM_CHATS.length - 1 && styles.chatBorder]}
              activeOpacity={0.75}
            >
              <View style={styles.avatarWrapper}>
                <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                <View style={styles.onlineDot} />
              </View>
              <View style={styles.chatContent}>
                <View style={styles.chatTop}>
                  <ThemedText variant="bodyMedium" style={styles.chatName} numberOfLines={1}>
                    {chat.name}
                  </ThemedText>
                  <ThemedText variant="caption" color={Colors.textTertiary}>
                    {chat.time}
                  </ThemedText>
                </View>
                <ThemedText
                  variant="caption"
                  color={Colors.textSecondary}
                  style={styles.lastMessage}
                  numberOfLines={1}
                >
                  {chat.lastMessage}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  content: { paddingHorizontal: Theme.spacing.md },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.sm,
  },
  newChatBtn: {
    width: 40,
    height: 40,
    borderRadius: Theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.sm,
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Theme.spacing.lg,
  },
  searchInput: {
    flex: 1,
    fontFamily: Theme.fontFamily.body,
    fontSize: Theme.fontSize.md,
    color: Colors.text,
    padding: 0,
  },

  sectionLabel: {
    marginBottom: Theme.spacing.sm,
    color: Colors.textSecondary,
  },
  section: {
    backgroundColor: Colors.surface,
    borderRadius: Theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    marginBottom: Theme.spacing.lg,
    overflow: 'hidden',
    ...Theme.shadow.sm,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
    padding: Theme.spacing.md,
  },
  chatBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },

  groupAvatars: {
    width: 54,
    height: 42,
    position: 'relative',
  },
  groupAvatar: {
    width: 34,
    height: 34,
    borderRadius: Theme.borderRadius.full,
    borderWidth: 2,
    borderColor: Colors.surface,
    position: 'absolute',
    top: 0,
  },

  avatarWrapper: { position: 'relative' },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: Theme.borderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: Colors.secondary,
    borderWidth: 2,
    borderColor: Colors.surface,
  },

  chatContent: { flex: 1, gap: 3 },
  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatName: { flex: 1, marginRight: 8 },
  chatBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: { flex: 1, marginRight: 6 },
  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  unreadText: {
    fontSize: Theme.fontSize.xs,
    fontFamily: Theme.fontFamily.bodySemiBold,
    lineHeight: 14,
  },
});
