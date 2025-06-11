import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Todo } from "./type";

type Props = {
  item: Todo;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.id)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});

export default TodoItem;
