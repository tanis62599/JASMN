import React, { component } from "react";
import { ImageBackground, StyleSheet, Text, onChangeText } from "react-native";

function SignUpScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/SignUpBGND.jpeg")}
      opacity={0.7}
      blurRadius={0.35}

      //<Text style={styles.}></Text>
    ></ImageBackground>
  );
}

const onPressTitle = () => {
  console.log("title pressed");
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default SignUpScreen;
