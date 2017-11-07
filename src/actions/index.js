
// TODO: Think about 'id'
export const addEntry = (firebase, path, { amount, time, place }) => {
  // TODO: Handle error
  firebase.push(path, {
    amount,
    time,
    place,
  });

  // firebase-redux will update the state for us
  return {
    type: 'ADD_ENTRY',
    amount,
    time,
    place,
  };
};

export const removeEntry = (id, time) => ({
  type: 'REMOVE_ENTRY',
  id,
  time,
});
