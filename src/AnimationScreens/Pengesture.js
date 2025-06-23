import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Pengesture = () => {
  const translatex = useSharedValue(0);
  const translatey = useSharedValue(0);

  const savedx = useSharedValue(0);
  const savedy = useSharedValue(0);

  const gesturehandler = Gesture.Pan()
    .onStart(() => {
    })
    .onUpdate((e) => {
      translatex.value = savedx.value+e.translationX
      translatey.value = savedy.value+e.translationY
    })
    .onEnd(() => {
      savedx.value = translatex.value
      savedy.value = translatey.value
    });

  const animatedstyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translatex.value },
        { translateY: translatey.value },
      ],
    };
  });
  return (
    <GestureHandlerRootView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <GestureDetector gesture={gesturehandler}>
        <Animated.View
          style={[{
            backgroundColor: 'orange',
            height: 150,
            width: 150,
            borderRadius: 20,
          }, animatedstyle]}
        ></Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Pengesture;

const styles = StyleSheet.create({});
