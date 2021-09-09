import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBook2, IconLogo } from '../../assets'
import { Input, Jarak } from '../../components/small'
import { Colors, fonts, responsiveWidth } from '../../utils'

const Login = ({navigation}) => {
  const [Email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return (
    <View style={styles.container}>
      <IconLogo />
      <Jarak height={20} />
      <View style={styles.cardLogin}>
        <Input label="Email" onChangeText={(result) => { setEmail(result)}} value={Email} />
        <Input label="Password" onChangeText={(result) => { setPassword(result)}} value={password} secureTextEntry={true} />
        <Jarak height={20} />
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textTombol}>Login</Text>
        </TouchableOpacity>
        <Jarak height={15} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Belum Punya Akun?</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
            <Text style={styles.text1}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: responsiveWidth(30)
  },
  judul: {
    fontFamily: fonts.primary.bold,
    color: Colors.gray2,
    fontSize: 18
  },
  cardLogin: {
    width: '100%',
    backgroundColor: 'white'
  },
  tombol: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center'
  },
  textTombol: {
    color: Colors.white,
    fontFamily: fonts.primary.bold,
    fontSize: 16
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 12
  },
  text1: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: Colors.primary
  },
})
