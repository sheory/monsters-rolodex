import { MONSTERS_REQUEST_PENDING, MONSTERS_REQUEST_SUCCESS, MONSTERS_REQUEST_FAILED } from '../../constants';

export const setMonstersRequest = ( ) => (dispatch) => {
  dispatch({ type: MONSTERS_REQUEST_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => dispatch({ type: MONSTERS_REQUEST_SUCCESS, payload: data }))
     .catch(error => dispatch({ type: MONSTERS_REQUEST_FAILED, payload: error }))
}