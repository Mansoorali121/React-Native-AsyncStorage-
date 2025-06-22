import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimationMethods = () => {
  const animation = useSharedValue(0);

  const animatedBox = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: 'red' },
          animatedBox,
        ]}
      ></Animated.View>
      <Button
        title="UseWith Timing"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withTiming(0, { duration: 500 });
          } else {
            animation.value = withTiming(100, { duration: 500 });
          }
        }}
      />

       <Button
        title="UseWith Spring"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withSpring(0);
          } else {
            animation.value = withSpring(100);
          }
        }}
      />

       <Button
        title="UseWith Spring"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withDelay(500, withSpring(0));
          } else {
            animation.value = withDelay(500, withSpring(100));
          }
        }}
      />
    </View>
  );
};

export default AnimationMethods;

const styles = StyleSheet.create({});
