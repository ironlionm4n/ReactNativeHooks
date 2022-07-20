import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {
  const [currentCount, setCurrentCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <View>
        <Text>Current Count: {currentCount}</Text>
        <Button
          title='Increment'
          onPress={() =>
            setCurrentCount(prevState => {
              console.log('PrevState: currentCount', currentCount)
              return (prevState + 1)
            })
          }
        />
        <Button
          title='Decrement'
          onPress={() => setCurrentCount(currentCount - 1)}
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
    backgroundColor: 'red'
  }
})

export default CounterScreen
