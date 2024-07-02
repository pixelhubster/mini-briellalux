import { IProduct } from "@/lib/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export type IProductCheckout = {
    _id: string,
    name: string,
    description: string,
    price: number,
    images: string[],
    shipping: string,
    quantity: number,
    qty: number,
    category: string,
}

type InitialState = {
    value: CheckoutState
}
type CheckoutState = {
    products: IProductCheckout[],
    total: number
}

const initialState = {
    value: {
        products: [],
        total: 0,
    } as CheckoutState
} as InitialState

export const addToCheckoutDB = createAsyncThunk("addToCheckoutThunk", async (id: {_id: string, qty: number}[],) => {
    let idStack: string[] = []
    id.forEach((prod) => {
        idStack.push(prod._id)
    })
    const res = await fetch(`http://localhost:3000/api/product?id=${idStack}`)
    const result = res.json()
    return result
})

const checkout = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckout: (state, action) => {
            return {
                value: {
                    products: action.payload,
                    total: 0,
                }
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(addToCheckoutDB.fulfilled, (state, action: PayloadAction<IProductCheckout[]>) => {
            // state.value.total = action.payload.reduce((prev, cur) => prev.price)
            // state.value.products = action.payload
            console.log("fetched", action.payload)
            return {
                value: {
                    products: action.payload,
                    total: 0
                }
            }
        })
    },
})

export const { addToCheckout } = checkout.actions
export default checkout.reducer