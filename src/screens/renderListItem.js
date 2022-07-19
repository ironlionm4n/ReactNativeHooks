import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const renderListItem = (props)=> {
  console.log('renderListItem:',props)
  const {item} = props
  return (
    <View>
      <Text style={textStyle}>Name {item.name}</Text>
      <Text style={textStyle}>Age {item.age}</Text>
    </View>
  )
}

const textStyle = StyleSheet.create({
  marginVertical: 15,
  marginBottom: 15,
  marginHorizontal: 10,
  fontSize: 25
})

const containerStyle = StyleSheet.create({
  
})
