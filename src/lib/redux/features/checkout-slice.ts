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

export const addToCheckoutDB = createAsyncThunk("addToCheckoutThunk", async (id: { _id: string, qty: number }[],) => {
    let idStack: string[] = []
    id.forEach((prod) => {
        idStack.push(prod._id)
    })
    const res = await fetch(`http://localhost:3000/api/product?id=${idStack}`)
    const result = res.json()
    let newprod: IProductCheckout[] = []
    for (const item of await result) {
        for (const value of id) {
            if (item._id === value._id) {
                newprod.push({ ...item, qty: value.qty })
            }
        }
    }
    return newprod
})

const checkout = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        // removeFromCheckout: (state, action) => {
        //     state.value.total -= state.value.products.find(prod => prod._id === action.payload)?.price as number
        //     state.value.products = state.value.products.filter((prod) => prod._id !== action.payload)
            
        // }
    },
    extraReducers(builder) {
        builder.addCase(addToCheckoutDB.fulfilled, (state, action: PayloadAction<IProductCheckout[]>) => {
            // state.value.total = 
            // action.payload.reduce((prev, cur) => prev)
            let sum = 0
            action.payload.forEach(element => sum += element.price * element.qty)
            return {
                value: {
                    products: action.payload,
                    total: sum
                }
            }
        })
    },
})

// export const { removeFromCheckout } = checkout.actions
export default checkout.reducer