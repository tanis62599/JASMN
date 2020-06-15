import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wScreen.jpg")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
