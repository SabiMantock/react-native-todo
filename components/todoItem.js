import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const TodoItem = ({ item, deleteHandler, isChecked, checked }) => {
  return (
    <TouchableOpacity checked={checked} onPress={() => isChecked(item.key)}>
      <View style={styles.item}>
        <MaterialIcons
          name='delete'
          size={18}
          color='#333'
          onPress={() => deleteHandler(item.key)}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 10
  }
})

export default TodoItem
