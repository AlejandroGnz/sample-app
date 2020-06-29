import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({dark, ...rest}) => {
  const color = dark ? '#fff' : '#000';

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.buttonContainer, {borderColor: color}]}>
      <Text style={[styles.text, {color}]}>Generate Color</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 2,
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
