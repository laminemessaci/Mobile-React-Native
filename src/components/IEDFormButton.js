import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

/**
 * Custom Boutton
 * @param {*} props
 * @returns Button
 */

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

IEDFormButton.propTypes = {
  title: PropTypes.string,
  isDisable: PropTypes.bool,
  color: PropTypes.string,
  onPressHandler: PropTypes.func,
};
IEDFormButton.defaultProps = {
  title: "Title",
  isDisable: false,
  color: Colors.primary,
  onPressHandler: null,
};

export default IEDFormButton;
