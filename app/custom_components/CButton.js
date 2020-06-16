import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function CButton({ onPress, title, color }) {
  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
  const colorStyle = new StyleSheet.create({
    color: { backgroundColor: color },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, colorStyle.color]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    width: "90%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
