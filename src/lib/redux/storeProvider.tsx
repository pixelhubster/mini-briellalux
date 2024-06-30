"use client"
import { useRef } from "react"
import { AppStore } from "./store"
import { store } from "./store"
import { Provider } from "react-redux"

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = store()
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}