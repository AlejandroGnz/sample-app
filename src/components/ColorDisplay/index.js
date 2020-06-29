import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {valueToHex} from '../../helpers/colors';

const ColorDisplay = ({red, green, blue, dark}) => {
  const color = dark ? '#fff' : '#000';

  return (
    <View style={styles.container}>
      <Animated.View>
        <Text style={[styles.text, {color}]}>#</Text>
      </Animated.View>
      <Text style={[styles.text, {color}]}>{valueToHex(red)}</Text>
      <Text style={[styles.text, {color}]}>{valueToHex(green)}</Text>
      <Text style={[styles.text, {color}]}>{valueToHex(blue)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  text: {
    fontSize: 50,
  },
});

export default ColorDisplay;
