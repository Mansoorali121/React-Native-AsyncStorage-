import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const First = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: 'red' },
          animatedbox,
        ]}
      ></Animated.View>
      <Button
        title="Animated X "
        onPress={() => {
          if (x.value == 100) {
            x.value = withTiming(0, { duration: 500 });
          } else {
            x.value = withTiming(100, { duration: 500 });
          }
        }}
      />

      <Button
        title="Animated Y "
        onPress={() => {
          if (y.value == 100) {
            y.value = withTiming(0,{duration:500})
          } else {
             y.value = withTiming(100,{duration:500})
          }
        }}
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
  },
});
