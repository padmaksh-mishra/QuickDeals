import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

// Animated wrapper for themed text
const AnimatedText = Animated.createAnimatedComponent(ThemedText)

export default function SplashScreen() {
  const router = useRouter()
  // animations for two-line woosh effect
  const trans1 = useRef(new Animated.Value(-300)).current
  const trans2 = useRef(new Animated.Value(-300)).current
  const op1 = useRef(new Animated.Value(0)).current
  const op2 = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.stagger(150, [
      Animated.parallel([
        Animated.timing(trans1, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(op1, { toValue: 1, duration: 600, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(trans2, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(op2, { toValue: 1, duration: 600, useNativeDriver: true }),
      ]),
    ]).start()
    // navigate after splash delay
    const timer = setTimeout(() => router.replace('/'), 2000)
    return () => clearTimeout(timer)
  }, [router, trans1, trans2, op1, op2])

  return (
    <ThemedView style={styles.container}>
      <AnimatedText
        type="title"
        style={[
          styles.line,
          { transform: [{ translateX: trans1 }], opacity: op1 },
        ]}
      >
        Quick
      </AnimatedText>
      <AnimatedText
        type="title"
        style={[
          styles.line,
          { transform: [{ translateX: trans2 }], opacity: op2 },
        ]}
      >
        Deals
      </AnimatedText>
      <Animated.Text />
      <AnimatedText
        type="default"
        style={[
          styles.subtitle,
          {
        opacity: op2,
        transform: [
          {
            translateY: op2.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 0],
            }),
          },
        ],
          },
        ]}
      >
        Helping last minute Indians save money.
      </AnimatedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
  },
  subtitle: {
    position: 'absolute',
    bottom: '20%',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
})
