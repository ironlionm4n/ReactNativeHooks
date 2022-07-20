import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ComponentsScreen from './ComponentsScreen'

const HomeScreen = props => {
  console.log(props)
  return (
    <ScrollView>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to ListScreen'
          onPress={() => {
            props.navigation.navigate('List')
          }}
          color='#841584'
        />
      </View>
      <View style={styles.button}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Image')
        }}
        style={styles.button}
      ><Text>Navigate to ImageScreen</Text></TouchableOpacity>
      
      </View>
      <View style={styles.button}>
      <TouchableOpacity
        title='Navigate to CounterScreen'
        onPress={() => {
          props.navigation.navigate('Counter')
        }}
        style={styles.button}
      />
      </View>
      <View style={styles.button}>
      <TouchableOpacity
        title='Navigate to ComponentScreen'
        onPress={() => {
          props.navigation.navigate('Component')
        }}
        style={styles.button}
      />
      </View>
      <View style={styles.button}>
      <TouchableOpacity
        title='Navigate to ColorScreen'
        onPress={() => {
          props.navigation.navigate('Color')
        }}
        style={styles.button}
      />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    height: 100,
    marginTop: 32,
    marginBottom: 32
    
  }
})

export default HomeScreen
