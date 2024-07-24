import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllStudents from "@/lib/students/getAllStudent";

const initialState = {
    list: [],
    loading: false,
    error: null,
};

// Define the thunk
export const fetchStudents = createAsyncThunk('student/fetchStudents', async () => {
    const response = await getAllStudents();
    return response;
});

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        remove: (state, action) => {
            console.log("action.payload", action.payload);
            state.list = state.list.filter(student => student.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const  {remove} = studentSlice.actions;
export default studentSlice.reducer;
