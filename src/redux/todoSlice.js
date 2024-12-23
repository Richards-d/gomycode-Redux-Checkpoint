// Create a slice for managing the ToDo state.
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    filter: "all", // can be 'all', 'done', or 'notDone'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, deleteTask, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
