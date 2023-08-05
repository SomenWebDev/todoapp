import { configureStore } from "@reduxjs/toolkit";

import toDoReducer from "../state/todo/todoSlice";

export default configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
