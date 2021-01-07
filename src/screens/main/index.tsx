import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import ButtonGroup from '../../components/button/group';
import City from '../../components/text/city';
import DateTime from '../../components/text/datetime';

const imageBackgroundRooster = require('../../components/images/background/rooster.png');

const MainScreen = () => {
  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={imageBackgroundRooster}>
        <City />
        <DateTime />
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
