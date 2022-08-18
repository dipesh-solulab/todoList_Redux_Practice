import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { addData } from "../actions";
import DataDisplay from "./DataDisplay";
const AddList = () => {
  const [inputDataGetting, setInputDataGetting] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="div_wrapper mt-3">
        <Form onSubmit={(e) => e.preventDefault()}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your Task"
              aria-label="Enter your Task"
              aria-describedby="basic-addon2"
              value={inputDataGetting}
              onChange={(e) => {
                setInputDataGetting(e.target.value);
              }}
            />
            <button
              className="btn btn-success"
              id="basic-addon2"
              onClick={() => {
                dispatch(addData(inputDataGetting), setInputDataGetting(""));
              }}
            >
              Add
            </button>
          </InputGroup>
        </Form>

        {/* display list of todo */}
        <DataDisplay />
      </div>
    </>
  );
};

export default AddList;
