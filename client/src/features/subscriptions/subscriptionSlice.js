import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscription: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    selectSubscription: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { selectSubscription } = subscriptionSlice.actions;

const { reducer } = subscriptionSlice;
export default reducer;
