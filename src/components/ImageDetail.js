import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = props => {
  console.log(props)
  const { imageTitle, imageSource } = props

  return (
    <View >
      <Image source={imageSource} />
      <Text>{imageTitle}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  }
})
