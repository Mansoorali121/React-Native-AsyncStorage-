/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Home from './src/screens/Home';
import First from './src/AnimationScreens/First';
import { useSharedValue } from 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => useSharedValue);
