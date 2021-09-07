import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { CardProfile, Tombol } from '../../small';
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils';

const Profile = ({ profile, menuList, navigation }) => {
  return (
    <View style={styles.container}>
      {profile.map(data => {
        return (
          <View key={data.id} style={{ width: '100%' }}>
            <View style={styles.wrapperImage}>
              <Image source={data.avatar} style={styles.image} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.nama}>{data.nama}</Text>
            </View>
          </View>
        );
      })}
      <ScrollView showsVerticalScrollIndicator={false}>
        {menuList.map(data => {
          return (
            <CardProfile
              key={data.id}
              nama={data.nama}
              icon1={data.icon1}
              icon2={data.icon2}
              halaman={data.halaman}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(650),
    width: responsiveWidth(414),
    backgroundColor: Colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
  },
  wrapperImage: {
    marginTop: -75,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    marginVertical: 10,
  },
});
