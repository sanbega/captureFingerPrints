import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { login } from "../api/api";

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response);
      onLoginSuccess();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styl.container}>
      <TextInput
        placeholder="Correo Electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styl.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styl.input}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};
const styl = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
