import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'

export default function SplashScreen() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText type="title">Splash Screen</ThemedText>
      </ThemedView>
    </>
  )
}
