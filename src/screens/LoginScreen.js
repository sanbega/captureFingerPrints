import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { login } from "../api/api"; // Importa la función de la API

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response);
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

// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Aquí puedes implementar la lógica de inicio de sesión
//     // Verifica el correo electrónico y la contraseña, maneja la autenticación, etc.
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Inicio de Sesión</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Correo Electrónico"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contraseña"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//       />
//       <Button title="Iniciar Sesión" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
// });

// export default LoginScreen;
