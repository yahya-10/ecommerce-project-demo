import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscription: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    selectSubscription: (state, action) => {
      state.subscription.push(action.payload);
    },
  },
});

export const { selectSubscription } = subscriptionSlice.actions;

const { reducer } = subscriptionSlice;
export default reducer;
