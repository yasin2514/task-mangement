import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {},
});
export default taskSlice.reducer;
