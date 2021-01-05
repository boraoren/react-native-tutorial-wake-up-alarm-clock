import React from 'react';
import {StyleSheet, Text} from 'react-native';

const City = () => {
  return <Text style={styles.city}>Melbourne</Text>;
};

const styles = StyleSheet.create({
  city: {
    fontSize: 45,
    marginTop: 50,
    textAlign: 'center',
  },
});

export default City;
