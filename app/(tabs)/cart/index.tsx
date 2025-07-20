import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import React from 'react';

export default function CartScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Cart' }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Cart Page</ThemedText>
      </ThemedView>
    </>
  );
}
