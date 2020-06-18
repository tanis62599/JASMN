import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import colors from "../config/colors";
import CButton from "../custom_components/CButton";
import Spacer from "../custom_components/Spacer";
import SignUpScreen from "./SignUpScreen";

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require("../assets/wScreen.jpg")}
      >
        <Image source={require("../assets/logo_1.png")} style={styles.logo} />

        <View style={styles.buttonContainer}>
          <CButton
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
            title="log in"
            color={colors.primary}
          />

          <Spacer />

          <CButton
            onPress={() => {
              this.props.navigation.navigate("Sign Up");
            }}
            title="Sign Up"
            color={colors.secondary}
          />
        </View>
      </ImageBackground>
    );
  }
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
    height: 200,
    width: 200,
    top: 80,
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
