import { createSlice, current } from "@reduxjs/toolkit";

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
            state.cart = []
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer;