import React from "react";
// import { SafeAreaView, StyleSheet, TextInput, Image, View, Button, Text, TouchableOpacity } from "react-native";
// import FingerSVG from '../components/FingerSVG';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// // esto es nuevo
// import { authenticateAsync } from "expo-local-authentication";
// //
const myImage = require("../../assets/acess2.png");


// //esto es nuevo
// //nota esta es la funcion askForBiometrics esta funcion sera la encargada de iniciar la autenticacion biometrica y devolvera el resultado de la autenticacion
// const askForBiometrics = async () =>
//     await authenticateAsync({
//         disableDeviceFallback: true,
//         promptMessage: "Enable biometrics login",
//         cancelLabel: "Not now",
//     });
// //
// //esto es nuevo 
// import {
//     authenticateAsync
// } from 'expo-local-authentication';
// import {
//     RSA
// } from 'react-native-rsa-native';
// ...

// const enableBiometrics = async () => {
//     const biometricsResult = await askForBiometrics();
//     if (biometricsResult?.success) {
//         //Create Key pair
//         const keys = await RSA.generateKeys(1024);
//         // Use secure Store as it provides a way to encrypt and securely store key–value pairs locally on the device.
//         await SecureStore.setItemAsync(
//             "USER_BIOMETRIC_KEY",
//             keys.private
//         );
//     }
// };
// const enableBiometrics = async () => {
//     await postBiometricKey({
//         biometricKey: {
//             publicKey: keys.public
//         }
//     });
// };

// //

export default function PaymentScreen({setIsAuthenticated}) {
return (
  <View>
    <Image source={myImage} style={style.image}></Image>
    <Text style={style.title}></Text>
    <Text style={style.description}>Huella capturada correctamente.</Text>
    <TouchableOpacity
        onPress={() => setIsAuthenticated(false)}
        style={style.btn}
    >
      <Text style={style.text}>Aceptar</Text>
    </TouchableOpacity>
  </View>
);
}
const style = StyleSheet.create({
btn: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#8893FC",
    padding: 10,
    borderRadius: 5,
},
image: {
    width: 489,
    height: 461,
},
text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
},
title: {
    fontSize: 50,
    fontWeight: "400",
    marginVertical: 30,
    textAlign: "center",
},
description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
},
});
