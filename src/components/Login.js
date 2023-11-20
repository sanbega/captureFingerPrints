import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });

      // Maneja la respuesta del servidor aquí
      console.log(response.data);
    } catch (error) {
      // Maneja los errores aquí
      console.log('Error:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo Electrónico"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
