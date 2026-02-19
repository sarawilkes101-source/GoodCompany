# GoodCompany – Expo React Native App

## Tech Stack

- **Framework**: [Expo](https://expo.dev) ~54 with Expo Router v6
- **Language**: TypeScript (strict mode)
- **Navigation**: [Expo Router](https://expo.github.io/router) (file-based, bottom tabs)
- **UI**: React Native core components + `@expo/vector-icons` (Feather)
- **Fonts**: Playfair Display (headings) + Inter (body) via `@expo-google-fonts`
- **Safe Area**: `react-native-safe-area-context`
- **Screen transitions**: `react-native-screens`

## Design System

| Token | Value |
|---|---|
| Background | `#FAF7F2` (warm cream) |
| Primary | `#C4724A` (terracotta) |
| Secondary | `#7A9E7E` (sage green) |
| Text | `#2C2C2C` |
| Accent | `#E8DDD0` (warm sand) |
| Heading font | Playfair Display Bold |
| Body font | Inter Regular / Medium / SemiBold |

Never hard-code hex values — always import from `@/constants/Colors`.

## Project Structure

```
/app
  _layout.tsx          – Root layout: font loading, SplashScreen, Stack
  index.tsx            – Redirects to /(tabs)
  (tabs)/
    _layout.tsx        – Bottom tab navigator (5 tabs)
    index.tsx          – Home: activity feed
    explore.tsx        – Explore: search & browse
    create.tsx         – Create: post new activity
    messages.tsx       – Messages: group & DM chats
    profile.tsx        – Profile: user info, stats, past events
/components
  ThemedText.tsx       – Text with variants: heading/title/subtitle/body/bodyMedium/caption/label
  ThemedView.tsx       – View with variants: default/surface/warm
/assets
  /images              – PNG assets (icon, splash, adaptive-icon, favicon)
  /fonts               – Custom font files (if any)
/constants
  Colors.ts            – Full brand color palette
  Theme.ts             – Spacing, border radius, font sizes, font families, shadows
/hooks
  useColorScheme.ts
  useThemeColor.ts
/lib
  /api/client.ts       – Typed fetch wrapper
  /utils/format.ts     – capitalize, formatCurrency, formatDate, truncate
  /utils/storage.ts    – AsyncStorage helpers
```

## Key Conventions

- All screens live inside `/app`. File name = route path.
- `app/_layout.tsx` loads fonts before rendering anything (SplashScreen held until ready).
- Tab screens live in `app/(tabs)/`. The Create tab uses a custom floating `+` button.
- Components in `/components` must be reusable and not import from `/app`.
- Use path alias `@/` to import from the project root (e.g. `@/constants/Colors`).
- Colors → `constants/Colors.ts`. Theme tokens → `constants/Theme.ts`. Never hard-code.
- Use `ThemedText` and `ThemedView` from `/components` for consistent styling.
- Wrap screens with `SafeAreaView` from `react-native-safe-area-context`, edges `['top']`.
- Use `Feather` icons from `@expo/vector-icons` throughout.

## Common Commands

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android
npm run ios        # Run on iOS (macOS only)
npm run web        # Run in browser
npm run lint       # Lint the project
```

## Environment Variables

Prefix all client-side env vars with `EXPO_PUBLIC_`. Example:

```env
EXPO_PUBLIC_API_URL=https://api.example.com
```

## Adding a New Tab Screen

Create a file in `app/(tabs)/`, e.g. `app/(tabs)/saved.tsx`, then add a `<Tabs.Screen>` entry in `app/(tabs)/_layout.tsx`.

## Adding a New Component

Create in `/components`, export as named export:

```tsx
// components/MyButton.tsx
export function MyButton({ label, onPress }: Props) { ... }
```
