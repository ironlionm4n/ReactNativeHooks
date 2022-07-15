import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ComponentsScreen from './ComponentsScreen'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
      <ComponentsScreen />
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
