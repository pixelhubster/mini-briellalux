import { configureStore } from "@reduxjs/toolkit";
import savedReducer from './features/saved-slice'
export const store = () => {
    return configureStore({
        reducer: {
            savedReducer,
        }
    })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']