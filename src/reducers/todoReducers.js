const initialSate = {
  list: [],
};
const todoReducers = (state = initialSate, action) => {
  switch (action.type) {
    case "ADD_DATA":
      const { id, data } = action.payload;
      if (data) {
        return {
          ...state, //its return old data not only current write data
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      } else {
        alert("Plz Enter something...Not allowed Empty....");
      }
    case "REMOVE_DATA":
      const newDeletedList = state.list.filter((e) => e.id !== action.payload);
      return {
        ...state,
        list: newDeletedList,
      };
    case "CLEAR_ALL_DATA":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducers;
