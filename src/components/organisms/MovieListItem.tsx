import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageAtom, TextAtom, TouchAbleOpAtom } from '../atoms';

type Props = {
  item: any
  onPress: (item: any) => void
}

export const MovieListItem = React.memo(({ item, onPress }:Props) => {
  return (
    <TouchAbleOpAtom style={styles.rBox} onPress={() => onPress(item)} accessibilityRole="button">
      <ImageAtom style={styles.imgSt} source={{ uri: item?.info?.image_url}} resizeMode="contain" />

      <View style={styles.item}>
        <View style={styles.firstRow}>
          <TextAtom style={styles.title}>{item.title}</TextAtom>
        </View>
        <View style={styles.secondRow}>
          <TextAtom>{item.year}</TextAtom>
        </View>
      </View>
    </TouchAbleOpAtom>
  );
});

const styles = StyleSheet.create({
  imgSt: { width: 55, height: 55 },
  rBox: {
    flexDirection: 'row', alignItems: 'center',
  },
  item: {
    paddingRight: 10,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  firstRow: {
    marginTop: 5,
    marginBottom: 5,
  },
  secondRow: {
    marginBottom: 10,
  },
  title: { fontWeight: 'bold' },
});
