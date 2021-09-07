import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardBook} from '../../small';

const ListBook = ({list, warna, navigation}) => {
  return (
    <View style={styles.container}>
      {list.map((list) => {
        const rndInt = Math.floor(Math.random() * warna.length) ;
        return <CardBook key={list.id} list={list} warna={warna[rndInt]} navigation={navigation} />;
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
});
