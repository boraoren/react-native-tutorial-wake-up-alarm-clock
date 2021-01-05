import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DateTime = () => {
  return (
    <View style={styles.dateTime}>
      <Text style={styles.date}>25/12/2020</Text>
      <Text style={styles.time}>07:00 p.m.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    fontSize: 20,
    marginRight: 2,
  },
  time: {
    fontSize: 20,
    marginLeft: 2,
  },
});

export default DateTime;
