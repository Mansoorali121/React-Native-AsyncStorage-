import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
    Extrapolation,
    interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const First = () => {
  const x = useSharedValue(0);
    const y = useSharedValue(0);



  const animatedbox = useAnimatedStyle(() => {
    const opacity = interpolate(x.value,[0,100], [1,0], Extrapolation.CLAMP)
    const height = interpolate(x.value,[0,50,100], [100,50,20], Extrapolation.CLAMP )


    const opacity2 = interpolate(y.value,[0,100], [1,0], Extrapolation.CLAMP)
    const height2 = interpolate(y.value,[0,50,100], [100,50,20], Extrapolation.CLAMP )
    return {
      transform: [{ translateX: x.value }, {translateY:y.value}],
      opacity,
      height,
      opacity2,
      height2,
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
        title="Animated Interpolate "
        onPress={() => {
          if (x.value == 100) {
            x.value = withTiming(0, { duration: 1000 });
          } else {
            x.value = withTiming(100, { duration: 1000 });
          }
        }}
      />

       <Button
        title="Animated For y  "
        onPress={() => {
          if (y.value == 100) {
            y.value = withTiming(0, { duration: 1000 });
          } else {
            y.value = withTiming(100, { duration: 1000 });
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
