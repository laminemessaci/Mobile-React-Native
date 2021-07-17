import React from "react";
import { Platform, StyleSheet, Button } from "react-native";

import Colors from "../constants/Colors";

const IEDFormButton = (props) => {
  const { title, color } = props;
  return <Button title={title} color={color} />;
};

const styles = StyleSheet.create({});

export default IEDFormButton;
