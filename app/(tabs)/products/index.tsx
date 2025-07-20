import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import React from 'react';

export default function ProductsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Products' }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Fetched Products Screen</ThemedText>
      </ThemedView>
    </>
  );
}
