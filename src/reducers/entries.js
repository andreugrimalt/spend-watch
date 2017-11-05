const entries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [
        ...state,
        {
          id: action.id,
          amount: action.amount,
          time: action.time,
          place: action.place,
        },
      ];
    default:
      return state;
  }
};

export default entries;
