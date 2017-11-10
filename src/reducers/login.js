const login = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: {
          uid: action.uid,
          displayName: action.displayName,
          photoURL: action.photoURL,
        },
      };
    default:
      return state;
  }
};

export default login;
