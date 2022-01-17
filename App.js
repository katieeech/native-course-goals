import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
    // setCourseGoals((currentGoals) => [
    //   ...currentGoals,
    //   { id: Math.random().toString(), value: goalTitle },
    // ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  };
  // const removeGoalHandler = (goalId) => {
  //   setCourseGoals((currentGoals) => {
  //     return currentGoals.filter((goal) => goal.id !== goalId);
  //   });
  // };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        isAddMode={isAddMode}
        addGoalHandler={addGoalHandler}
        cancelGoalAdditionHandler={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            removeGoalHandler={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
