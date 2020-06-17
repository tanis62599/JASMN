import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

import colors from "../config/colors";
import CButton from "../custom_components/CButton";
import Spacer from "../custom_components/Spacer";

export default function WelcomeScreen() {
  const images = ["wScreen.jpg", "Welcome_Screen_2.jpg"];
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/wScreen.jpg")}
    >
      <Image source={require("../assets/logo_1.png")} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <CButton onPress={doSomething} title="log in" color={colors.primary} />
        <Spacer />
        <CButton
          onPress={() => {
            console.log("hello");
          }}
          title="Register"
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    bottom: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    position: "absolute",
    height: 250,
    width: 250,
    top: 70,
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

function doSomething() {
  console.log("i did something");
}
