import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MiTarjeta({ nombre = "Tu Nombre", curso = "Tu Curso" }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.curso}>Curso: {curso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    minWidth: 220,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#4A90E2',
    marginBottom: 10,
  },
  curso: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FF9800',
    marginTop: 4,
  },
});
