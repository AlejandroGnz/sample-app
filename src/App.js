import React, {useCallback, useState} from 'react';
import Button from './components/Button';
import {colorIsDark, generateColor} from './helpers/colors';
import ColorDisplay from './components/ColorDisplay';
import BackgroundColor from './components/BackgroundColor';

const App = () => {
  const [color, setColor] = useState(generateColor());

  const handlePress = useCallback(() => {
    setColor(generateColor());
  }, []);

  const {red, green, blue} = color;
  const isDark = colorIsDark(red, green, blue);

  return (
    <BackgroundColor color={color}>
      <ColorDisplay {...color} dark={isDark} />
      <Button onPress={handlePress} dark={isDark} />
    </BackgroundColor>
  );
};

export default App;
