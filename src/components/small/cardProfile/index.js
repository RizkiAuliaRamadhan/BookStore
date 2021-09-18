import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {responsiveWidth, Colors, fonts, clearStorage} from '../../../utils';
import Jarak from '../Jarak';
import auth from '@react-native-firebase/auth';
import {ModalAlert} from '..';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, registerUser} from '../../../actions/AuthAction';

const CardProfile = ({nama, icon1, icon2, halaman, navigation}) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const onButtonPress = () => {
    if (halaman === 'editProfile') {
      navigation.navigate('EditProfile');
    }
    if (halaman === 'changePassword') {
      navigation.navigate('ChangePassword');
    }
    if (halaman === 'history') {
      navigation.navigate('Histori');
    }
    if (halaman === 'signout') {
      auth()
        .signOut()
        .then(() => {
          clearStorage();
          dispatch(registerUser(false, false));
          dispatch(loginUser(false, false));
          setOpen(true);
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          onButtonPress();
        }}>
        <View style={styles.wrapp1}>
          {icon1}
          <Jarak width={10} />
          <Text style={styles.text}>{nama}</Text>
        </View>
        <View>{icon2}</View>
      </TouchableOpacity>
      <ModalAlert
        open={open}
        setOpen={setOpen}
        title="Selamat anda berhasil SignOut"
        textBody="Tunggu Sebentar"
        loading={true}
      />
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: responsiveWidth(354),
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 2,
  },
  wrapp1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.semibold,
    fontSize: 12,
  },
});
