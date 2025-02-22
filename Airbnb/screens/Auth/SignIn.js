import React from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Auth/Button";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../util";
import { userLogin } from "../../redux/userSlice";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.TextInput`
  margin-bottom: 30px;
`;

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);

  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              stateFn={setEmail}
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
