import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {listingEditScreen} from "./ListingEditReducer";
import thunkMiddleware from 'redux-thunk'
import {listingsScreen} from "./ListingsReducer";

const rootReducer = combineReducers({
    listingEditScreen: listingEditScreen,
    listingsScreen:listingsScreen
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})




export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
