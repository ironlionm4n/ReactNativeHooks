import { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TextInputForm = ({ title, isPassword }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        onChangeText={text => isPassword ? setPassword(text) : setName(text)}
        value={isPassword ? password : name}
      />
     {isPassword && password.length < 5 && <Text>Password must be more than 5 characters</Text>}
     {!isPassword && <Text>Hello {name} nice to meet you</Text>}
    </View>
  )
}

export const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgrey',
    margin: 15,
    borderColor: 'grey',
    borderWidth: 2,
    height: 50,
    fontSize: 22,
    paddingLeft: 10
  }
})

export default TextInputForm
