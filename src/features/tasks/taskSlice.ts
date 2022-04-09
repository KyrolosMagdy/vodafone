import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../types/types';
import { fetchTasks } from './taskApi';

export interface TaskState {
    value: Task[],
    status: 'idle' | 'loading' | 'failed';
    isCreateTaskModalOpen: boolean;
}

const initialState: TaskState = {
    value: [],
    status: 'idle',
    isCreateTaskModalOpen: false,
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
        toggleCreateTaskModelState: (state) => {
            state.isCreateTaskModalOpen = !state.isCreateTaskModalOpen
        }
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

export const { toggleCreateTaskModelState } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.task.value;
export const selectLoadingState = (state: RootState) => state.task.status;
export const selectisTaskModelOpen = (state: RootState) => state.task.isCreateTaskModalOpen;

export default tasksSlice.reducer;