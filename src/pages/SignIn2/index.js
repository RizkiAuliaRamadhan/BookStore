import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirActions';
import {
  Input,
  Jarak,
  Tombol,
  Dropdown,
  ModalAlert,
} from '../../components/small';
import {Colors, fonts, responsiveWidth} from '../../utils';
import {registerUser} from '../../actions/AuthAction';

const SignIn2 = ({route, navigation}) => {
  const dataSign1 = route.params.data;
  const [Alamat, setAlamat] = useState(null);

  const [provinsi, setProvinsi] = useState('');
  const [kota, setKota] = useState('');

  const globalProvinsi = useSelector(
    state => state.RajaOngkirReducer.getProvinsiResult,
  );

  const globalKota = useSelector(
    state => state.RajaOngkirReducer.getKotaResult,
  );

  const registerResult = useSelector(state => state.AuthReducer.authResult);
  const registerLoading = useSelector(state => state.AuthReducer.authLoading);

  const dispatch = useDispatch();

  const getKota = provinsi_id => {
    setProvinsi(provinsi_id);
    dispatch(getKotaList(provinsi_id));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');
  const [success, setSuccess] = useState('success');

  const register = () => {
    if (Alamat && provinsi && kota) {
      const datas = {
        nama: dataSign1.nama,
        email: dataSign1.email,
        hp: dataSign1.hp,
        alamat: Alamat,
        kota,
        provinsi,
      };
      // auth firebase
      dispatch(registerUser(datas, dataSign1.password));
      // alert berhasil mendaftar
      setTitle('Berhasil');
      setTextBody('Selamat Anda Berhasil daftar !!');
      setSuccess('success');
      setIsOpen(true);
      // redirect ke mainApp
      setTimeout(() => {
        navigation.replace("BottomTab")
      }, 1500);
    } else {
      setTitle('Gagal');
      setTextBody('Form harus diisi !!');
      setSuccess('error');
      setIsOpen(true);
    }
  };

  useEffect(() => {
    dispatch(getProvinsiList());
  }, []);


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
        <Dropdown
          label="Provinsi"
          placeholder="Pilih --"
          datas={globalProvinsi}
          onValueChange={value => {
            getKota(value);
          }}
          selectedValue={provinsi}
        />
        <Dropdown
          label="Kota"
          placeholder="Pilih --"
          datas={globalKota}
          onValueChange={value => {
            setKota(value);
          }}
          selectedValue={kota}
          isDisabled={provinsi !== '' ? false : true}
        />
        <Jarak height={20} />
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => {
            register();
          }}>
          <Text style={styles.textTombol}>Daftar</Text>
        </TouchableOpacity>
        <ModalAlert
          open={isOpen}
          setOpen={setIsOpen}
          title={title}
          textBody={textBody}
          success={success}
          loading={registerLoading}
        />
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
