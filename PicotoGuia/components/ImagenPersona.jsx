import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImagenPersona({ nombre = "Nombre", imageUrl }) {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>🙂</Text>
        </View>
      )}
      <Text style={styles.nombre}>{nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4A90E2",
    marginBottom: 10,
    backgroundColor: "#e0e0e0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    backgroundColor: '#e0e0e0',
  },
  placeholderText: {
    fontSize: 48,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 120,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
});
