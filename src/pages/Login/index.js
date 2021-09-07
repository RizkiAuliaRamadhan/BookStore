import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBook2, IconLogo } from '../../assets'
import { Jarak } from '../../components/small'
import { Colors, fonts } from '../../utils'

const Login = () => {
  return (
    <View style={styles.container}>
      <IconLogo />
      <Jarak height={20} />
      <Text style={styles.judul}>Ahlan Wa Sahlan</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontFamily: fonts.primary.bold,
    color: Colors.gray2,
    fontSize: 18
  }
})
