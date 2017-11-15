const login = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {
        user: {
          uid: action.uid,
          displayName: action.displayName,
          photoURL: action.photoURL,
        },
      });
    default:
      return state;
  }
};

export default login;
