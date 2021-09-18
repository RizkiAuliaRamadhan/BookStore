import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, fonts, formatNumber, responsiveWidth } from '../../utils';
import { CardAlamat, Jarak, Tombol } from '../../components';
import { dummyProfile } from '../../data';

const CheckOut = ({ navigation }) => {
  const [ekspedisi, setEkspedisi] = useState([
    { label: "JNE", value: "jne" },
    { label: "J&T", value: "j&t" },
    { label: "Anter Aja", value: "anterAja" },
  ])

  const [valueEkspedisi, setValueEkspedisi] = useState(null)

  const pickerRef = useRef()

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: responsiveWidth(30) }}>
        <View style={styles.back}>
          <Tombol
            icon="back"
            color={Colors.primary}
            padding={2}
            radius={5}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.textWrapp}>
          <Text style={styles.textJudul}>Check Out</Text>
        </View>
        <View style={styles.alamat}>
          <Text style={styles.text}>Apakah Bener Alamat ini?</Text>
        </View>
        <View style={styles.cardAlamat}>
          <CardAlamat data={dummyProfile} navigation={navigation} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Total Harga:</Text>
          <Text style={styles.text}>Rp. 300.000</Text>
        </View>
        <Jarak height={20} />
        <View style={styles.kurir}>
          {/* <Select label="Pilih Ekspedisi" items={ekspedisi} setItems={setEkspedisi} value={valueEkspedisi} setValue={setValueEkspedisi} width='100%' /> */}
        </View>
        <Jarak height={10} />
        <Text style={styles.text}>Biaya Ongkir : </Text>
        <View style={styles.biayaOngkir}>
          <View style={styles.row}>
            <Text style={styles.text1}>Berat 1 kg :</Text>
            <Text style={styles.text2}>Rp. 15.000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Estimasi Waktu :</Text>
            <Text style={styles.text2}>2-3 Hari</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.text}>Total: </Text>
          <Text style={styles.text}>
            Rp. 315.000
          </Text>
        </View>
        <TouchableOpacity style={styles.tombol} onPress={() => { navigation.navigate("CheckOut") }}>
          <Text style={styles.textTombol}>Bayar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  back: {
    position: 'absolute',
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    top: 10,
    left: -17,
  },
  textWrapp: {
    alignItems: 'center',
    padding: 10,
  },
  textJudul: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
  alamat: {
    marginTop: 10
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
  cardAlamat: {
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperPicker: {
    borderWidth: 3,
    marginTop: 5,
    borderColor: Colors.gray,
    borderRadius: 5
  },
  picker: {
    height: 30,
    marginTop: -10,
    marginBottom: 15
  },
  text1: {
    fontFamily: fonts.primary.reguler,
    fontSize: 14
  },
  text2: {
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
  },
  biayaOngkir: {
    marginTop: 5
  },
  footer: {
    marginHorizontal: responsiveWidth(30),
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
  tombol: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textTombol: {
    color: Colors.white,
    fontFamily: fonts.primary.bold,
  },
});
