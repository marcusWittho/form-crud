import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'dataClients',

  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    checkbox: false,
  },

  reducers: {
    setClient(state, action) {
      let { id, firstName, lastName, checkbox } = action.payload;

      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.checkbox = checkbox;

      console.log(state)
    }
  },
});

export const { setClient } = slice.actions;
export default slice.reducer;
