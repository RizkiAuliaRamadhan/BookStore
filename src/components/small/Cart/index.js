import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { IconCancel } from '../../../assets';
import { Colors, fonts, formatNumber } from '../../../utils';

const Cart = ({ data, warna }) => {
  return (
    <View>
      {data.pesanan.map((value, index) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.wrappImage(warna)}>
              <Image source={value.product.image} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.wrappText}>
              <Text style={styles.text}>{value.product.name}</Text>
              <Text style={styles.text1}>Rp. {formatNumber(value.product.totalHarga)}</Text>
              <Text style={styles.text1}>Berat: {value.product.berat} Kg</Text>
              <Text style={styles.text1}>Jumlah: {value.product.jumlah}</Text>
              <Text numberOfLines={3} style={styles.text1}>
                Keterangan: {value.product.keterangan}
              </Text>
            </View>
            <TouchableOpacity style={styles.tombol}>
              <IconCancel />
            </TouchableOpacity>
          </View>

        )
      })}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: Colors.secondary
  },
  wrappImage: warna => ({
    backgroundColor: warna,
    padding: 10,
    borderRadius: 10,
  }),
  image: {
    height: 75,
    width: 50,
  },
  wrappText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  text: {
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
  },
  text1: {
    fontFamily: fonts.primary.reguler,
    color: '#686868',
    width: '80%',
    fontSize: 12
  },
  tombol: {
    position: 'absolute',
    right: 5,
    top: 5,
    fontSize: 14
  },
});
