import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const forestImg = require('../../assets/forest.jpg')
    const beachImg = require('../../assets/beach.jpg')
    const mountainImg = require('../../assets/mountain.jpg')
  return (
    <View>
      <ImageDetail imageTitle="Forest" imageSource={forestImg}/>
      <ImageDetail imageTitle="Beach" imageSource={beachImg}/>
      <ImageDetail imageTitle="Mountain" imageSource={mountainImg}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1
    }
})

export default ImageScreen