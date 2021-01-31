import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ButtonGroup from '../../components/button/group';
import City from '../../components/text/city';
import DateTime from '../../components/text/datetime';

import Config from 'react-native-config';
import {useLocation} from '../../hooks/useLocation';

const imageBackgroundRooster = require('../../components/images/background/rooster.png');

const MainScreen = () => {
  const {location} = useLocation();

  const [hereApiResult, setHereApiResult] = useState({});

  useEffect(() => {
    fetch(
      `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=41.8842%2C-87.6388%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${Config.HERE_MAP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((json) =>
        setHereApiResult(json.Response.View[0].Result[0].Location.Address.City),
      );
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={imageBackgroundRooster}>
        <City />
        <Text>{JSON.stringify(location)}</Text>
        <DateTime />
        <Text>{JSON.stringify(hereApiResult)}</Text>
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
