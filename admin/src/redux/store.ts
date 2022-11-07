import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import adminReducer from "./admin"
import pharmacistReducer from "./pharmacist"
import companyReducer from "./company"
import medicineReducer from "./medicine"
import orderReducer from "./orders"

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, adminReducer)

const store = configureStore({
    reducer: {
        admin: persistedReducer,
        pharmacists: pharmacistReducer,
        company: companyReducer,
        medicine: medicineReducer,
        order: orderReducer,
    }
})

const persistor = persistStore(store);

export {persistor, store}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch