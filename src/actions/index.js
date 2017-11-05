
// TODO: Think about 'id'
export const addEntry = (amount, time, place) => ({
  type: 'ADD_Entry',
  amount,
  time,
  place,
});

export const removeEntry = (id, time) => ({
  type: 'REMOVE_ENTRY',
  id,
  time,
});
