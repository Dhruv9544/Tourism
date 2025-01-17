import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
  topdestination: [],
};

const TopDestinationSlice = createSlice({
  name: "TopDestination",
  initialState: initialValues,
  reducers: {
    gettopdestination(state, action) {
      state.topdestination = action.payload;
    },
  },
});

export const TopDestinationActions = TopDestinationSlice.actions;
export default TopDestinationSlice.reducer;
