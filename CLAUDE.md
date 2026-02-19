# GoodCompany – Expo React Native App

## Tech Stack

- **Framework**: [Expo](https://expo.dev) ~54 with Expo Router v6
- **Language**: TypeScript (strict mode)
- **Navigation**: [Expo Router](https://expo.github.io/router) (file-based)
- **UI**: React Native core components + `@expo/vector-icons`
- **Safe Area**: `react-native-safe-area-context`
- **Screen transitions**: `react-native-screens`

## Project Structure

```
/app           – Screens & layouts (Expo Router file-based routing)
/components    – Reusable UI components
/assets
  /images      – PNG assets (icon, splash, adaptive-icon, favicon)
  /fonts       – Custom font files
/constants     – App-wide constants (Colors, Theme)
/hooks         – Custom React hooks
/lib
  /api         – API client and service modules
  /utils       – Pure utility functions (format, storage, etc.)
```

## Key Conventions

- All screens live inside `/app`. File name = route path.
- `app/_layout.tsx` is the root layout (Stack navigator by default).
- Components in `/components` must be reusable and not import from `/app`.
- Use path alias `@/` to import from the project root (e.g. `@/constants/Colors`).
- Colors are defined in `constants/Colors.ts`; never hard-code hex values in components.
- Use `ThemedText` and `ThemedView` components from `/components` for consistent styling.
- Wrap screens with `SafeAreaView` from `react-native-safe-area-context`.

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

## Adding a New Screen

Create a file in `/app`, e.g. `app/profile.tsx`:

```tsx
export default function ProfileScreen() {
  return <ThemedView>...</ThemedView>;
}
```

Navigate with `router.push('/profile')` or `<Link href="/profile">`.

## Adding a New Component

Create in `/components`, export as named export:

```tsx
// components/MyButton.tsx
export function MyButton({ label, onPress }: Props) { ... }
```
