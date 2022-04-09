import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAllUsers } from './usersApi';

export interface UsersState {
    value: [],
    status: 'idle' | 'loading' | 'failed'
};

const initialState: UsersState = {
    value: [],
    status: 'idle'
};

export const fetchUsersAsync = createAsyncThunk(
    '/user/fetchAllUsers',
    async () => {
        const response = await fetchAllUsers();
        return response;
    }
)

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsersAsync.rejected, (state, action) => {
                state.status = 'failed';
                console.log('action: ', action)
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = action.payload
            })
    }
});

export const selectUserLoadingStatus = (state: RootState) => state.user.status;
export const selectAllUsers = (state: RootState) => state.user.status;

export default usersSlice.reducer;
