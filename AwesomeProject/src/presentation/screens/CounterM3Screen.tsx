import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <View style={globalStyles.centerContainer}>
      {/* <Icon name="accessibility-outline" size={30} /> */}
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        icon="add"
        style={globalStyles.fab}
        onPress={handleCount}
        onLongPress={onReset}
      />
    </View>
  );
};
