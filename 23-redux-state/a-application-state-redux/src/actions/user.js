export const UPDATE_USER = 'UPDATE_USER';

export function updateUser (payload) {
  return {
    payload,
    type: UPDATE_USER
  };
}
