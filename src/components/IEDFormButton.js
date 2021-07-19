import React from "react";
import { Platform, StyleSheet, Button } from "react-native";

import Colors from "../constants/Colors";

const IEDFormButton = (props) => {
  const { title, color, onPressHandler, isDisable } = props;
  return (
    <Button
      disabled={isDisable}
      title={title}
      color={color}
      onPress={onPressHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default IEDFormButton;
