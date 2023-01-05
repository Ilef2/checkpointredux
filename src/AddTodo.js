import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/action/Action";
import { Button } from "react-bootstrap";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    description: "",
  });
  // const Add = () => {

  //   setInput({description:""})
  // };
  return (
    <div>
      <h1>Todo list</h1>
      <input
      className="ad"
        type="text"
        placeholder="write to do..."
        name="description"
        onChange={(e) => setInput({ [e.target.name]: e.target.value })}
      />
      <Button

      variant="secondary"
        onClick={() => {
          dispatch(addTodo(input));
        }}
      >
        {" "}
        Add{" "}
      </Button>
    </div>
  );
};

export default AddTodo;
