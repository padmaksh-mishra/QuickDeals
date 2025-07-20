import { useThemeColor } from '@/hooks/useThemeColor'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('')
  const background = useThemeColor({}, 'background')
  const tint = useThemeColor({}, 'tint')

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16, backgroundColor: background }}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color={tint} />
          </TouchableOpacity>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor={tint}
            autoFocus
            style={{
              flex: 1,
              marginLeft: 12,
              height: 40,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: tint,
              borderRadius: 8,
              paddingHorizontal: 12,
              color: tint,
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
