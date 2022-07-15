import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {
  const friends = [
    { name: 'Mike', id: '0' },
    { name: 'Mike', id: '1' },
    { name: 'Mike', id: '2' },
    { name: 'Mike', id: '3' },
    { name: 'Mike', id: '4' },
    { name: 'Mike', id: '5' },
    { name: 'Mike', id: '6' },
    { name: 'Mike', id: '7' },
    { name: 'Mike', id: '8' },
    { name: 'Mike', id: '9' },
    { name: 'Mike', id: '10' },
    { name: 'Mike', id: '11' }
  ]

  // element has props => item: {...} index: number
  return (
    <View>
      <FlatList
        keyExtractor={friend => friend.id}
        data={friends}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
      <TouchableOpacity>
        <Text
          style={styles.textStyle}
          onPress={() => {
            Alert.alert('New Alert', 'You pressed touchable', [
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK Pressed')
                },
                style: 'cancel'
              },
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed') }
            ])
          }}
        >
          Touchable
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: { fontSize: 30 },
  container: { flex: 1, backgroundColor: 'pink' }
})

export default ListScreen
