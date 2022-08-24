import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [{id: 1, name: "황호세", age: 26, phone_number: "010-3645-2422", space_number: 1, color: "#ffcbd4"}]

export const userSlice = createSlice({
  name: "user",
  initialState: {userArr: initialStateValue, lastId: 1},
  reducers: {
    addUser: (state, action) => {
      for(const user of state.userArr){
        if(user.space_number !== action.payload.space_number)
          break;
        else {
          action.payload.space_number++;
        }
      }
      state.lastId = state.lastId + 1;
      action.payload.id = state.lastId;
      state.userArr.push(action.payload);
    },
    updateUser: (state, action) => {
      state.userArr.find(user => user.space_number === action.payload.box_number).space_number = action.payload.space_number;
    },
    deleteUser: (state, action) => {
      state.userArr = state.userArr.filter(user => user.space_number !== action.payload);
    },
    sortUser: (state) => {
      state.userArr.sort((a, b) => a.space_number - b.space_number);
    }
  },
});

export const { addUser, sortUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;