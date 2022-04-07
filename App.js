import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useState } from 'react'
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App () {
  const [todos, setTodos] = useState([])
  const { checked, setChecked } = useState(false)

  const deleteHandler = key => {
    setTodos(prev => {
      return prev.filter(todo => todo.key != key)
    })
  }

  const isChecked = key => {
    console.log(key, 'checked')
  }

  const submit = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text: text, key: Math.random().toString(), checked: checked },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submit={submit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  deleteHandler={deleteHandler}
                  isChecked={isChecked}
                  checked={checked}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,

    flex: 1
  },
  list: {
    marginTop: 20,

    flex: 1
  }
})
