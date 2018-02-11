export const LOADING_USER = 'LOADING_USER';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const UPDATE_USER = 'UPDATE_USER';

export function loadUser(id) {
  return dispatch => {
    dispatch({
      type: LOADING_USER,
      payload: {
        id
      }
    });

    return fetch('/user.json')
      .then(res => res.json())
      .then(
        payload =>
          dispatch({
            type: LOAD_USER,
            payload
          }),
        payload => // error
          dispatch({
            type: LOAD_USER_ERROR,
            payload
          })
      );
  };
}

export function updateUser(payload) {
  return {
    payload,
    type: UPDATE_USER
  };
}
