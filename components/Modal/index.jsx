import { useState } from "react";
import {
  Modal,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Text,
} from "react-native";

export default function ModalInput({
  modalVisible,
  setModalVisible,
  setGoalList,
}) {
  const [text, setText] = useState(null);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          backgroundColor: "#280051",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            source={require("../../assets/goal.png")}
            style={{ width: 100, height: 100, backgroundColor: "#280051" }}
          />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              width: "90%",
              backgroundColor: "#553175",
              borderRadius: 5,
              padding: 10,
              marginTop: 10,
              color: "#fff",
            }}
            placeholder="Your Course GOAL"
            placeholderTextColor="#fff"
            keyboardType="default"
            onChangeText={setText}
            value={text}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 20,
            width: "60%",
          }}
        >
          <Pressable
            style={{
              width: 70,
              height: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8080ff",
            }}
          >
            <Text
              style={{ color: "#fff" }}
              onPress={() => {
                setGoalList((currentGoalList) => [
                  ...currentGoalList,
                  { id: Math.random().toString(), description: text },
                ]);
                setModalVisible(false);
                setText("");
              }}
            >
              ADD
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: 70,
              height: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#9d0004",
            }}
            onPress={() => {
              setModalVisible(false);
              setText("");
            }}
          >
            <Text style={{ color: "#fff" }}>CANCEL</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
