import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://2af3-2800-484-387b-6600-6e80-7e7e-d8ea-8a66.ngrok-free.app/login",
        {
          email: email,
          password: password,
        }
      );

      // Maneja la respuesta del servidor aquí
      console.log(response.data);
    } catch (error) {
      // Maneja los errores aquí
      console.log("Error:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo Electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        style={styles.button}
        title="Iniciar Sesión"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0A539B",
  },
});

export default LoginScreen;
