import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter';
import privacySlice from './Privacy';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});

export default store;