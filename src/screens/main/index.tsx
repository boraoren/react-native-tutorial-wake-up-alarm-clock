import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ButtonGroup from '../../components/button/group';
import City from '../../components/text/city';
import DateTime from '../../components/text/datetime';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';

const imageBackgroundRooster = require('../../components/images/background/rooster.png');

const MainScreen = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => setLocation(info));
  }, []);

  const hereMapAPI = Config.HERE_MAP_API;

  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={imageBackgroundRooster}>
        <City />
        <Text>{JSON.stringify(location)}</Text>
        <DateTime />
        <Text>{hereMapAPI}</Text>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup button1Title={'Snooze'} button2Title={'Dismiss'} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 900,
  },
  buttonGroupWrapper: {
    marginTop: 620,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default MainScreen;
