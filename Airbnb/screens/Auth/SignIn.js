import React from "react";
import styled from "styled-components/native";
import Button from "../../components/Auth/Button";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const TextInput = styled.TextInput``;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <Container>
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
      <Button text={"Sign In"} accent onPress={handleSubmit}></Button>
    </Container>
  );
};
