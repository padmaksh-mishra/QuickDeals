import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import React from 'react';

export default function SearchScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Search' }} />
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Search Page</ThemedText>
      </ThemedView>
    </>
  );
}
