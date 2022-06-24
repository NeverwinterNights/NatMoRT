import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {RootState} from "./store";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import {ImageSourcePropType} from "react-native";


type ListingType = {
    id: number
    title: string
    price: number
    image: ImageSourcePropType
}


const listings:ListingType[] = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 600,
        image: require("../assets/couch.jpg")
    }
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
