import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/store/features/counter/counterSlice"
import studentReducer from "@/lib/store/features/student/studentSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer,
        student: studentReducer
    },
  });
};
