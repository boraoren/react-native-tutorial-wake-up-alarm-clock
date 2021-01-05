import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
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
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 900,
  },
});

export default MainScreen;
