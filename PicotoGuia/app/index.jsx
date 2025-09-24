import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";

import HolaMundo from "../components/holaMundo";
import MiTarjeta from "../components/MiTarjeta";
import styles from "./styles";

export default function App() {
  const [color, setColor] = useState("#4A90E2");
  const [fontSize, setFontSize] = useState("28");
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");

  // Preset color options
  const presetColors = [
    "#4A90E2", // blue
    "#FF5252", // red
    "#4CAF50", // green
    "#FFD600", // yellow
    "#9C27B0", // purple
    "#000000", // black
    "#FFFFFF", // white
    "#FF9800", // orange
    "#00BCD4", // cyan
  ];

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>PicotoGuia</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.horizontalContent} showsHorizontalScrollIndicator={false}>
        <View style={styles.activityColumn}>
          <View style={styles.inputCard}>
            <HolaMundo color={color} fontSize={Number(fontSize) || 28} />
            <Text style={styles.label}>Pick a color:</Text>
            <View style={styles.colorRow}>
              {presetColors.map((preset, idx) => (
                <TouchableOpacity
                  key={preset}
                  style={[styles.colorButton, { backgroundColor: preset, borderWidth: color === preset ? 3 : 1, borderColor: color === preset ? '#333' : '#ccc' }]}
                  onPress={() => setColor(preset)}
                  accessibilityLabel={`Select color ${preset}`}
                />
              ))}
            </View>
            <Text style={styles.label}>Font Size:</Text>
            <TextInput
              style={styles.input}
              value={fontSize}
              onChangeText={setFontSize}
              placeholder="28"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.activityColumn}>
          <View style={styles.inputCard}>
            <MiTarjeta nombre={nombre || "Tu Nombre"} curso={curso || "Tu Curso"} />
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={setNombre}
              placeholder="Tu Nombre"
            />
            <Text style={styles.label}>Curso:</Text>
            <TextInput
              style={styles.input}
              value={curso}
              onChangeText={setCurso}
              placeholder="Tu Curso"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

