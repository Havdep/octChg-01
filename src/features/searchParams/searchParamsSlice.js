import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {},
  reducer: {
    add: () => {},
  },
});
export const {} = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
