import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconHomeActive,
  IconHome,
  IconAccount,
  IconAccountActive,
  IconHeart,
  IconHeartActive,
  IconBooksActive,
  IconBooks,
} from '../../../assets/icon';
import {Colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'ListBooks') {
      return isFocused ? <IconBooksActive /> : <IconBooks />;
    }
    if (label === 'Wishlist') {
      return isFocused ? <IconHeartActive /> : <IconHeart />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconAccountActive /> : <IconAccount />;
    }

    return <IconHomeActive />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? Colors.white : Colors.secondary,
    marginTop: 3,
    fontFamily: fonts.primary.bold,
    fontSize: 10
  }),
});
