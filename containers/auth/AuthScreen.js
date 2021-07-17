import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../constants/Colors";
import Card from "../../components/Card";
import IEDFormButton from "../../components/IEDFormButton";
import IDEFormInput from "../../components/IEDFormInput";

const AuthScreen = (props) => {
  useEffect(() => {}, []);

  const inputChangeHandler = useCallback([]);

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={20}
      style={styles.screen}
    >
      <LinearGradient colors={["#ffedff", "#ffd3ee"]} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <View style={styles.buttonContainer}>
              <IDEFormInput
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                errorText="Please enter a valid email address."
                initialValue=""
              />
              <IDEFormInput
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                <IEDFormButton color={Colors.primary} title="login" />
              </View>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 600,
    minHeight: 300,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 15,
  },
});

export default AuthScreen;
