import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
  district: [],
  season: [],
  category: [],
  duration: [],
};

const FormOptionsSlice = createSlice({
  name: "formoptions",
  initialState: initialValues,
  reducers: {
    getdistricts(state, action) {
      state.district = action.payload;
    },
    getseasons(state, action) {
      state.season = action.payload;
    },
    getcategory(state, action) {
      state.category = action.payload;
    },
    getduration(state, action) {
      state.duration = action.payload;
    },
  },
});

export const FormOptionsActions = FormOptionsSlice.actions;
export default FormOptionsSlice.reducer;
