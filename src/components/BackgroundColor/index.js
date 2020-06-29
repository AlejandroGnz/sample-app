import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import usePrevious from '../../hooks/usePrevious';

const buildColor = ({red, green, blue}) => `rgb(${red}, ${green}, ${blue})`;

const BackgroundColor = ({children, color}) => {
  const prevColor = usePrevious(color);
  const value = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    value.setValue(0);
    Animated.timing(value, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [color, value]);

  const outputRange = [];
  if (prevColor) {
    outputRange.push(buildColor(prevColor));
  } else {
    outputRange.push(buildColor(color));
  }
  outputRange.push(buildColor(color));

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: value.interpolate({
            inputRange: [0, 1],
            outputRange,
          }),
        },
      ]}>
      <View>{children}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackgroundColor;
