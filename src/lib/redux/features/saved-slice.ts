import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: SavedState;
}
type SavedState = {
    lastUpdated: string,
    products: {
        _id: string,
        name: string,
        price: number,
        image: string,
    }[]
}
const initialState = {
    value: {
        lastUpdated: "",
        products: []
    } as SavedState
} as InitialState

const saved = createSlice({
    name: "saved",
    initialState,
    reducers: {
        addItem: (state, action) => {
            return {
                value: {
                    lastUpdated: Date(),
                    products: [...state.value.products, action.payload]
                }
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const newprod = state.value.products.filter(prod => prod._id !== action.payload);
            return {
                value: {
                    lastUpdated: Date(),
                    products: newprod
                }
            }
        }
    }
})

export const {addItem, removeItem} = saved.actions
export default saved.reducer