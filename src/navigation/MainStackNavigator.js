import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import AuthScreen from "../../src/containers/AuthScreen";
import IDElogotype from "../../src/containers/IDElogotype";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Authentificate"
        component={AuthScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="IDElogo"
        component={IDElogotype}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
