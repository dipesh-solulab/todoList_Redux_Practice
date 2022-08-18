export const addData = (data) => {
  return {
    type: "ADD_DATA",
    payload: {
      id: Math.floor(Math.random() * 100),
      data: data,
    },
  };
};
export const removeData = (id) => {
  return {
    type: "REMOVE_DATA",
    payload: id,
  };
};
export const clearAllData = () => {
  return {
    type: "CLEAR_ALL_DATA",
  };
};
