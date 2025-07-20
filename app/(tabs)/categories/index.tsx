import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import React from 'react';

export default function CategoriesScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Categories' }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Categories Screen</ThemedText>
      </ThemedView>
    </>
  );
}
