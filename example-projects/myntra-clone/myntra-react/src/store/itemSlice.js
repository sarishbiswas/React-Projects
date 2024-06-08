import {createSlice} from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (store,action) => {
      store = action.payload;
      return store;
    }
  }
});

export const itemsActions = itemSlice.actions;