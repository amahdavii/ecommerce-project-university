import { createSlice } from "@reduxjs/toolkit";

// Slice
var initialState = {
  cart: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});
export default cartSlice.reducer;
// Actions
const { setCart, setTotalPrice } = cartSlice.actions;
export const changeCart = (product) => async (dispatch, getState) => {
  let productState = getState().cart.cart;
  console.log("productsss", productState, product);
  let newProducts = [...productState];
  let index = newProducts.findIndex((obj) => obj.id === product.id);
  if (index !== -1 && product.quantity == 0) {
    newProducts.splice(index, 1);
  } else if (index !== -1 && product.quantity > 0) {
    newProducts.splice(index, 1);
    newProducts = [...newProducts, product];
  } else {
    newProducts = [...newProducts, product];
  }
  newProducts = newProducts.sort((a, b) => a.price - b.price);
  const sum = newProducts.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity;
  }, 0);

  dispatch(setCart(newProducts));
  dispatch(setTotalPrice(sum));
};
