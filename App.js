import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from "./src/screens/authScreens";
import PaymentScreen from "./src/screens/paymentScreens";
import LoginScreen from "./src/screens/LoginScreen";
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async() => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });
  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticable with Touch ID",
        fallbackLabel: "Enter Password",
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
        console.log(result);
    });   
  }
  return (
    <View style={styles.container}>
      {/* este es el login de correo y contraseña LoginScreen */}
      {/* <LoginScreen /> */}
      {/* {isAuthenticated ? <PaymentScreen /> : <Auth />} */}
      {/* este es el otro  */}
      {/* {isAuthenticated ? <PaymentScreen setIsAuthenticated={setIsAuthenticated} /> : <Auth  onAuthenticate= {onAuthenticate} />} */}
      {/* {isAuthenticated ? <PaymentScreen /> : <Auth onAuthenticate={onAuthenticate}/>} */}
      {/* esto es la mia  */}
      {/* {LoginScreen ? isAuthenticated < PaymentScreen setIsAuthenticated={setIsAuthenticated}/> : < LoginScreen onAuthenticate={handleAuthentication}/> } */}
      {isAuthenticated ? ( <PaymentScreen setIsAuthenticated={setIsAuthenticated} /> ) : ( <LoginScreen/> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
