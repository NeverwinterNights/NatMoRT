import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {RootState} from "./store";
import {RootState} from "./store";
import {apiRequests, ListingDataType} from "../../api/client";
import {setLoadingAC} from "./AppReducer";


// type ListingType = {
//     id: number
//     title: string
//     price: number
//     image: ImageSourcePropType
// }

export type ImagesData = {
    url: string,
    thumbnailUrl: string
}

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    //images: ImageSourcePropType
    images: ImagesData[]
    categoryId: number
    userId: number
    location: {
        latitude: number,
        longitude: number
    }
}


const listings: ListingType[] = []

type initialStateType = {
    listings: ListingType[] | undefined
    error: string
}


export const getAllListingsTh = createAsyncThunk<ListingType[] | undefined, void, { state: RootState }>("listings/getAllListingsTh", async (param, {
    dispatch,
    rejectWithValue
}) => {
    try {
        dispatch(setLoadingAC(true))
        const result = await apiRequests.getListings()
        dispatch(setLoadingAC(false))
        return result.data
    } catch (error) {
        dispatch(setLoadingAC(false))
        return rejectWithValue(error.message)
    }
})

// <ListingType[] | undefined, void, { state: RootState }>
export const addListingsTh = createAsyncThunk("listings/addListingsTh", async (listing: ListingDataType, {
    dispatch,
    rejectWithValue
}) => {
    try {
        // dispatch(setLoadingAC(true))
        // const result = await apiRequests.addListings(param.listing)
        const result = await apiRequests.addListings(listing)

        // const result = await apiRequests.getListings()
        // dispatch(setLoadingAC(false))
        // return result.data
    } catch (error) {
        dispatch(setLoadingAC(false))
        alert("Cant save the listings")
        return rejectWithValue(error.message)
    }
})

// const initialState: ListingType[] = listings
const initialState: initialStateType = {
    listings,
    error: ""
}

export const setErrorAC = createAction<string>("listings/setErrorAC")


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
            // .addCase(addListingsTh.fulfilled, (state, action) => {
            //     console.log("fulfilled")
            //     state.listings = action.payload
            //
            // })
        // .addCase(addListingsTh.rejected, (state, action) => {
        //     state.error = action.payload as string
        //
        // })
    },
})


export const listingsScreen = slice.reducer
