export const GET_USER = 'GET_USER';

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
    payload: {
      nama: 'Rizki Aulia Ramadhan',
      email: 'Rwamdhaney2@gmail.com',
    },
  });
};
