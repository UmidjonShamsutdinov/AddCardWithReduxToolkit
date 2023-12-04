import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "../slices/cartSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const persisConfig = {
    key: "reducer",
    storage: storage,
    whitelist: ["cart"]
}



const persistedReducer = persistReducer(persisConfig)


const store = configureStore({
    reducer:{
        cart_data : cartReducer
    }
})

export {store}