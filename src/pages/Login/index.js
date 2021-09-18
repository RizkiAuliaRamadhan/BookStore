import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../actions/AuthAction';
import {IconLogo} from '../../assets';
import {Input, Jarak, ModalAlert} from '../../components/small';
import {Colors, fonts, responsiveWidth} from '../../utils';

const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // alert
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');
  const [success, setSuccess] = useState('success');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const globalVar = {
    register: useSelector(state => state.AuthReducer.authResult),
    login: useSelector(state => state.AuthReducer.loginResult),
  };

  let Login = globalVar.login

  const login = () => {
    if (Email && password) {
      dispatch(loginUser(Email, password));
      setTitle('Cek');
      setTextBody('Tunggu Sebentar');
      setSuccess('warning');
      setIsOpen(true);
      setLoading(false);
    } else {
      setTitle('Gagal');
      setTextBody('Form harus diisi !!');
      setSuccess('error');
      setIsOpen(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Login !== false) {
      // alert berhasil mendaftar
      setTitle('Selamat Anda Berhasil Login');
      setTextBody('Tunggu Sebentar');
      setSuccess('success');
      setIsOpen(true);
      setLoading(true);
      // redirect ke mainApp
      setTimeout(() => {
        setIsOpen(false)
        navigation.replace('BottomTab');
      }, 500);
      return () => {
        Login = false
      }
    }
  }, [Login]);


  return (
    <View style={styles.container}>
      <IconLogo />
      <Jarak height={20} />
      <View style={styles.cardLogin}>
        <Input
          label="Email"
          onChangeText={result => {
            setEmail(result);
          }}
          value={Email}
        />
        <Input
          label="Password"
          onChangeText={result => {
            setPassword(result);
          }}
          value={password}
          secureTextEntry={true}
        />
        <Jarak height={20} />
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => {
            login();
          }}>
          <Text style={styles.textTombol}>Login</Text>
        </TouchableOpacity>
        <Jarak height={15} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Belum Punya Akun?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text style={styles.text1}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalAlert
        open={isOpen}
        setOpen={setIsOpen}
        title={title}
        textBody={textBody}
        success={success}
        loading={loading}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(30),
  },
  judul: {
    fontFamily: fonts.primary.bold,
    color: Colors.gray2,
    fontSize: 18,
  },
  cardLogin: {
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
