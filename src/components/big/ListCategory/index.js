import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import List from '../../small/List';

const ListCategory = ({list, navigation}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Object.keys(list).map(key => {
        return <List category={list[key]} key={key} navigation={navigation} id={key} />;
      })}
    </ScrollView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({});
