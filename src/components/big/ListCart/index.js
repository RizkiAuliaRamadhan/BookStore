import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Colors, responsiveHeight} from '../../../utils';
import Cart from '../../small/Cart';

const ListCart = ({data, warna}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {data.map(value => {
        const rndInt = Math.floor(Math.random() * warna.length);
        return <Cart key={value.id} data={value} warna={warna[rndInt]} />;
      })}
    </ScrollView>
  );
};

export default ListCart;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    marginBottom: 130,
  },
});
