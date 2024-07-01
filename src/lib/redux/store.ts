import { configureStore } from "@reduxjs/toolkit";
import savedReducer from './features/saved-slice'
import cartReducer from './features/cart-slice'
export const store = () => {
    return configureStore({
        reducer: {
            savedReducer,
            cartReducer,
        }
    })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']