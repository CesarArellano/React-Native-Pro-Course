import React from 'react';
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

interface Props {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const PrimaryButton = ({text, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
