import React from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import Button from "../../components/Auth/Button";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.TextInput`
  margin-bottom: 30px;
`;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              stateFn={setUsername}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Button text={"Sign In"} accent onPress={handleSubmit}></Button>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
