import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, Button } from 'react-native'
import { renderListItem } from './renderListItem'

const ListScreen = (props) => {
  const {navigation} = props
  const [count, setCount] = useState(0)
  const [hasPressed, setHasPressed] = useState(false)

  const friends = [
    { name: 'Mike', id: '00', age: Math.random() },
    { name: 'Mike', id: '01', age: Math.random() },
    { name: 'Mike', id: '02', age: Math.random() },
    { name: 'Mike', id: '03', age: Math.random() },
    { name: 'Mike', id: '04', age: Math.random() },
    { name: 'Mike', id: '05', age: Math.random() },
    { name: 'Mike', id: '06', age: Math.random() },
    { name: 'Mike', id: '07', age: Math.random() },
    { name: 'Mike', id: '08', age: Math.random() },
    { name: 'Mike', id: '09', age: Math.random() },
    { name: 'Mike', id: '10', age: Math.random() },
    { name: 'Stev', id: '11', age: Math.random() }
  ]

  useEffect(() => {
    console.log(
      'Count is set before hasPressed is set and is inside the dependency array so useEffect will run once inbetween ',
      `HasPressed: ${hasPressed}`
    )

    return console.log('cleanup function ran')
  }, [hasPressed, count])

  // element has props => item: {...} index: number
  return (
    <View style={styles.container}>
    <Button title="button title" onPress={() => {
      Alert.alert("standard button alert", "thank you for pressing this simple button", [{text: "OK", onPress: () => {}}])
    }}/>
      <FlatList
        vertical
        showsVerticalScrollIndicator={true}
        keyExtractor={friend => friend.id}
        data={friends}
        renderItem={renderListItem} // renderListItem is given the 'item' implicitly....?
      />
      <TouchableOpacity style={{backgroundColor: 'yellow', alignItems: 'center', padding: 10, width: '100%'}} onPress={() => {
            Alert.alert('New Alert', 'You pressed touchable', [
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK Pressed: ', count)
                  setCount(prevState => {
                    console.log('PrevCountState: ', prevState)
                    return prevState + 1
                  })
                  setHasPressed(prevState => {
                    console.log('PrevPressedState: ', prevState)
                    return true
                  })
                },
                style: 'cancel'
              },
              { text: 'Cancel', onPress: () => navigation.navigate('Home') }
            ])
          }}>
        <Text
          style={styles.textStyle}
   
        >
          {`Pressed ${count}`}
        </Text>
      </TouchableOpacity>
      <Button title='Navigate to Components Screen' onPress={()=> navigation.navigate('Components')} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, },
  container: { flex: 1, backgroundColor: 'pink', margin: 15 }
})

export default ListScreen
