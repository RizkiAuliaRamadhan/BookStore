import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';
import database from '@react-native-firebase/database';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_BY_CATEGORY = 'GET_BOOKS_BY_CATEGORY';
export const Delete_BOOKS_BY_CATEGORY = 'Delete_BOOKS_BY_CATEGORY';
export const SAVE_KEYWORD = 'SAVE_KEYWORD';

export const getListBooks = (id, keyword) => {
  console.log("id : ", id);
  console.log("keyword : ", keyword);
  return dispatch => {
    // loading
    dispatchLoading(dispatch, GET_BOOKS);
    if (id) {
      // firebase
      database()
        .ref('books')
        .orderByChild('book')
        .equalTo(id)
        .once('value', querySnapsot => {
          // hasil
          let data = querySnapsot.val() ? querySnapsot.val() : [];
          let dataItem = {...data};
          dispatchSuccess(dispatch, GET_BOOKS, dataItem);
        })
        .catch(err => {
          dispatchError(dispatch, GET_BOOKS);
          alert(err);
        });
    } else if (keyword) {
      // firebase
      database()
        .ref('books')
        .orderByChild('name')
        .equalTo(keyword)
        .once('value', querySnapsot => {
          // hasil
          let data = querySnapsot.val() ? querySnapsot.val() : [];
          let dataItem = {...data};
          dispatchSuccess(dispatch, GET_BOOKS, dataItem);
        })
        .catch(err => {
          dispatchError(dispatch, GET_BOOKS);
          alert(err);
        });
    } else {
      // firebase
      database()
        .ref('books')
        .once('value', querySnapsot => {
          // hasil
          let data = querySnapsot.val() ? querySnapsot.val() : [];
          let dataItem = {...data};
          dispatchSuccess(dispatch, GET_BOOKS, dataItem);
        })
        .catch(err => {
          dispatchError(dispatch, GET_BOOKS);
          alert(err);
        });
    }
  };
};

export const getListBooksLimits = () => {
  return dispatch => {
    // loading
    dispatchLoading(dispatch, GET_BOOKS);
    // firebase
    database()
      .ref('books')
      .limitToFirst(4)
      .once('value', querySnapsot => {
        // hasil
        let data = querySnapsot.val() ? querySnapsot.val() : [];
        let dataItem = {...data};
        dispatchSuccess(dispatch, GET_BOOKS, dataItem);
      })
      .catch(err => {
        dispatchError(dispatch, GET_BOOKS);
        alert(err);
      });
  };
};

export const getBooksByCategory = (id, name) => ({
  type: GET_BOOKS_BY_CATEGORY,
  payload: {
    id,
    name,
  },
});

export const deleteReduxBooksByCategory = () => ({
  type: Delete_BOOKS_BY_CATEGORY,
});

export const saveKeyword = search => ({
  type: SAVE_KEYWORD,
  payload: {
    data: search,
  },
});
