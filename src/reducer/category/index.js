import { GET_CATEGORY } from "../../actions/CategoryAction";

const initialState = {
  categoryLoading: true,
  categoryResult: [],
  categoryError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categoryLoading: action.payload.loading,
        categoryResult: action.payload.data,
        categoryError: action.payload.errorMessage,
      };

    default:
      return state;
      break;
  }
}
