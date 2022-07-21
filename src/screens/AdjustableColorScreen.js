import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const COLOR_INCREMENT_AMOUNT = 10

const AdjustableColorScreen = () => {
  const [colors, dispatch] = useReducer(colorReducer, {
    red: 0,
    green: 0,
    blue: 0
  })
  console.log(colors)

  return (
    <View>
      <Text>AdjustableColorScreen</Text>
      <View style={{ display: 'flex', padding: 20 }}>
        <ColorAdjuster
          title='Red'
          rgbValue={red}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <ColorAdjuster
          title='Green'
          rgbValue={green}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <ColorAdjuster
          title='Blue'
          rgbValue={blue}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <View
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            height: '20%',
            width: '100%',
            marginTop: 25
          }}
        ></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default AdjustableColorScreen
