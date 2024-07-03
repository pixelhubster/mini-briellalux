import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    value: CartState
}
type CartState = {
    lastUpdated: string,
    products: {
        _id: string,
        qty: number,
    }[]
}
const initialState =  localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData") as string) as InitialState : {
    value:  {
        lastUpdated: "",
        products: []
    } as CartState
} as InitialState

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newcart =  {
                value: {
                    lastUpdated: Date(),
                    products: [...state.value.products, action.payload]
                }
            }
            localStorage.setItem("cartData",JSON.stringify(newcart))
            return newcart
        },
        removeFromCart: (state, action) => {
            const newprod = state.value.products.filter(prod => prod._id !== action.payload)
            const newcart = {
                value: {
                    lastUpdated: Date(),
                    products: newprod
                }
            }
            localStorage.setItem("cartData", JSON.stringify(newcart))
            return newcart
        }
    }
})

export const { addToCart, removeFromCart} = cart.actions
export default cart.reducer