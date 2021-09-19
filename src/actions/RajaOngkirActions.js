import axios from 'axios';
import {
  API_HEADER_RAJAONKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
} from '../utils/constant';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';

export const getProvinsiList = () => dispatch => {
  //LOADING
  dispatchLoading(dispatch, GET_PROVINSI);

  axios({
    method: 'get',
    url: API_RAJAONGKIR + 'province',
    timeout: API_TIMEOUT,
    headers: API_HEADER_RAJAONKIR,
  })
    .then(response => {
      if (response.status !== 200) {
        // ERROR
        dispatchError(dispatch, GET_PROVINSI, response);
      } else {
        // BERHASIL
        dispatchSuccess(
          dispatch,
          GET_PROVINSI,
          response.data ? response.data.rajaongkir.results : [],
        );
      }
    })
    .catch(error => {
      // ERROR
      dispatchError(dispatch, GET_PROVINSI, error);
    });
};

export const getKotaList = provinsi_id => dispatch => {
  //LOADING
  dispatchLoading(dispatch, GET_KOTA);

  axios({
    method: 'get',
    url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
    timeout: API_TIMEOUT,
    headers: API_HEADER_RAJAONKIR,
  })
    .then(response => {
      if (response.status !== 200) {
        // ERROR
        dispatchError(dispatch, GET_KOTA, response);
      } else {
        // BERHASIL
        dispatchSuccess(
          dispatch,
          GET_KOTA,
          response.data ? response.data.rajaongkir.results : [],
        );
      }
    })
    .catch(error => {
      // ERROR
      dispatchError(dispatch, GET_KOTA);
      dispatch({
        type: GET_KOTA,
        payload: {
          loading: false,
          data: false,
          errorMessage: error,
        },
      });
      alert(error);
    });
};
