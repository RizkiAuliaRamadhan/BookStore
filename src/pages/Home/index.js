import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getListBooksLimits} from '../../actions/BookAction';
import {getCategory} from '../../actions/CategoryAction';
import {
  BannerSlider,
  HeaderComponent,
  Jarak,
  ListBook,
  ListCategory,
} from '../../components';
import {dummyColors} from '../../data';
import {Colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

const HomeScreen = ({navigation}) => {
  // redux
  const dispatch = useDispatch();
  const redux = {
    category: useSelector(state => state.CategoryReducer.categoryResult),
    categoryLoading: useSelector(
      state => state.CategoryReducer.categoryLoading,
    ),
    booksLoading: useSelector(state => state.BooksReducer.booksLoading),
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      dispatch(getListBooksLimits());
    });
    dispatch(getCategory());

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.page}>
      <HeaderComponent
        page="Home"
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerSlider />
        <View style={styles.wrapperList}>
          <Text style={styles.textList}>Categories</Text>
          {redux.categoryLoading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <ListCategory list={redux.category} navigation={navigation} />
          )}
        </View>
        <View style={styles.wrapperList}>
          <Text style={styles.textList}>Choose Your Books</Text>
          {redux.booksLoading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <ListBook warna={dummyColors} navigation={navigation} />
          )}
          <Jarak height={10} />
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => {
              navigation.navigate('ListBooks');
            }}>
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
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
});
