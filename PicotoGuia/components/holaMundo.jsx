import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HolaMundo({ color = "#4A90E2", fontSize = 28 }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, { color, fontSize }]}>
        Hola React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
    minWidth: 280,
    minHeight: 80,
  },
  texto: {
    fontWeight: "bold",
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: '#e0e0e0',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
