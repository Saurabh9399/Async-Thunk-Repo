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
  async (_, { rejectWithValue }) => {
    const result = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud"
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

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  "editUser",
  async (data, rejectWithValue) => {
    const result = await fetch(
      `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const response = await result.json();
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
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
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // Handle fulfillment if needed
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((user) => user.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        // Handle rejection if needed
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === id ? action.payload : user
        );
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { searchUsers } = userDetail.actions;

export default userDetail.reducer;
