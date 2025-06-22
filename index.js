/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Home from './src/screens/Home';
import { useSharedValue } from 'react-native-reanimated';
import Transform from './src/AnimationScreens/Transform';
import AnimationMethods from './src/AnimationScreens/AnimationMethods';

AppRegistry.registerComponent(appName, () => AnimationMethods);
