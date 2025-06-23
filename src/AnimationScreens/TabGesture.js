// import { Image, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import Animated, { runOnJS } from 'react-native-reanimated';
// import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// const TabGesture = () => {

//     const [liked, setLiked] = useState(false);

//     const updateLike = () => {
//         setLiked(!liked);
//     };
//     const gestureHandler = Gesture.Tap()
//     .numberOfTaps(1)
//     .onEnd(() => {
//         runOnJS(updateLike)();
//     });

//   return (
//     <GestureHandlerRootView style={{flex:1, alignItems:"center", justifyContent:"center"}}>
//       <GestureDetector gesture={gestureHandler} >
//         <Animated.Image  source= { liked ? require("../../src/screens/heart.png"):
//         require("../../src/screens/fav.png")
//       }
//       style={{height:120, width:120}}
//       />
//       </GestureDetector>
//     </GestureHandlerRootView>
//   )
// }

// export default TabGesture;

// const styles = StyleSheet.create({})

import { Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  runOnJS,
  createAnimatedComponent,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

// Correctly wrap Image

const TabGesture = () => {
  const [liked, setLiked] = useState(false);

  const yvalue = useSharedValue(0);

  const scale = useSharedValue(1);

  const updateLike = () => {
    if (!liked) {
      setLiked(true);
      yvalue.value = withTiming(-200, { duration: 300 });
      scale.value = withTiming(1.5, { duration: 150 });
      setTimeout(() => {
        scale.value = withTiming(1, { duration: 150 });
        yvalue.value = withTiming(0, { duration: 300 });
      }, 300);
    } else {
      setLiked(false);
    }
  };

  const animatedstyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yvalue.value }, { scale: scale.value }],
    };
  });

  const gestureHandler = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(() => {
      runOnJS(updateLike)();
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gestureHandler}>
        <Animated.Image
          source={
            liked
              ? require('../../src/screens/fav.png')
              : require('../../src/screens/heart.png')
          }
          style={[{ height: 120, width: 120 }, animatedstyle]}
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default TabGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
