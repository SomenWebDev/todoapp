import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    AddToDo: (state, action) => {
      state.value.push(action.payload);
    },

    ToggleToDo: (state, action) => {
      const todo = state.todo.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    RemoveToDo: (state, action) => {
      state.value = state.value.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});

export const { AddToDo, RemoveToDo, ToggleToDo } = todoSlice.actions;
export default todoSlice.reducer;
