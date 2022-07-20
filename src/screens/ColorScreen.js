import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = () => {
  const [randomColors, setRandomColor] = useState([])
  console.log(randomColors)
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    if (red === 256) {
      red = 255
    } else if (green === 256) {
      green = 255
    } else if (blue === 256) {
      blue = 255
    }

    return `rgb(${red},${green},${blue})`
  }
  return (
    <View style={{flex: 1, padding: 20, maxHeight: 700}}>
      <Button title='Add a Color' onPress={() => setRandomColor([...randomColors, randomRgb()])}/>
      
      <FlatList keyExtractor = {item => item} data={randomColors} renderItem={({ item }) => {
        console.log(item)
        return <View style={{height: 100, width: 100, backgroundColor: item}} />
      }} />
    </View> 
  )
}

export default ColorScreen

const styles = StyleSheet.create({})