import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { CardProfile, Tombol } from '../../small';
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils';
import { Avatar, Stack } from 'native-base';
import { slice } from 'lodash';

const Profile = ({ profile, menuList, navigation }) => {
  return (
    <View style={styles.container}>
      {profile.map((data, index) => {
        const stringAfterSpace = data.nama.indexOf(" ")
        return (
          <View key={index} style={{ width: '100%' }}>
            <Stack alignItems="center">
              <Avatar size="2xl" marginTop={-16} source={data.avatar ? {uri: data.avatar} : false} _text={{fontSize: 40,}} flexDirection="row" >
                {slice(data.nama,0,1)}{stringAfterSpace === -1 ? '': slice(data.nama, stringAfterSpace+1, stringAfterSpace+2 )}
              </Avatar>
            </Stack>
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
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    marginVertical: 10,
  },
});
