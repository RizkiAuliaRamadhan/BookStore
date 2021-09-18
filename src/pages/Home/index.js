import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ScrollView, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/UserActions';
import {
  BannerSlider,
  HeaderComponent,
  Jarak,
  ListBook,
  ListCategory,
} from '../../components';
import {dummyBooks, dummyCategories, dummyColors} from '../../data';
import {Colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

const HomeScreen = ({navigation}) => {
  const listCategories = dummyCategories;
  const listBooks = dummyBooks;
  
  return (
    <View style={styles.page}>
      <HeaderComponent onPress={() => {navigation.navigate('Cart')}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerSlider />
        <View style={styles.wrapperList}>
          <Text style={styles.textList}>Categories</Text>
          <ListCategory list={listCategories} />
        </View>
        <View style={styles.wrapperList}>
          <Text style={styles.textList}>Choose Your Books</Text>
          <ListBook list={listBooks} warna = {dummyColors} navigation={navigation} />
          <Jarak height={10} />
          <TouchableOpacity style={styles.tombol} onPress={() => {navigation.navigate('ListBooks')}}>
            <Text style={styles.text}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <Jarak height={70} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapperList: {
    marginHorizontal: responsiveWidth(30),
    marginTop: responsiveHeight(10),
  },
  textList: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
  tombol: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  text:{
    color: Colors.white,
    fontFamily: fonts.primary.bold,
    fontSize: 14
  }
});
