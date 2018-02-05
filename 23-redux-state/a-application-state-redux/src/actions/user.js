export const UPDATE_USER = 'UPDATE_USER';

export function updateUser (change) {
  return {
    change,
    type: UPDATE_USER
  };
}
