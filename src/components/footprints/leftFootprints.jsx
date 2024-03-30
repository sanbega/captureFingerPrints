import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Alert,
  Modal,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function LeftFootprints({ onAuthenticate }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const buttons = ["Pulgar", "Índice", "Medio", "Anular", "Meñique"];
  const handlePress = (buttonText) => {
    setSelectedButton(buttonText);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {buttons.map((buttonText, index) => (
          <View key={index} style={styles.button}>
            <Button
              title={buttonText}
              onPress={() => handlePress(buttonText)}
            />
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{`Has presionado el botón ${selectedButton}`}</Text>
            <Ionicons name="finger-print" size={24} color="black" />
            <Button
              title="capture"
              onPress={(() => setModalVisible(!modalVisible), onAuthenticate)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
