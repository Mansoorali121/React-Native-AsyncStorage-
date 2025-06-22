import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CButton = ({onPress, title, bg}) => {
  return (
    <Pressable onPress={onPress}
      style={{
        backgroundColor:bg || "black",
        padding: 20,
        width: '80%',
        borderWidth: 0.8,
        borderRadius: 20,
      }}
    >
      <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CButton;

const styles = StyleSheet.create({});
