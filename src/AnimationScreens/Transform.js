import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import CButton from '../components/CButton';

const Transform = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rotate = useSharedValue("0deg");
  const scale = useSharedValue(1);

  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }, {
        rotate:rotate.value 
      },
    {scale:scale.value}],
    };
  });
  return (
    <View
      style={
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap:20
        }
        }
    >
      <Animated.View
        style={[{ width: 140, height: 140, backgroundColor: 'blue' },
            animatedbox
        ]}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          Transform
        </Text>
      </Animated.View>
      <CButton 
        title="Transform Left Right "
        onPress={() => {
          if (x.value == 100) {
            x.value = withTiming(0,{transform:500});
          } else {
             x.value = withTiming(100,{transform:500});
          }
        }}
      />

      <CButton title="Tranform to Up and Down"  bg="blue" onPress={() => {
        if(y.value == 100){
            y.value = withTiming(0,{transform:500})
        } else {
            y.value = withTiming(100,{transform:500})
        }
      }}/>  <CButton title="Rotation"  bg="red" onPress={() => {
        if(rotate.value == "180deg"){
            rotate.value = withTiming("0deg",{transform:500})
        } else {
            rotate.value = withTiming("180deg",{transform:500})
        }
      }}/>

      {/* <CButton title="Scale"  bg="red" onPress={() => {
        if(scale.value == 3){
            scale.value = withTiming(1,{transform:500})
        } else {
            scale.value = withTiming(3,{transform:500})
        }
      }}/> */}

       <CButton title="Scale"  bg="red" onPress={() => {
        if(scale.value == 2){
            scale.value = withSpring(1)
        } else {
            scale.value = withSpring(2)
        }
      }}/>



    </View>
  );
};

export default Transform;

const styles = StyleSheet.create({});
