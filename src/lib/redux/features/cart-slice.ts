import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart, IProduct } from "@/lib/type"

type InitialState = {
    value: CartState
}
type CartState = {
    lastUpdated: string,
    products: ICart[]
}

async function getState() {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        if (localStorage.getItem("cartData")) {
            const localstore = JSON.parse(localStorage.getItem("cartData") as string) as InitialState
            const res = await fetch("http://localhost:3000/api/cart", {
                method: "GET",
            }).then(async res => await res.json())
            return res
        } 
        return initialStateOT
    } else {
        return initialStateOT
    }
}

const initialStateOT = {
    value: {
        lastUpdated: "",
        products: []
    } as CartState
} as InitialState

const initialState = initialStateOT

export const syncCart = createAsyncThunk("syncCart", async ({ method, _id, quantity, productid }: { method: string, _id?: string[], quantity?: number, productid?: string }) => {
    try {
        if (method === "GET") {
            const res = await fetch(`http://localhost:3000/api/cart`, {
                method,                
            })
            const cartItem = await res.json()
            console.log(cartItem)
            return cartItem
        }
        const res = await fetch(`http://localhost:3000/api/cart`, {
            method,
            body: JSON.stringify({
                _id,
                productid,
                quantity
            })
            
        })
        console.log(await res.json())
        // res.ok ? true: false
    } catch (error) {
        console.log(error)
    }
})

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const inCart = state.value.products.findIndex(prod => prod._id === action.payload._id)
            if (inCart === -1) {
                const newcart = {
                    value: {
                        lastUpdated: Date(),
                        products: [...state.value.products, action.payload]
                    }
                }
                localStorage.setItem("cartData", JSON.stringify(newcart))
                return newcart
            }
        },
        removeFromCart: (state, action) => {
            const newprod = state.value.products.filter(prod => prod.productid !== action.payload)
            const newcart = {
                value: {
                    lastUpdated: Date(),
                    products: newprod
                }
            }
            localStorage.setItem("cartData", JSON.stringify(newcart))
            return newcart
        },
        changeQuantity: (state, action: PayloadAction<{ _id: string, quantity: number }>) => {
            const { _id, quantity } = action.payload
            const index = state.value.products.findIndex(prod => prod.productid === _id)
            if (index !== -1) {
                state.value.products[index].quantity = quantity
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(syncCart.fulfilled, (state, action: PayloadAction<ICart[]>) => {
            if (action.payload) {
                console.log("action",action.payload)
                return {
                    value: {
                        lastUpdated: Date(),
                        products: action.payload
                    }
                }
            }
        })
    },
})

export const { addToCart, removeFromCart, changeQuantity } = cart.actions
export default cart.reducer