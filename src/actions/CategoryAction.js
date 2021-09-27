import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';
import database from '@react-native-firebase/database';

export const GET_CATEGORY = 'GET_CATEGORY';

export const getCategory = () => {
  return dispatch => {
    // loading
    dispatchLoading(dispatch, GET_CATEGORY);
    // firebase
    database()
      .ref('category')
      .once('value', querySnapsot => {
        // hasil
        let data = querySnapsot.val() ? querySnapsot.val() : []
        let dataItem = {...data}
        dispatchSuccess(dispatch, GET_CATEGORY, dataItem)
      })
      .catch(err => {
        dispatchError(dispatch, GET_CATEGORY);
        alert(err);
      });
  };
};
