import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  errorMessage: undefined,
};

// export const getSingInAction = createAsyncThunk(`${SING_IN_URL}/getSingInAction`, async () => {
//   try {
//     const response = await singIn();
//     return JSON.stringify(response.data);
//   } catch (error) {
//     throw notificationError(error);
//   }
// });

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    // .addCase(getSingInAction.pending, (state) => {
    //   state.isLoading = true;
    //   state.errorMessage = undefined;
    // })
    // .addCase(getSingInAction.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.errorMessage = '';
    //   state.data = action.payload;
    // })
    // .addCase(getSingInAction.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.errorMessage = action.payload?.message;
    // });
  },
});

export default AuthSlice;
