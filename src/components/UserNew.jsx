import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function UserNew({ onAccept }) {
  const handleClick = () => {
    Alert.alert("Usuario Nuevo", "¡Se realizarán capturas de huellas!", [
      {
        text: "Aceptar",
        onPress: () => onAccept(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#030E9D", "#0B75C8"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        style={styles.button}
        onPress={handleClick}
      >
        Usuario nuevo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderRadius: 30,
    minHeight: 45,
    paddingHorizontal: 15,
    paddingTop: 8,
    fontSize: 16,
    paddingVertical: 5,
    borderColor: "#000102",
    marginBottom: 20,
    fontWeight: "600",
  },
});
