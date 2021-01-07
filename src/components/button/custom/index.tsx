import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({title}: {title: string}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 190,
    height: 90,
    borderRadius: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 34,
    color: '#FFF',
  },
});

export default CustomButton;
