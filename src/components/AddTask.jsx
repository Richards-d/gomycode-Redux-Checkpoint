// This component adds new tasks.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") {
      alert("Task description cannot be empty");
      return;
    }
    dispatch(addTask({ description }));
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
