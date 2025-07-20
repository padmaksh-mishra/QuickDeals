import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

export default function HomeScreen() {
  const router = useRouter()
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Home Screen</ThemedText>
        <Button title="Products" onPress={() => router.push('/products')} />
        <Button title="Categories" onPress={() => router.push('/categories')} />
        <Button title="Search" onPress={() => router.push('/search')} />
        <Button title="Cart" onPress={() => router.push('/cart')} />
      </ThemedView>
    </>
  )
}
