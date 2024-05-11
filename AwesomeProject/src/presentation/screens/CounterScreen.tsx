import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Pressable onPress={handleCount} onLongPress={onReset}>
        <Text>+1</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    color: 'black',
  },
});
