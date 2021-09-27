import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {Colors, fonts, formatNumber, responsiveHeight, responsiveWidth} from '../../../utils';

const CardBook = ({list, warna, navigation}) => {
  return (
    <TouchableOpacity style={styles.listBook} onPress={() => {navigation.navigate("BookDetail", {list})}}>
      <View style={styles.wrapperImage(warna)}>
        <Image source={{uri: list.image[0]}} style={styles.image} resizeMode="center" />
      </View>
      <Text style={styles.text}>{list.name}</Text>
      <Text style={styles.text}>Rp. {formatNumber(list.harga)}</Text>
    </TouchableOpacity>
  );
};

export default CardBook;

const styles = StyleSheet.create({
  listBook: {
    width: '47%',
    marginVertical: responsiveHeight(10),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: Colors.white
  },
  wrapperImage: (warna) => ({
    backgroundColor: warna,
    alignItems: 'center',
    borderRadius: 10,
  }),
  image: {
    height: responsiveHeight(200),
    width: responsiveWidth(100),
  },
  text: {
    fontFamily: fonts.primary.reguler,
    marginVertical: responsiveHeight(5),
    marginLeft: 5,
    fontSize: 12
  },
});
