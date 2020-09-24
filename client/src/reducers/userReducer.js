export const UPDATE_USER = 'UPDATE_USER';

const defulatUser = {
  isChecked: false,
  current: null,
};
export const userReducer = (state = defulatUser, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        current: payload.currentUser,
        isChecked: true,
      };
    default:
      return state;
  }
};
