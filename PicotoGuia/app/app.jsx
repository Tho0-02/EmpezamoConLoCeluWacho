import React from "react";
import { View, StyleSheet } from "react-native";
import HolaMundo from "../components/holaMundo";

export default function App() {
  return (
    <View style={styles.container}>
      <HolaMundo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
