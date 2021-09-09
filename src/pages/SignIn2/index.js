import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconBook2, IconLogo} from '../../assets';
import {Input, Jarak, Select, Tombol} from '../../components/small';
import {Colors, fonts, responsiveWidth} from '../../utils';

const SignIn2 = ({navigation}) => {
  const [Alamat, setAlamat] = useState(null);
  const [kota, setKota] = useState([
    {label: 'Banjarnegara', value: 'banjarnegara'},
    {label: 'Cilacap', value: 'cilacap'},
  ]);
  const [provinsi, setProvinsi] = useState([
    {label: 'Jawa Tengah', value: 'jawaTengah'},
    {label: 'Jakarta', value: 'jakarta'},
  ]);

  const [valueKota, setValueKota] = useState(null);
  const [valueProvinsi, setValueProvinsi] = useState(null);
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
      <Text style={styles.judul}>Isi Alamat</Text>
      <Text style={styles.judul}>Lengkap Anda</Text>
      <Jarak height={20} />
      <View style={styles.cardSignIn}>
        <Input
          label="Alamat"
          onChangeText={result => {
            setAlamat(result);
          }}
          value={Alamat}
          textArea={true}
          line={5}
        />
        <View style={styles.row}>
          <Select
            label="Provinsi"
            items={provinsi}
            setItems={setProvinsi}
            value={valueProvinsi}
            setValue={setValueProvinsi}
            width={responsiveWidth(160)}
          />
          <Select
            label="Kota / Kabupaten"
            items={kota}
            setItems={setKota}
            value={valueKota}
            setValue={setValueKota}
            width={responsiveWidth(160)}
          />
        </View>
        <Jarak height={20} />
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textTombol}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn2;

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
  },
  judul: {
    fontFamily: fonts.primary.bold,
    color: Colors.primary,
    fontSize: 18,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
