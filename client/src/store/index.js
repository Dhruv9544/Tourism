import { configureStore } from "@reduxjs/toolkit";
import FormOptionsReducer from "./FormOptions";
const store = configureStore({
  reducer: {
    formoptions: FormOptionsReducer,
  },
});
export default store;
