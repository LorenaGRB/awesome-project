import React, { useState } from "react";
import { View } from "react-native";
import ModalInput from "./components/Modal";
import Header from "./components/Header";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);
  const onDeleteGoal = (id) => {
    setGoalList((goalList) => {
      return goalList.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View
      style={{
        backgroundColor: "#280051",
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
        paddingTop: 50,
        padding: 10,
      }}
    >
      <StatusBar style="light" />
      <Header setModalVisible={setModalVisible} />
      <GoalList goalList={goalList} onDeleteGoal={onDeleteGoal} />
      <ModalInput
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setGoalList={setGoalList}
      />
    </View>
  );
}

export default App;
