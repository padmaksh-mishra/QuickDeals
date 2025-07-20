import { useThemeColor } from '@/hooks/useThemeColor'
import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  const background = useThemeColor({}, 'background')
  return (
    <Stack
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: background },
      }}
    >
      <Stack.Screen name="splash" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
