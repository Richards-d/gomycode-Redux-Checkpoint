// Setup the store to use the todoSlice.
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;
