import userReducer from "./userSlice"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"

import { combineReducers } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            },
        }),
})

export const persistor = persistStore(store)