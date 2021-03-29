import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {ImageEditor} from '@wwimmo/react-native-sketch-canvas';

const flight = require('./flight.jpg');

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={flight}
        resizeMode="contain"
        style={{width, height: '100%'}}
      />
      <ImageEditor
        style={styles.canvas}
        strokeColor={'black'}
        strokeWidth={7}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
