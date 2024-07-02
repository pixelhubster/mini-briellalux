"use client"
import { useRef } from "react"
import { AppStore } from "./store"
import { store } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = store()
    }
    const persistor = persistStore(store())
    return (
        <Provider store={storeRef.current}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}