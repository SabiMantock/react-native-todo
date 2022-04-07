import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

const AddTodo = ({ submit }) => {
  const [text, setText] = useState('')

  const changeHandler = val => {
    setText(val)
  }

  const clearInput = () => {
    setText(' ')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          submit(text), clearInput(text)
        }}
        title='add todo'
        color='coral'
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
})

export default AddTodo
