import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Auth from "./src/screens/authScreens";
// import PaymentScreen from "./src/screens/paymentScreens";
import LoginScreen from "./src/screens/LoginScreen";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";
import UserNew from "./src/components/UserNew";
import UserOld from "./src/components/UserOld";
import LeftFootprints from "./src/components/footprints/leftFootprints";

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showFootprints, setShowFootprints] = useState(false); // Nuevo estado para controlar la visualización de LeftFootprints

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticable with Touch ID",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log(result);
    });
  }
  // Manejador para cuando se acepta la creación de un usuario nuevo
  const handleAcceptNewUser = () => {
    setShowFootprints(true); // Muestra el componente LeftFootprints
  };
  return (
    <View style={styles.container}>
      {!isAuthenticated && <LoginScreen onLoginSuccess={handleLoginSuccess} />}
      {isAuthenticated &&
        !showFootprints && ( // Agregado chequeo de showFootprints
          <>
            <Text style={styles.tittle}>Bienvenidos</Text>
            <View style={styles.buttonContainer}>
              {/* Pasar handleAcceptNewUser a UserNew */}
              <UserNew onAccept={handleAcceptNewUser} />
              <UserOld />
            </View>
          </>
        )}
      {showFootprints && <LeftFootprints />}
    </View>
  );
  //(
  //   <View style={styles.container}>
  //     {!isAuthenticated && <LoginScreen onLoginSuccess={handleLoginSuccess} />}
  //     {isAuthenticated && (
  //       <>
  //         <Text style={styles.tittle}>Bienvenidos </Text>
  //         <View style={styles.buttonContainer}>
  //           <UserNew onAccept={handleAcceptNewUser}/>
  //           <UserOld />
  //         </View>
  //         {/* <PaymentScreen setIsAuthenticated={setIsAuthenticated} /> */}
  //       </>
  //     )}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 5, // Espacio entre los botones y el centro
  },
  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
