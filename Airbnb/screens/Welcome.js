import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";
import Button from "../components/Auth/Button";

const LOGO_URL =
  "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png";

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const ButtonContainer = StyleSheet.View``;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Container>
      <BlurView
        intensity={40}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={{ uri: LOGO_URL }} />
        <ButtonContainer>
          <Button onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Button onPress={goToSignIn} text={"Sign In"} />
        </ButtonContainer>
      </BlurView>
      <Image source={require("../assets/loginBg.jpeg")} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};
