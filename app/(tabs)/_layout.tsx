import { useThemeColor } from '@/hooks/useThemeColor'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function StackLayout() {
  const router = useRouter()
  // theme colors
  const tint = useThemeColor({}, 'tint')
  const background = useThemeColor({}, 'background')

  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: background },
        headerTintColor: tint,
        headerTitleAlign: 'left',
        // space between arrow and title via headerLeft margin
        // remove title style margin to avoid type mismatch
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginRight: 24 }}
            >
              <MaterialIcons name="arrow-back" size={24} color={tint} />
            </TouchableOpacity>
          ) : null,
        headerRight: () => (
          <View style={{ flexDirection: 'row', paddingRight: 16 }}>
            <TouchableOpacity onPress={() => router.push('/search')} style={{ marginRight: 16 }}>
              <MaterialIcons name="search" size={24} color={tint} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/cart')}>
              <MaterialIcons name="shopping-cart" size={24} color={tint} />
            </TouchableOpacity>
          </View>
        ),
      })}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="categories" options={{ title: 'Categories' }} />
      <Stack.Screen name="products" options={{ title: 'Products' }} />
      <Stack.Screen name="products/[id]" options={{ title: 'Product Details' }} />
      <Stack.Screen
        name="search"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="cart" options={{ title: 'Cart' }} />
    </Stack>
  )
}
