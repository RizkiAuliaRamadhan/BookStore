import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {fonts, responsiveHeight, responsiveWidth} from '../../../utils';

const List = ({category}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  card: {
    marginTop: responsiveHeight(10),
    alignItems: 'center',
  },
  image: {
    height: responsiveHeight(120),
    width: responsiveWidth(100),
  },
  text: {
    fontFamily: fonts.primary.reguler,
    fontSize: 12,
  },
});
