import React, { useCallback, useReducer } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../src/constants/Colors";
import Card from "../../src/components/Card";
import IEDFormButton from "../../src/components/IEDFormButton";
import IDEFormInput from "../../src/components/IEDFormInput";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

/**
 * Custom hook Reducer to manage our general state input
 * @param {*} state
 * @param {*} action
 * @returns new state
 */
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = ({ navigation }) => {
  /**
   * use our hook reducer with initial values of input
   * return an update formState with trigger action function (dispatchFormState)
   */
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  /**
   * check values of password and email before navigate to logoScreen
   */
  const onSubmitHandler = () => {
    const email = formState.inputValues.email;
    const password = formState.inputValues.password;
    if (!email.includes("@inextenso.fr")) {
      Alert.alert("Sorry!", "You are not an inextenso customer!", [
        { text: "Okay" },
      ]);
    } else if (password.length < 6) {
      Alert.alert("Sorry!", "password must be valid!", [{ text: "Okay" }]);
    }

    if (email.includes("@inextenso.fr") && password.length >= 6) {
      navigation.navigate("IDElogo");
    } else {
    }
  };

  /**
   * callback update will be executed for each new input action (onChange)
   */

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const isDisable = formState.formIsValid;

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={20}
      style={styles.screen}
    >
      <LinearGradient colors={["#fceeff", "#ffd3ee"]} style={styles.gradient}>
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
                minLength={6}
                autoCapitalize="none"
                errorText="Please enter password(minimum 6 characters)."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                <IEDFormButton
                  color={Colors.primary}
                  title="login"
                  isDisable={!isDisable}
                  onPressHandler={() => {
                    onSubmitHandler();
                  }}
                />
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
    marginTop: 30,
  },
});

export default AuthScreen;
