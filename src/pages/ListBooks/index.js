import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Jarak, ListBook, ListCategory, HeaderComponent} from '../../components';
import {dummyBooks, dummyCategories, dummyColors} from '../../data';
import {Colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

const ListBooks = ({navigation}) => {
  const listCategories = dummyCategories;
  const listBooks = dummyBooks;

  return (
    <View style={styles.page}>
        <HeaderComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperList}>
          <ListCategory list={listCategories} />
        </View>
        <View style={styles.wrapperList}>
          <Text style={styles.textList}>Choose Your Books</Text>
          <ListBook list={listBooks} warna={dummyColors} navigation={navigation} />
        </View>
        <Jarak height={70} />
      </ScrollView>
    </View>
  );
};

export default ListBooks;

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
});
