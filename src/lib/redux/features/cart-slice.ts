import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    value: CartState
}
type CartState = {
    lastUpdated: string,
    products: string[]
}
const initialState = {
    value: {
        lastUpdated: "",
        products: []
    } as CartState
} as InitialState

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {
                value: {
                    lastUpdated: Date(),
                    products: [...state.value.products, action.payload]
                }
            }
        },
        removeFromCart: (state, action) => {
            const newprod = state.value.products.filter(prod => prod !== action.payload)
            return {
                value: {
                    lastUpdated: Date(),
                    products: newprod
                }
            }
        }
    }
})

export const { addToCart, removeFromCart} = cart.actions
export default cart.reducer