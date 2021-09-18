import {GET_PROVINSI, GET_KOTA} from '../../actions/RajaOngkirActions';

const initialState = {
  getProvinsiLoading: false,
  getProvinsiResult: [],
  getProvinsiError: false,

  getKotaLoading: false,
  getKotaResult: [],
  getKotaError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINSI:
      return {
        ...state,
        getProvinsiLoading: action.payload.loading,
        getProvinsiResult: action.payload.data,
        getProvinsiError: action.payload.errorMessage,
      };
    case GET_KOTA:
      return {
        ...state,
        getKotaLoading: action.payload.loading,
        getKotaResult: action.payload.data,
        getKotaError: action.payload.errorMessage,
      };

    default:
      return state;
      break;
  }
}
