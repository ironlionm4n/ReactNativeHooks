import { View } from 'react-native'
import TextInputForm from '../components/TextInputForm'

const TextInputScreen = () => {
  return (
    <View>
      <TextInputForm title='Enter Name' isPassword={false}/>
      <View style={{height: 40, width: '100%'}}></View>
      <TextInputForm title='Enter Password' isPassword={true}/>
    </View>
  )
}

export default TextInputScreen
