import { useState } from "react"
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import TodoItem from "./TodoItem";
import { Todo } from "./type";


const TodoApp= () => {

const [task, setTask] = useState('');
const [todos, setTodos] = useState<Todo[]>([]);


const addTask = ()=> {
    if(task.trim()){
        setTodos([...todos, {id: Date.now().toString(), title: task}]);
        setTask('');
        Keyboard.dismiss();
    }
};


const deleteTask = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
}


return(

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={styles.heading}>Madara's Todo List</Text>
        <TextInput 
        style={styles.input}
        placeholder="Enter your task"
        value={task}
        onChangeText={(text) => setTask(text)}/>
        <Button title="Add Task" onPress={addTask}/>
<FlatList data={todos}
keyExtractor={(item) => item.id}
renderItem={({item}) => (
    <TodoItem item={item} onDelete={deleteTask} />
)}
/>
  </View>
</TouchableWithoutFeedback>


);

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
});

export default TodoApp;