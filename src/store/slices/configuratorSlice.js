import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  selections: {},
  activeTab: {},
  selectedAddons: [],
};

const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.selections = {};
      state.activeTab = {};
      state.selectedAddons = [];
    },
    selectOption: (state, action) => {
      const { subcategoryId, option } = action.payload;
      state.selections[subcategoryId] = option;
    },
    toggleAddon: (state, action) => {
      const addonId = action.payload;
      const index = state.selectedAddons.indexOf(addonId);
      if (index > -1) {
        state.selectedAddons.splice(index, 1);
      } else {
        state.selectedAddons.push(addonId);
      }
    },
    setActiveTab: (state, action) => {
      const { categoryId, tabId } = action.payload;
      state.activeTab[categoryId] = tabId;
    },
  },
});

export const { setProduct, selectOption, toggleAddon, setActiveTab } =
  configuratorSlice.actions;

export default configuratorSlice.reducer;
