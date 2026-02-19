import { Tabs } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';

type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

function TabBarIcon({ name, color, size }: { name: FeatherIconName; color: string; size: number }) {
  return <Feather name={name} color={color} size={size} />;
}

function CreateButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.createButtonWrapper} activeOpacity={0.85}>
      <View style={styles.createButton}>
        <Feather name="plus" size={26} color={Colors.textInverse} />
      </View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.tabActive,
        tabBarInactiveTintColor: Colors.tabInactive,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size - 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="compass" color={color} size={size - 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: () => null,
          tabBarButton: (props) => (
            <CreateButton onPress={() => props.onPress?.(null as never)} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="message-circle" color={color} size={size - 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" color={color} size={size - 2} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.tabBackground,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: 80,
    paddingBottom: 16,
    paddingTop: 10,
    ...Theme.shadow.sm,
  },
  tabLabel: {
    fontFamily: Theme.fontFamily.bodyMedium,
    fontSize: Theme.fontSize.xs,
    marginTop: 2,
  },
  tabItem: {
    paddingTop: 4,
  },
  createButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  createButton: {
    width: 58,
    height: 58,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadow.md,
  },
});
