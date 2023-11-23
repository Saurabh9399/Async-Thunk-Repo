import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const result = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const response = result.json();

      console.log(response);

      return response;
    } catch (err) {
        return rejectWithValue(err);
    }
  }
);

export const getUsers = createAsyncThunk(
    "getUsers",
    async (_,rejectWithValue) => {
      const result = await fetch(
        "https://641dd63d945125fff3d75742.mockapi.io/crud",
      );
  
      try {
        const response = result.json();
  
        console.log(response);
  
        return response;
      } catch (err) {
          return rejectWithValue(err);
      }
    }
  );

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUsers: (state, action) => {},
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload); 
    },
    [createUser.rejected]:(state,action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [getUsers.pending]: (state) => {
        state.loading = true;
      },
      [getUsers.fulfilled]: (state, action) => {
        state.loading = false;
        state.users = action.payload;
      },
      [getUsers.rejected]:(state,action) => {
          state.loading = false;
          state.error = action.payload;
      },
  },
});

export default userDetail.reducer;
