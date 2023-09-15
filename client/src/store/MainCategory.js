import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
  category: [],
  subcategories: [
    {
      name: "",
      subcategory: [],
      id: "",
      image: "",
    },
  ],
};

const MaincategorySlice = createSlice({
  name: "Maincategory",
  initialState: initialValues,
  reducers: {
    getmaincategory(state, action) {
      state.category = action.payload;
    },
    getsubcategory(state, action) {
      // state.subcategories.push(action.payload);

      const newSubcategory = action.payload;
      const filteredSubcategories = state.subcategories.filter(
        (subcategory) => subcategory.name !== ""
      );
      state.subcategories = [...filteredSubcategories, newSubcategory];
    },
  },
});

export const MaincategoryActions = MaincategorySlice.actions;
export default MaincategorySlice.reducer;
