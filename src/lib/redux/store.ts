import { configureStore } from "@reduxjs/toolkit";
import savedReducer from './features/saved-slice'
import cartReducer from './features/cart-slice'
import checkoutReducer from './features/checkout-slice'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: number) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    savedReducer,
    cartReducer,
    checkoutReducer
})

const customPersister = persistReducer(persistConfig, reducer)

export const store = () => {
    return configureStore({
        reducer: customPersister,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']