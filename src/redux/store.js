import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../ExampleCode/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});


