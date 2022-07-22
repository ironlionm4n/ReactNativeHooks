import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjusterButtons from '../components/ColorAdjusterButtons'
import colorReducer  from '../reducers/ColorsReducer'

const AdjustableColorScreen = () => {
  // dispatch runs the reducer
  const [colors, dispatch] = useReducer(colorReducer, {
    red: 0,
    green: 0,
    blue: 0
  })
  const onHandleColorAdjustment = (action, payload) => {
    dispatch({ type: action, payload: payload })
  }
console.log(colors)
  return (
    
    <View>
      <Text>AdjustableColorScreen</Text>
      <View style={{ display: 'flex', padding: 20 }}>
        <ColorAdjusterButtons
          title='Red'
          rgbValue={colors.red}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <ColorAdjusterButtons
          title='Green'
          rgbValue={colors.green}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <ColorAdjusterButtons
          title='Blue'
          rgbValue={colors.blue}
          handleColorAdjustment={onHandleColorAdjustment}
        />
        <View
          style={{
            backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
            height: '40%',
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
