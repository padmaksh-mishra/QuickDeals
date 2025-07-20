import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack initialRouteName="splash">
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
