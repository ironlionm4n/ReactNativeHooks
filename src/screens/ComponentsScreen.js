import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const ComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    display: 'flex',
    backgroundColor: 'red'
  }
})

export default ComponentsScreen
