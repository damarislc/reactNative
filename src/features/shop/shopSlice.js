import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories.json";
import products from "../../data/products.json";

const initialState = {
  categories: categories,
  products: products,
  categorySelected: " ",
  productsFilteredByCategory: [],
  productIdSelected: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      const productsFiltered = products.filter(
        (product) => product.category === categorySelected
      );

      state.categorySelected = categorySelected;
      state.productsFilteredByCategory = productsFiltered;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
