import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData, clearAllData } from "../actions";
const DataDisplay = () => {
  // taking data from store using useSelector for display aa data with map method
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="display_wrapper">
        {list.map((currentElement) => {
          const { id, data } = currentElement;
          return (
            <div
              className="box d-flex justify-content-between align-items-center my-2"
              key={id}
            >
              <h4>{data}</h4>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeData(id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="clearall mt-2 text-center">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(clearAllData())}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default DataDisplay;
