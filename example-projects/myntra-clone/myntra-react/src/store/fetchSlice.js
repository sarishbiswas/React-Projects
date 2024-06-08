import {createSlice} from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchingDone: false,
    fetching: false,
  },
  reducers: {
    markFetchingDone: (state) => {
      state.fetchingDone = true;
    },
    fetchingStarted: (state) => {
      state.fetching = true;
    },
    fetchingCompleted: (state) => {
      state.fetching = false;
    }
  }
});

export const fetchSliceActions = fetchSlice.actions;