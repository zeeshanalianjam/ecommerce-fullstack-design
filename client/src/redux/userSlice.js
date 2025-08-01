import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  phone: "",
  verifyEmail: false,
  lastLoginDate: "",
  status: "",
  addressDetails: [],
  shoppingCart: [],
  orderHistory: [],
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (!action.payload) return;
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.phone = action.payload.phone;
      state.verifyEmail = action.payload.verifyEmail;
      state.lastLoginDate = action.payload.lastLoginDate;
      state.status = action.payload.status;
      state.addressDetails = action.payload.addressDetails;
      state.shoppingCart = action.payload.shoppingCart;
      state.orderHistory = action.payload.orderHistory;
      state.role = action.payload.role;
    },
    updateUserAvatar: (state, action) => {
      state.avatar = action.payload.avatar
    },
    logout: (state) => {
        state._id = "";
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.phone = "";
        state.verifyEmail = false;
        state.lastLoginDate = "";
        state.status = "";
        state.addressDetails = [];
        state.shoppingCart = [];
        state.orderHistory = [];
        state.role = "";
        
    }
  },
});

export const { setUser, updateUserAvatar, logout } = userSlice.actions;
export default userSlice.reducer;
