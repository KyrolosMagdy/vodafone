import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchTasks } from './taskApi';

export interface TaskState {
    value: [],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TaskState = {
    value: [],
    status: 'idle'
};

export const fetchTasksAsync = createAsyncThunk(
    '/task/fetchtask',
    async () => {
        const response = await fetchTasks();
        return response;
    }
)

export const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTasksAsync.fulfilled, (state, action) => {
                state.value = action.payload
                state.status = 'idle'
            })
            .addCase(fetchTasksAsync.rejected, (state, action) => {
                state.status = 'failed';
                console.log('rejected: ', action)
            })
    }
});

export const selectTasks = (state: RootState) => state.task.value;
export const selectLoadingState = (state: RootState) => state.task.status;

export default tasksSlice.reducer;