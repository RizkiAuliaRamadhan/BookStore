import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';
import {storeData} from '../utils/localStorage';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, REGISTER_USER);
    // firebase
    if ((data, password)) {
      auth()
        .createUserWithEmailAndPassword(data.email, password)
        .then(success => {
          // Ambil UID, buat databaru
          const dataBaru = {
            ...data,
            uid: success.user.uid,
          };

          // simpan ke realtime database
          database()
            .ref('users/' + success.user.uid)
            .set(dataBaru);

          //SUCCESS
          dispatchSuccess(dispatch, REGISTER_USER, dataBaru);

          //asyn storage
          storeData('user', dataBaru);
        })
        .catch(error => {
          // ERROR
          dispatchError(dispatch, error.message);
          alert(error.message);
        });
    } else {
      // error
      dispatchError(dispatch, REGISTER_USER);
    }
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    //LOADING
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    if ((email, password)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(success => {
          // Login
          database()
            .ref('/users/' + success.user.uid)
            .once('value')
            .then(resDB => {
              if (resDB.val()) {
                //SUCCESS
                dispatch({
                  type: LOGIN_USER,
                  payload: {
                    loading: true,
                    data: resDB.val(),
                    errorMessage: false,
                  },
                });

                //asyn storage
                storeData('user', resDB.val());
              } else {
                dispatch({
                  type: LOGIN_USER,
                  payload: {
                    loading: false,
                    data: false,
                    errorMessage: 'Data User Tidak Ada',
                  },
                });
                alert('Data User Tidak Ada');
              }
            });
        })
        .catch(error => {
          dispatch({
            type: LOGIN_USER,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
          alert(error.message);
        });
    } else {
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
    }
  };
};
