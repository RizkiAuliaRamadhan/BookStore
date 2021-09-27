import { GET_BOOKS, GET_BOOKS_BY_CATEGORY, Delete_BOOKS_BY_CATEGORY, SAVE_KEYWORD } from "../../actions/BookAction";

const initialState = {
  booksLoading: true,
  booksResult: [],
  booksError: false,

  idBook: false,
  nameBook: false,
  saveKeyword : false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        booksLoading: action.payload.loading,
        booksResult: action.payload.data,
        booksError: action.payload.errorMessage,
      };
      break;
    case GET_BOOKS_BY_CATEGORY:
      return {
        ...state,
        idBook: action.payload.id,
        nameBook: action.payload.name,
      };
      break;
    case Delete_BOOKS_BY_CATEGORY:
      return {
        ...state,
        idBook: false,
        nameBook: false,
        keyword: false
      };
      break;
    case SAVE_KEYWORD:
      return {
        ...state,
        saveKeyword: action.payload.data
      };
      break;

    default:
      return state;
      break;
  }
}
