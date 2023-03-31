import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const cartSlice  = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const cart = {
                goods: action.payload,
            }
            state.cart.push(cart)
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((cart)=>cart.goods !== action.payload)
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer;