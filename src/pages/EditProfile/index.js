import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirActions';
import {Colors, responsiveWidth, fonts, getData} from '../../utils';
import {Input, Jarak, Tombol, Dropdown} from '../../components';
import {Avatar, Button, Stack} from 'native-base';
import {slice} from 'lodash';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateProfile} from '../../actions/ProfileAction';

const EditProfile = ({navigation}) => {
  // state profile
  const [uid, setUid] = useState('');
  const [nama, setnama] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setnoHp] = useState('');
  const [alamat, setalamat] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kota, setKota] = useState('');
  // state photo Profile
  const [avatar, setAvatar] = useState(false);
  const [avatarLama, setAvatarLama] = useState(false);
  const [avatarForDB, setAvatarForDB] = useState(false);
  const [updateAvatar, setUpdateAvatar] = useState(false);
  // manipulasi String
  const stringAfterSpace = nama.indexOf(' ');

  const varGlobal = {
    provinsi: useSelector(state => state.RajaOngkirReducer.getProvinsiResult),
    kota: useSelector(state => state.RajaOngkirReducer.getKotaResult),
  };

  const dispatch = useDispatch();

  const getKota = provinsi_id => {
    setProvinsi(provinsi_id);
    dispatch(getKotaList(provinsi_id));
  };
  const localStorage = () => {
    getData('user').then(res => {
      setUid(res.uid);
      setnama(res.nama);
      setEmail(res.email);
      setnoHp(res.hp);
      setalamat(res.alamat);
      setProvinsi(res.provinsi);
      setKota(res.kota);
      setAvatar(res.avatar);
      setAvatarLama(res.avatar);
      dispatch(getKotaList(res.provinsi));
    });
  };
  // method image
  const getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 500, maxHeight: 500, includeBase64: true},
      response => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          alert('error');
        } else {
          const source = response.assets[0];
          const fileString = `data:${source.type};base64,${source.base64}`;

          setAvatar(source.uri);
          setAvatarForDB(fileString)
          setUpdateAvatar(true);
        }
      },
    );
  };

  // data baru
  const dataBaru = {
    uid,
    nama,
    email,
    hp: noHp,
    alamat,
    kota,
    provinsi,
    avatar,
    avatarForDB,
    updateAvatar
  };

  const onSubmit = () => {
    if (nama && noHp && provinsi && kota && alamat) {
      dispatch(updateProfile(dataBaru));
      setTimeout(() => {
        navigation.replace("BottomTab")
      }, 1500);
    } else {
      alert('error');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      dispatch(getProvinsiList());
      localStorage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
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
        <View
          style={{marginHorizontal: responsiveWidth(30)}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.textWrapp}>
            <Text style={styles.textJudul}>Edit Profile</Text>
          </View>
          <Jarak height={5} />
          <Input
            label="Nama"
            value={nama}
            onChangeText={value => {
              setnama(value);
            }}
          />
          <Input
            label="Email"
            value={email}
            editTable={false}
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <Input
            label="No Hanphone"
            value={noHp}
            onChangeText={value => {
              setnoHp(value);
            }}
          />
          <Dropdown
            label="Provinsi"
            placeholder="Pilih --"
            datas={varGlobal.provinsi}
            onValueChange={value => {
              getKota(value);
            }}
            selectedValue={provinsi}
          />
          <Dropdown
            label="Kota"
            placeholder="Pilih --"
            datas={varGlobal.kota}
            onValueChange={value => {
              setKota(value);
            }}
            selectedValue={kota}
            isDisabled={provinsi !== '' ? false : true}
          />
          <Input
            label="Alamat"
            value={alamat}
            textArea={true}
            line={4}
            onChangeText={value => {
              setalamat(value);
            }}
          />
          <Stack alignItems="center" justifyContent="center" direction="row">
            <Avatar
              size="xl"
              marginTop={3}
              source={avatar ? {uri: avatar} : false}
              _text={{fontSize: 40}}
              flexDirection="row">
              {slice(nama, 0, 1)}
              {stringAfterSpace === -1
                ? ''
                : slice(nama, stringAfterSpace + 1, stringAfterSpace + 2)}
            </Avatar>
            <Button
              ml={3}
              onPress={() => {
                getImage();
              }}>
              Ganti Foto
            </Button>
          </Stack>
          <Stack>
            <Button mt={3} mb={3} onPress={() => {
              onSubmit()
            }}>
              Submit
            </Button>
          </Stack>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

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
    left: 17,
    zIndex: 1,
  },
  textWrapp: {
    alignItems: 'center',
    padding: 10,
  },
  textJudul: {
    fontFamily: fonts.primary.semibold,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  tombol: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textTombol: {
    color: Colors.white,
    fontFamily: fonts.primary.reguler,
    fontSize: 12,
  },
});
