import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const ButtonView = styled.View`
  border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)};
  border-radius: 10px;
  padding: 15px 0px;
  align-items: center;
  width: ${width / 2}px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "white" : colors.black)};
`;

const Button = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonView accent={accent}>
      <Text accent={accent}>{text}</Text>
    </ButtonView>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default Button;
