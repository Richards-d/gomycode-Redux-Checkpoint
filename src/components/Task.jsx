// This component displays an individual task with edit and delete options.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (newDescription.trim() === "") {
      alert("Description cannot be empty");
      return;
    }
    dispatch(editTask({ id: task.id, description: newDescription }));
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? "done" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? "Undo" : "Complete"}
      </button>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
