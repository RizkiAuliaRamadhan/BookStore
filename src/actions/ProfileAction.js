import database from '@react-native-firebase/database';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';
import {storeData} from '../utils/localStorage';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = data => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, UPDATE_PROFILE);
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
        dispatchSuccess(dispatch, UPDATE_PROFILE, res ? res : {});
        //asyn storage
        storeData('user', dataBaru);
      })
      .catch(error => {
        // ERROR
        dispatchError(dispatch, UPDATE_PROFILE, error.message);
        alert(error.message);
      });
  };
};
