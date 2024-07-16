import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/lib/api';
import getAllStudents from "@/lib/students/getAllStudent";

const initialState = {
    list: [],
    loading: false,
    error: null,
};

// Define the thunk
const fetchStudents = createAsyncThunk('student/fetchStudents', async () => {
    const response = await getAllStudents();
    return response;
});

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
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

export  {fetchStudents}
export default studentSlice.reducer;
