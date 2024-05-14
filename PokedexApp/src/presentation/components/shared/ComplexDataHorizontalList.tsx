import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Formatter} from '../../../config/helpers/formatter';

export interface MergedData {
  name: string;
  value: number;
}

interface Props {
  headerText: string;
  data: ArrayLike<MergedData> | null | undefined;
}

export const ComplexDataHorizontalList = ({headerText, data}: Props) => {
  return (
    <>
      <Text variant="headlineSmall">{headerText}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.name}
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.columnContainer}>
            <Text>{Formatter.capitalize(item.name)}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  item: {
    marginRight: 20,
  },
  horizontalList: {
    marginTop: 5,
    height: 30,
  },
});
