import {ScrollView} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Input, Jarak, ModalAlert, Tombol} from '../../components/small';
import {Colors, fonts, responsiveWidth} from '../../utils';

const SignIn = ({navigation}) => {
  const [Nama, setNama] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Hp, setHp] = useState(null);
  const [password, setPassword] = useState(null);
  const [konfirmasiPassword, setKonfirmasiPassword] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');
  const [success, setSuccess] = useState('success');

  const onContinue = () => {
    if (Nama && Email && Hp && password && konfirmasiPassword) {
      if (password !== konfirmasiPassword) {
        setTitle('Gagal');
        setTextBody('Password dan Konfirmasi Password Harus Sama !!');
        setSuccess('error');
        setIsOpen(true);
      } else {
        navigation.navigate('SignIn2', {
          data: {
            nama: Nama,
            email: Email,
            hp: Hp,
            password
          }
        });
      }
    } else {
      setTitle('Gagal');
      setTextBody('Form harus diisi !!');
      setSuccess('error');
      setIsOpen(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Tombol
          icon="back"
          color={Colors.primary}
          padding={2}
          radius={5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator={false}>
        <Jarak height={50} />
        <Text style={styles.judul}>Daftar</Text>
        <Text style={styles.judul}>Isi Data Diri Anda</Text>
        <Jarak height={20} />
        <View style={styles.cardSignIn}>
          <Input
            label="Nama"
            onChangeText={result => {
              setNama(result);
            }}
            value={Nama}
          />
          <Input
            label="Email"
            onChangeText={result => {
              setEmail(result);
            }}
            value={Email}
          />
          <Input
            label="No Hp"
            onChangeText={result => {
              setHp(result);
            }}
            value={Hp}
            keyboardType="numeric"
          />
          <Input
            label="Password"
            onChangeText={result => {
              setPassword(result);
            }}
            value={password}
            secureTextEntry={true}
          />
          <Input
            label="Konfirmasi Password"
            onChangeText={result => {
              setKonfirmasiPassword(result);
            }}
            value={konfirmasiPassword}
            secureTextEntry={true}
          />
          <Jarak height={20} />
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => {
              onContinue();
            }}>
            <Text style={styles.textTombol}>Lanjut</Text>
          </TouchableOpacity>
          <ModalAlert
            open={isOpen}
            setOpen={setIsOpen}
            title={title}
            textBody={textBody}
            success={success}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(30),
  },
  back: {
    position: 'absolute',
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    top: 10,
    left: 10,
    zIndex: 1
  },
  judul: {
    fontFamily: fonts.primary.bold,
    color: Colors.primary,
    fontSize: 18,
    textAlign: 'center'
  },
  cardSignIn: {
    width: '100%',
    backgroundColor: 'white',
  },
  tombol: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  textTombol: {
    color: Colors.white,
    fontFamily: fonts.primary.bold,
    fontSize: 16,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
  },
  text1: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: Colors.primary,
  },
});
