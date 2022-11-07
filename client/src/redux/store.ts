import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import pharmacistReducer from "./pharmacist";
import orderReducer from "./order";
import medicineReducer from "./medicine";
import cartReducer from "./cart";

const persistConfig = {
    key: "pharmacist",
    storage
}

const persistPharmacistReducer = persistReducer(persistConfig, pharmacistReducer);

const store = configureStore({
    reducer: {
        pharmacist: persistPharmacistReducer,
        order: orderReducer,
        medicine: medicineReducer,
        cart: cartReducer
    }
})
const storePersistor = persistStore(store);

export {storePersistor, store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch