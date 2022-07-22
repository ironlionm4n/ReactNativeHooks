import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import ColorScreen from './src/screens/ColorScreen'
import CounterScreen from './src/screens/CounterScreen'
import AdjustableColorScreen from './src/screens/AdjustableColorScreen'
import TextInputScreen from './src/screens/TextInputScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Colors: ColorScreen,
    Counter: CounterScreen,
    Adjustable: AdjustableColorScreen,
    Text: TextInputScreen,
  },
  {
    initialRouteName: 'Text',
    defaultNavigationOptions: {
      title: 'LigmaBawls'
    }
  }
)

export default createAppContainer(navigator)
