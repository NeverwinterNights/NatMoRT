import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {RootState} from "./store";
import {RootState} from "./store";
import {apiRequests, ListingDataType} from "../../api/client";
import {setLoadingAC} from "./AppReducer";
import {LocationType} from "../screens/ListingEditScreen";
import {Alert} from "react-native";
import {getDataToStore, setDataToStore} from "../../utility/cache";


export type ImagesData = {
    url: string,
    thumbnailUrl: string
}

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    images: ImagesData[]
    categoryId: number
    userId: number
    location: LocationType
}


const listings = [] as ListingType[]

type initialStateType = {
    listings: ListingType[]
    error: string
}


export const getAllListingsTh = createAsyncThunk<ListingType[], void, { state: RootState }>("listings/getAllListingsTh", async (param, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setLoadingAC(true))
    try {
        const result = await apiRequests.getListings()
        dispatch(setLoadingAC(false))
        await setDataToStore("listingsData", result.data)
        return result.data
    } catch (error) {
        dispatch(setLoadingAC(false))
        const savedData: ListingType[] = await getDataToStore("listingsData")
        if (savedData.length > 0) {
            dispatch(setDataFromLSAC(savedData))
        }
        return rejectWithValue(error.message)
    }
})

// <ListingType[] | undefined, void, { state: RootState }>
// export const addListingsTh = createAsyncThunk("listings/addListingsTh", async (listing: ListingDataType, {
export const addListingsTh = createAsyncThunk("listings/addListingsTh", async (param: { listing: ListingDataType, onUploadProgress: (progress: number) => void }, {
    dispatch,
    rejectWithValue
}) => {
    try {
        dispatch(setErrorAC(""))
        dispatch(setLoadingAC(true))
        await apiRequests.addListings(param.listing, param.onUploadProgress)
        const result = await apiRequests.getListings()
        dispatch(setLoadingAC(false))
        return result.data
    } catch (error) {
        dispatch(setLoadingAC(false))
        // alert("Cant save the listings")
        dispatch(setErrorAC(error.message))
        Alert.alert(error.message)
        return rejectWithValue(error.message)
    }
})

// const initialState: ListingType[] = listings
const initialState: initialStateType = {
    listings,
    error: ""
}

export const setErrorAC = createAction<string>("listings/setErrorAC")
export const setDataFromLSAC = createAction<ListingType[]>("listings/setDataFromLSAC")


const slice = createSlice({
    name: "listings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllListingsTh.fulfilled, (state, action) => {
                state.error = ""
                state.listings = action.payload
            })
            .addCase(getAllListingsTh.rejected, (state, action) => {
                state.error = action.payload as string
            })
            .addCase(addListingsTh.fulfilled, (state, action) => {
                state.listings = action.payload
            })
            .addCase(addListingsTh.rejected, (state, action) => {
                state.error = action.payload as string

            })
            .addCase(setErrorAC, (state, action) => {
                state.error = action.payload
            })
            .addCase(setDataFromLSAC, (state, action) => {
                state.listings = action.payload
            })
    },
})


export const listingsScreen = slice.reducer
