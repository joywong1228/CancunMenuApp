import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const bubbleCount = 60;
  const bubbles = useRef(
    Array.from({ length: bubbleCount }).map(() => ({
      translateY: new Animated.Value(height + Math.random() * 300),
      translateX: new Animated.Value(0),
      x: Math.random() * width,
      size: 30 + Math.random() * 60,
      color: [
        "rgba(255,255,255,0.35)",
        "rgba(178,253,255,0.45)",
        "rgba(160,240,255,0.5)",
        "rgba(224,255,255,0.4)",
      ][Math.floor(Math.random() * 4)],
      drift: (Math.random() - 0.5) * 40,
      duration: 10000 + Math.random() * 4000,
    }))
  ).current;

  useEffect(() => {
    bubbles.forEach((bubble) => {
      const animate = () => {
        bubble.translateY.setValue(height + 50);
        bubble.translateX.setValue(0);
        Animated.parallel([
          Animated.timing(bubble.translateY, {
            toValue: -100,
            duration: bubble.duration,
            useNativeDriver: true,
          }),
          Animated.timing(bubble.translateX, {
            toValue: bubble.drift,
            duration: bubble.duration,
            useNativeDriver: true,
          }),
        ]).start(() => animate());
      };
      animate();
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        {bubbles.map((bubble, i) => (
          <Animated.View
            key={i}
            style={[
              styles.bubble,
              {
                width: bubble.size,
                height: bubble.size,
                backgroundColor: bubble.color,
                left: bubble.x,
                transform: [
                  { translateY: bubble.translateY },
                  { translateX: bubble.translateX },
                ],
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.glassCard}>
        <Text style={styles.title}>🌴 Welcome to Cancun</Text>
        <Text style={styles.subtitle}>Travel Date: August 2026</Text>
        <Text style={styles.subtitle}>People: 50+ (Poon Family Reunion)</Text>
        <Text style={styles.subtitle}>Resort: Moon Palace Cancun</Text>
        <Text style={styles.subtitle}>Deposit: $100/room – refundable</Text>
        <Text style={styles.subtitle}>Flights: Not included</Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push("/nizuc")}>
        <Text style={styles.buttonText}>Explore Nizuc</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/sunrise")}>
        <Text style={styles.buttonText}>Explore Sunrise</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/favorites")}
      >
        <Text style={styles.buttonText}>❤️ View Favorites</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ea5e9", // bright ocean blue
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e0f2fe",
    marginBottom: 10,
    textShadowColor: "#0284c7",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#bae6fd",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#06b6d4",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 24,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    elevation: 6,
  },
  buttonText: {
    color: "#f0f9ff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
  bubble: {
    position: "absolute",
    borderRadius: 999,
  },
  glassCard: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 40,
  },
});
