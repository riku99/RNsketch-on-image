import React, {useRef, useState} from 'react';
import {View, Image, Dimensions, StyleSheet, Text, Button} from 'react-native';
import RNImageEditor from '@wwimmo/react-native-sketch-canvas';

const flight = require('./flight.jpg');

const App = () => {
  const [strokeW, setStrokeW] = useState(20);
  const ref = useRef();
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
        strokeWidthComponent={w => {
          return (
            <View style={styles.strokeWidthButton}>
              <View
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 5,
                  height: Math.sqrt(w / 3) * 5,
                  borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                }}
              />
            </View>
          );
        }}
        strokeWidthStep={0.5}
      />
      <View style={{position: 'absolute', bottom: 100}}>
        <Button
          title="Undo"
          onPress={() => {
            if (ref.current) {
              ref.current.undo();
              setStrokeW(5);
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
