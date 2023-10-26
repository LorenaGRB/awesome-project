import React from "react";
import { Pressable, Text, View } from "react-native";

export default function GoalList({ goalList, onDeleteGoal }) {
  return (
    <View
      style={{
        marginTop: 20,
        border: "1px solid #FFF",
        width: "100%",
        marginBottom: 20,
        flex: 1,
      }}
    >
      {goalList.map((goal) => {
        return (
          <Pressable onPress={() => onDeleteGoal(goal.id)} key={goal.id}>
            <View
              key={goal.id}
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: "#553175",
              }}
            >
              <Text style={{ color: "#fff" }}>{goal.description}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
