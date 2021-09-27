import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import { getBooksByCategory } from '../../../actions/BookAction';

const List = ({category, navigation, id}) => {
  // redux
  const dispatch = useDispatch();

  // press
  const buttonPress = (id, namaCategory) => {
    // action
    dispatch(getBooksByCategory(id, namaCategory))

    // navigasi
    navigation.navigate('ListBooks')
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        buttonPress(id, category.name);
      }}>
      <Image source={{uri: category.gambar}} style={styles.image} />
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
