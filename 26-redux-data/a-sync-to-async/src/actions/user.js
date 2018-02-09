export const LOADING_USER = 'LOADING_USER';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const UPDATE_USER = 'UPDATE_USER';

export function loadUser(id) {
  return dispatch => {
    dispatch({
      type: LOADING_USER,
      data: {
        id
      }
    });

    return fetch('/user.json')
      .then(res => res.json())
      .then(
        data =>
          dispatch({
            type: LOAD_USER,
            data
          }),
        error =>
          dispatch({
            type: LOAD_USER_ERROR,
            error
          })
      );
  };
}

export function updateUser(change) {
  return {
    change,
    type: UPDATE_USER
  };
}
