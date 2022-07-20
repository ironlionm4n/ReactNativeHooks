import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const AdjustableColorScreen = () => {
    return (
        <View>
            <Text>
                AdjustableColorScreen
            </Text>
            <View style={{display: 'flex', padding: 20}}>
                <ColorAdjuster title="Red"/>
                <ColorAdjuster title="Green"/>
                <ColorAdjuster title="Blue"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AdjustableColorScreen