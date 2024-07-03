import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: SavedState;
}
type SavedState = {
    lastUpdated: string,
    products: string[]
}

function getState() {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        return localStorage.getItem("savedData") ? JSON.parse(localStorage.getItem("savedData") as string) as InitialState : initialStateOT
    } else {
        return initialStateOT
    }
}

const initialStateOT = {
    value: {
        lastUpdated: "",
        products: []
    } as SavedState
} as InitialState

const initialState = getState()

// const initialState = {
//     value: {
//         lastUpdated: "",
//         products: []
//     } as SavedState
// } as InitialState

const saved = createSlice({
    name: "saved",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const inSave = state.value.products.findIndex(prod => prod === action.payload)
            if (inSave === -1) {
                const newprod = {
                    value: {
                        lastUpdated: Date(),
                        products: [...state.value.products, action.payload]
                    }
                }
                localStorage.setItem("savedData", JSON.stringify(newprod))
                return newprod
            }

        },
        removeItem: (state, action: PayloadAction<string>) => {
            const newprod = state.value.products.filter(prod => prod !== action.payload);
            const returnValue = {
                value: {
                    lastUpdated: Date(),
                    products: newprod
                }
            }
            localStorage.setItem("savedData", JSON.stringify(returnValue))
            return returnValue
        },
    }
})

export const { addItem, removeItem } = saved.actions
export default saved.reducer