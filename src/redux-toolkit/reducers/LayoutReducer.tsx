import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutState } from "../../Types/LayoutTypes";

const initialState: LayoutState = {
  searchIcon: false,
  bookMarkClass: false,
  pinedMenu: [],
  sideBarToggle: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSearchIcon: (state, action: PayloadAction<boolean>) => {
      state.searchIcon = action.payload;
    },
    setBookMarkClass: (state, action: PayloadAction<boolean>) => {
      state.bookMarkClass = action.payload;
    },
    setPinedMenu: (state, action: PayloadAction<string[]>) => {
      state.pinedMenu = action.payload;
    },
    setSideBarToggle: (state, action: PayloadAction<boolean>) => {
      state.sideBarToggle = action.payload;
    },
  },
});
export const { setSearchIcon, setBookMarkClass, setPinedMenu, setSideBarToggle } = LayoutSlice.actions;
export default LayoutSlice.reducer;
