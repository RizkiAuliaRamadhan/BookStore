import database from '@react-native-firebase/database';
import {storeData} from '../utils/localStorage';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = data => {
  return dispatch => {
    //LOADING
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });
    // initial update data
    const dataBaru = {
      uid: data.uid,
      nama: data.nama,
      email: data.email,
      hp: data.hp,
      alamat: data.alamat,
      kota: data.kota,
      provinsi: data.provinsi,
      avatar: data.updateAvatar ? data.avatarForDB : data.avatar,
      status: 'user',
    };
    // firebase
    database()
      .ref('/users/' + dataBaru.uid)
      .update(dataBaru)
      .then(res => {
        //SUCCESS
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: true,
            data: res ? res : {},
            errorMessage: false,
          },
        });

        //asyn storage
        storeData('user', dataBaru);
      })
      .catch(error => {
        // ERROR
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};
