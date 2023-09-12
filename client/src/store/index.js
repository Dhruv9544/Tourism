import { configureStore } from "@reduxjs/toolkit";
import FormOptionsReducer from "./FormOptions";
import MainCategoryReducer from "./MainCategory";
import TopDestinationReducer from "./TopDestination";
const store = configureStore({
  reducer: {
    formoptions: FormOptionsReducer,
    Maincategory: MainCategoryReducer,
    TopDestination: TopDestinationReducer,
  },
});
export default store;
