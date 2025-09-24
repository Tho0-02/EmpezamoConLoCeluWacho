import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Button, Platform, Alert, useWindowDimensions } from "react-native";
import * as ImagePicker from 'expo-image-picker';


import HolaMundo from "../components/holaMundo";
import MiTarjeta from "../components/MiTarjeta";
import ImagenPersona from "../components/ImagenPersona";
import { getStyles } from "./theme";

export default function App() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 700;

  const [color, setColor] = useState("#4A90E2");
  const [fontSize, setFontSize] = useState("28");
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const styles = getStyles(darkMode);

  // Request permission and pick image
  const pickImage = async () => {
    // Ask for permission
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Camera roll permissions are needed to select an image.');
        return;
      }
    }
    // Pick image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUrl(result.assets[0].uri);
    }
  };

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
        <TouchableOpacity
          onPress={() => setDarkMode((d) => !d)}
          style={{ position: 'absolute', right: 24, top: 48, padding: 8, backgroundColor: '#3338', borderRadius: 8 }}
          accessibilityLabel="Presioname para hacer la pagina mas facil de ver"
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            Presioname para hacer la pagina mas facil de ver
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={[isSmallScreen ? styles.verticalContent : styles.horizontalContent]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal={!isSmallScreen}>
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
              placeholderTextColor={darkMode ? '#aaa' : '#888'}
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
              placeholderTextColor={darkMode ? '#aaa' : '#888'}
            />
            <Text style={styles.label}>Curso:</Text>
            <TextInput
              style={styles.input}
              value={curso}
              onChangeText={setCurso}
              placeholder="Tu Curso"
              placeholderTextColor={darkMode ? '#aaa' : '#888'}
            />
            <ImagenPersona nombre={nombre || "Tu Nombre"} imageUrl={imageUrl} />
            <Button title="Elegir imagen" onPress={pickImage} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

