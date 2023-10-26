import React from "react";
import { Text, View, Pressable } from "react-native";

export default function Header({ setModalVisible }) {
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ color: "#fff" }}>My Goals</Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          padding: 10,
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8080ff",
        }}
      >
        <View>
          <Text style={{ color: "#fff" }}>+</Text>
        </View>
      </Pressable>
    </View>
  );
}
