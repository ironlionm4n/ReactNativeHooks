import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ColorAdjuster = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>{props.title}</Text>
      <TouchableOpacity style={{padding: 10}}>
        <Text style={{backgroundColor: 'black', color: 'white'}}>
            Increase {props.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{backgroundColor: 'black', color: 'white'}}>
            Decrease {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ColorAdjuster

const styles = StyleSheet.create({})