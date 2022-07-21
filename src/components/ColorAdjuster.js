import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ColorAdjuster = ({ title, handleColorAdjustment }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>{title}</Text>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          handleColorAdjustment(title.toLowerCase(), 15)
        }}
      >
        <Text style={{ backgroundColor: 'black', color: 'white' }}>
          Increase {title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleColorAdjustment(title.toLowerCase(), -15)
        }}
      >
        <Text style={{ backgroundColor: 'black', color: 'white' }}>
          Decrease {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ColorAdjuster

const styles = StyleSheet.create({})
