import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {IconCart, IconCamera, IconBack, IconCartPlus, IconPlus, IconMin, IconCancel} from '../../../assets';
import Jarak from '../Jarak';

const index = props => {
  const {
    icon,
    totalKeranjang,
    padding,
    text,
    color,
    onPress,
    radius,
    textColor,
    width
  } = props;
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    }
    if (icon === 'camera') {
      return <IconCamera />;
    }
    if (icon === 'back') {
      return <IconBack />;
    }
    if (icon === 'addCart') {
      return <IconCartPlus />;
    }
    if (icon === 'plus') {
      return <IconPlus />;
    }
    if (icon === 'min') {
      return <IconMin />;
    }
    if (icon === 'cancel') {
      return <IconCancel />;
    }

    return <IconCart />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.icon(padding, color, radius, width)}>
      {icon && <Icon />}
      {totalKeranjang && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalKeranjang}</Text>
        </View>
      )}
      {text && (
        <>
          <Jarak width={5} />
          <Text style={styles.text(textColor)}>{text}</Text>
          <Jarak width={5} />
        </>
      )}
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  icon: (padding, color, radius, width) => ({
    padding: responsiveHeight(padding),
    backgroundColor: color,
    borderRadius: radius,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: width ? responsiveWidth(width) : width
  }),
  notif: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#F58634',
    borderRadius: 10,
    padding: 2,
  },
  textNotif: {
    fontSize: 10,
    color: Colors.white,
  },
  text: textColor => ({
    fontFamily: fonts.primary.reguler,
    color: textColor,
  }),
});
