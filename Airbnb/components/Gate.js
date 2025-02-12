import React from "react";
import { View, Text } from "react-native";

function Gate() {
  const isLoggedIn = false;
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoggedIn ? <Text>Welcome</Text> : <Text>Login please</Text>}
    </View>
  );
}

export default Gate;
