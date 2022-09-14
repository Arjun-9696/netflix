import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/Reducers/reducer';
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
