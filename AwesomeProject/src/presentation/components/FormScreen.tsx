import React, {useState, useEffect, useCallback} from 'react';
import {View, TextInput, Button, StyleSheet, FlatList} from 'react-native';

interface InputElement {
  key: number;
  value: string;
  placeholder: string;
  hasAnError: boolean;
}

export const FormScreen = () => {
  const [inputs, setInputs] = useState<InputElement[]>([]);

  useEffect(() => {
    generateElements();
  }, []);

  const generateElements = useCallback(() => {
    const inputLength = inputs.length;
    let currentList = [...inputs];

    for (let i = inputLength; i < inputLength + 2; i++) {
      const inputElement = {
        key: i + 1,
        value: '',
        placeholder: i % 2 === 0 ? 'Name' : 'Surname',
        hasAnError: false,
      };
      currentList.push(inputElement);
    }

    setInputs(currentList);
  }, [inputs]);

  const onChangeValue = useCallback((key: number, newValue: string) => {
    setInputs(prevInputs =>
      prevInputs.map(input =>
        input.key === key
          ? {...input, value: newValue, hasAnError: newValue.length === 0}
          : input,
      ),
    );
  }, []);

  const validateInputFields = useCallback(() => {
    setInputs(prevInputs =>
      prevInputs.map(input => ({
        ...input,
        hasAnError: input.value.length === 0,
      })),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={inputs}
        keyExtractor={item => item.key.toString()}
        renderItem={({item}) => {
          const {key, value, placeholder, hasAnError} = item;
          return (
            <TextInput
              style={[
                styles.textInput,
                {borderColor: hasAnError ? 'red' : 'black'},
              ]}
              key={key}
              value={value}
              placeholder={placeholder}
              onChangeText={text => onChangeValue(key, text)}
            />
          );
        }}
      />
      <View style={styles.buttonGroup}>
        <Button title="Add new button group" onPress={generateElements} />
        <Button title="Validate" onPress={validateInputFields} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80, // Adjusting padding to avoid overlap with buttons
  },
  textInput: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
});
