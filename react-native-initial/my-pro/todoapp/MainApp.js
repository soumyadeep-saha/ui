import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
export default function MainApp() {

  const [showModal, setShowModal] = useState(false);
  const [myGoals, setMyGoals] = useState([]);

  function showModalValue() {
    setShowModal(true);
  }
  function endModalHandler() {
    setShowModal(false);
  }

  function addTaskHandler(enteredText) {
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endModalHandler();
  }
  function deleteTask(id) {
    //console.log('deleted');
    setMyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <Button title="Add new Task" color="blue" onPress={showModalValue} />

      {showModal && (
        <TaskInput
          visible={showModal}
          onAddTask={addTaskHandler}
          onCancel={endModalHandler}
        />
      )}
      <View style={styles.taskContainer}>
        <FlatList
          data={myGoals}
          renderItem={(itemdata) => {
            return (
              <TaskItem
                text={itemdata.item.text}
                id={itemdata.item.id}
                od={deleteTask}
              />
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "darkpink",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  taskContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  taskText: {
    color: "white",
  },
});
