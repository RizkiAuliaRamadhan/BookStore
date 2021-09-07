import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Profile from '../../components/big/Profile';
import {Colors} from '../../utils'
import {dummyMenuList, dummyProfile} from '../../data'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Profile profile={dummyProfile} menuList={dummyMenuList} navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.primary,
    justifyContent: 'flex-end'
  },
});
