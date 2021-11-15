import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'dataClients',

  initialState: {
    id: '',
    uername: '',
    email: '',
    checkbox: false,
  },

  reducers: {
    setClient(state, action) {
      let { id, username, email, checkbox } = action.payload;

      state.id = id;
      state.username = username;
      state.email = email;
      state.checkbox = checkbox;
    }
  },
});

export const { setClient } = slice.actions;
export default slice.reducer;
