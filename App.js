import React, {useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import RNImageEditor from '@wwimmo/react-native-sketch-canvas';
import Slider from '@react-native-community/slider';

const flight = require('./flight.jpg');

const App = () => {
  const ref = useRef();
  const tapRef = useRef();
  return (
    <View style={styles.container}>
      <Image
        source={flight}
        resizeMode="contain"
        style={{width, height: '100%'}}
      />
      <RNImageEditor
        ref={ref}
        containerStyle={styles.canvas}
        canvasStyle={{backgroundColor: 'transparent', flex: 1}}
        defaultStrokeIndex={0}
        strokeComponent={color => (
          <View style={[{backgroundColor: color}, styles.strokeColorButton]} />
        )}
        strokeSelectedComponent={color => {
          return (
            <View
              style={[
                {backgroundColor: color, borderWidth: 2},
                styles.strokeColorButton,
              ]}
            />
          );
        }}
        defaultStrokeWidth={1}
        strokeWidthComponent={next => {
          return (
            <View style={{marginTop: 50}}>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={10}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={v => next(v)}
              />
            </View>
          );
        }}
      />
      <View style={{position: 'absolute', bottom: 100}}>
        <Button
          title="Undo"
          onPress={() => {
            if (ref.current) {
              ref.current.undo();
            }
            if (tapRef.current) {
              tapRef.current.press;
            }
          }}
        />
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  functionButton: {
    position: 'absolute',
    top: 100,
    left: 100,
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'red',
    zIndex: 100,
  },
  strokeColorButton: {
    marginHorizontal: 5,
    marginVertical: 30,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
});

export default App;
