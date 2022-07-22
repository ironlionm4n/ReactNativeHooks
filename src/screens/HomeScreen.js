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
        >
          <Text style={styles.text}>Navigate to ListScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Image')
          }}
        >
          <Text style={styles.text}>Navigate to ImageScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to CounterScreen'
          onPress={() => {
            props.navigation.navigate('Counter')
          }}
        >
          <Text style={styles.text}>Navigate to CounterScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to ComponentScreen'
          onPress={() => {
            props.navigation.navigate('Component')
          }}
        >
          <Text style={styles.text}>Navigate to ComponentScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to ColorScreen'
          onPress={() => {
            props.navigation.navigate('Colors')
          }}
        >
          <Text style={styles.text}>Navigate to ColorScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to ColorScreen'
          onPress={() => {
            props.navigation.navigate('Adjustable')
          }}
        >
          <Text style={styles.text}>Navigate to AdjustableColorScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          title='Navigate to ColorScreen'
          onPress={() => {
            props.navigation.navigate('Text')
          }}
        >
          <Text style={styles.text}>Navigate to TextInputScreen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  button: {
    backgroundColor: '#fff',
    width: '90%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: .5,
    shadowRadius: 10,
    flexDirection: 'column',
  },
  text: {
    fontSize: 22
  }
})

export default HomeScreen
