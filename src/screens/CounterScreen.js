import { View, Text, StyleSheet, Button } from 'react-native'
import { counterReducer } from '../reducers/CounterReducer.js'
import React, { useReducer } from 'react'

const INCREMENT_AMOUNT = 1;
const CounterScreen = () => {
  const [currentCount, dispatch] = useReducer(counterReducer, {
    count: 0
  })

  onHandleCounterChange = (action, payload) => {
    dispatch({type: action, payload: payload})
  }

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <View>
        <Text>Current Count: {currentCount.count}</Text>
        <Button
          title='Increment'
          onPress={() => onHandleCounterChange('INCREMENT',INCREMENT_AMOUNT)
          }
        />
        <Button
          title='Decrement'
          onPress={() => onHandleCounterChange('DECREMENT', INCREMENT_AMOUNT)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
    margin: 20
  }
})

export default CounterScreen
