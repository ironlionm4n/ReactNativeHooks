import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ComponentsScreen from './ComponentsScreen'

const HomeScreen = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
      <Button title="Navigate to ListScreen" onPress={()=>{props.navigation.navigate("List")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default HomeScreen
