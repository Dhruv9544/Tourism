import { configureStore } from "@reduxjs/toolkit";
import FormOptionsReducer from "./FormOptions";
import MainCategoryReducer from "./MainCategory";
const store = configureStore({
  reducer: {
    formoptions: FormOptionsReducer,
    Maincategory: MainCategoryReducer,
  },
});
export default store;
