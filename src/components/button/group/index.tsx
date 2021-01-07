import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../custom';

const ButtonGroup = ({
  button1Title,
  button2Title,
}: {
  button1Title: string;
  button2Title: string;
}) => {
  return (
    <View style={styles.buttonGroup}>
      <CustomButton title={button1Title} />
      <CustomButton title={button2Title} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ButtonGroup;
