import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

type Params = { id: string };

export default function ProductPage() {
  const { id } = useLocalSearchParams<Params>();
  return (
    <>
      <Stack.Screen options={{ title: `Product ${id}` }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Product Page for ID: {id}</ThemedText>
      </ThemedView>
    </>
  );
}
