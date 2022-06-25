import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {RootState} from "./store";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import {ImageSourcePropType} from "react-native";
import {ImagesData} from "../screens/ListingsScreen";


// type ListingType = {
//     id: number
//     title: string
//     price: number
//     image: ImageSourcePropType
// }

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    images: ImageSourcePropType
    // images: ImagesData[]
    categoryId: number
    userId: number
    location: {
        latitude: number,
        longitude: number
    }
}



const listings:ListingType[] = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        images: require("../assets/jacket.jpg")
    } as ListingType,
    {
        id: 2,
        title: "Couch in great condition",
        price: 600,
        images: require("../assets/couch.jpg")
    } as ListingType
]


//export const addListingsAC = createAction<{}>("listingEdit/addListings")

const initialState: ListingType[]  = listings

const slice = createSlice({
    name: "listings",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    },
})



export const listingsScreen = slice.reducer
