import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBook} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
      setTimeout(()=> {
          navigation.replace("BottomTab")
      },3000)
  }, [])
  return (
    <View style = {styles.container}>
      <IconBook />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
