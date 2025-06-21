import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CButton from '../components/CButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

let data = { Name: 'Mansoor', age: '12' };
let data2 = { Name: 'Sahito', age: '20', gender: 'Male' };
const Home = () => {
  const [value, setValue] = useState([]);
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current?.focus();
  }, []);

  const savedData = async () => {
    try {
      await AsyncStorage.setItem('Data', JSON.stringify(data2));
      Alert.alert('Data Saved');
    } catch (error) {
      Alert.alert('Error Saving Data', error);
    }
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('Data');
      const parsedData = JSON.parse(name);
      setValue(parsedData);
      Alert.alert('Data Fetched', name);
    } catch (error) {
      Alert.alert('ALert Fetching Data', error);
    }
  };

  return (
    <View style={styles.container}>
      <CButton title="Save Data" onPress={savedData} />
      <CButton title="Get Data" onPress={getData} />

      <Text> Saved Date: {JSON.stringify(value)}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    gap: 30,
  },
  input: {
    width: '80%',
    padding: 20,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
  },
});
