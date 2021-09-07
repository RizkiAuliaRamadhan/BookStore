import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import List from '../../small/List';

const ListCategory = ({list}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {list.map(category => {
        return <List category={category} key={category.id} />;
      })}
    </ScrollView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({});
