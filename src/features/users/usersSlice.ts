import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../types/types';
import { fetchAllUsers } from './usersApi';

export interface UsersState {
  value: User[];
  status: 'idle' | 'loading' | 'failed';
  isSigninModalOpen: boolean;
}

const initialState: UsersState = {
  value: [],
  status: 'idle',
  isSigninModalOpen: false,
};

export const fetchUsersAsync = createAsyncThunk(
  '/user/fetchAllUsers',
  async () => {
    const response = await fetchAllUsers();
    return response;
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSigninModal: (state) => {
      state.isSigninModalOpen = !state.isSigninModalOpen;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.status = 'failed';
        console.log('action: ', action);
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { toggleSigninModal } = usersSlice.actions;

export const selectUserLoadingStatus = (state: RootState) => state.user.status;
export const selectAllUsers = (state: RootState) => state.user.value;
export const selectIsModalOpen = (state: RootState) => state.user.isSigninModalOpen;

export default usersSlice.reducer;
