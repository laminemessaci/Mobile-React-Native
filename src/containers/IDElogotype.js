import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import IEDFormButton from "../components/IEDFormButton";
import Colors from "../constants/Colors";
import { IED_LOGO } from "../images";

/**
 * IED_logo screen
 * @param {*} param0
 * @returns
 */
const IDElogotype = ({ navigation: { goBack } }) => {
  return (
    <LinearGradient colors={["#fceeff", "#ffd3ee"]} style={styles.gradient}>
      <View style={styles.container}>
        <Image style={styles.ied_logo} source={IED_LOGO} />

        <View style={styles.title_container}>
          <Text style={styles.title_text}>Hello Dear Collaborator!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <IEDFormButton
            color={Colors.primary}
            title="logout"
            onPressHandler={() => {
              goBack();
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ied_logo: {
    borderWidth: 1,
    borderRadius: 5,
    height: 169,
    margin: 20,
    width: Dimensions.width,
  },
  title_container: {
    margin: 20,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    color: "black",
    textAlign: "center",
  },
  buttonContainer: {
    margin: 60,
    marginTop: 30,
  },
});

export default IDElogotype;
