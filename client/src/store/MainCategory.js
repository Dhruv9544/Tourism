import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
  category: [],
};

const MaincategorySlice = createSlice({
  name: "Maincategory",
  initialState: initialValues,
  reducers: {
    getmaincategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const MaincategoryActions = MaincategorySlice.actions;
export default MaincategorySlice.reducer;
