import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Profile from '../../components/big/Profile';
import {Colors, getData} from '../../utils'
import {dummyMenuList, dummyProfile} from '../../data'

const ProfileScreen = ({navigation}) => {
  const [profile, setProfile] = useState([])

  const getUserData = () => {
    getData('user').then(res =>{
      const data = res

      if(data){
        setProfile([data])
      }else{
        navigation.replace("Login")
      }
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      getUserData()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Profile profile={profile} menuList={dummyMenuList} navigation={navigation} />
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
