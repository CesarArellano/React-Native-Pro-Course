import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';

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
      <PrimaryButton
        text="Incrementar"
        onPress={handleCount}
        onLongPress={onReset}
      />
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
    fontSize: 50,
    color: 'black',
  },
});
