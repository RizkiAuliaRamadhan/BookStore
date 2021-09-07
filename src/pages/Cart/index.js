import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ListCart} from '../../components';
import {Tombol} from '../../components/small';
import {DummyCart, dummyColors} from '../../data';
import {
  Colors,
  fonts,
  responsiveWidth,
  formatNumber,
} from '../../utils';

const Cart = ({navigation}) => {
  const pesanan = DummyCart[0];
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: responsiveWidth(30)}}>
        <View style={styles.back}>
          <Tombol
            icon="back"
            color={Colors.primary}
            padding={2}
            radius={5}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.textWrapp}>
          <Text style={styles.text}>Cart</Text>
        </View>
        <ListCart data={DummyCart} warna={dummyColors} />
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.text}>Total: </Text>
          <Text style={styles.text}>
            Rp. {formatNumber(pesanan.totalHarga)}
          </Text>
        </View>
        <TouchableOpacity style={styles.tombol} onPress = {() => {navigation.navigate("CheckOut")}}>
          <Text style={styles.textTombol}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  back: {
    position: 'absolute',
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    top: 10,
    left: -17,
    zIndex: 1
  },
  textWrapp: {
    alignItems: 'center',
    padding: 10,
  },
  footer: {
    marginHorizontal: responsiveWidth(30),
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
  tombol: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textTombol: {
    color: Colors.white,
    fontFamily: fonts.primary.bold,
  },
});
