import { AppRegistry } from 'react-native'
import App from './components/App'

class Root extends App {}

Root.defaultProps = {
  ...App.defaultProps,
  instructions: 'Shake or press menu button for dev menu',
}

AppRegistry.registerComponent('App', () => Root)
