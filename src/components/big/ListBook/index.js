import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {CardBook} from '../../small';
import {Colors} from '../../../utils';

const ListBook = ({warna, navigation}) => {
  const redux = {
    booksResult: useSelector(state => state.BooksReducer.booksResult),
    booksLoading: useSelector(state => state.BooksReducer.booksLoading),
  };
  return (
    <View style={styles.container}>
      {Object.keys(redux.booksResult).map(key => {
        const rndInt = Math.floor(Math.random() * warna.length);
        return (
          <CardBook
            key={key}
            list={redux.booksResult[key]}
            warna={warna[rndInt]}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default ListBook;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    marginBottom: 10,
    marginTop: 100,
  },
});
