import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Colors, responsiveHeight, responsiveWidth, fonts} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Tombol, Jarak} from '../../small';

const HeaderComponent = ({onPress}) => {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* input pencarian */}
          <View style={styles.searchSection}>
            <IconSearch />
            <TextInput placeholder="Cari Buku ..." style={styles.inputSearch} />
          </View>
          {/* Tombol Keranjang */}
          <Jarak width={responsiveWidth(10)} />
          <Tombol icon="cart" totalKeranjang={2} padding={10} color={Colors.white} radius={5} onPress={onPress} />
        </View>
      </View>
    );
  }

  export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: responsiveHeight(80),
  },
  wrapperHeader: {
    marginVertical: responsiveHeight(15),
    marginHorizontal: responsiveWidth(30),
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingLeft: responsiveWidth(10),
    alignItems: 'center',
  },
  inputSearch: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
  },
});


