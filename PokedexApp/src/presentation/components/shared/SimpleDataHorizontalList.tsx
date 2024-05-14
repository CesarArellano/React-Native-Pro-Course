import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  headerText: string;
  data: ArrayLike<any> | null | undefined;
}

export const SimpleDataHorizontalList = ({headerText, data}: Props) => {
  return (
    <>
      <Text variant="headlineSmall">{headerText}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item}
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Text style={styles.item}>{Formatter.capitalize(item)}</Text>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  horizontalList: {
    marginTop: 5,
    height: 18,
  },
  item: {
    marginRight: 20,
  },
});
