import {createAction, createSlice} from "@reduxjs/toolkit";
// import {RootState} from "./store";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";


export type CategoryType = {
    backgroundColor: string
    icon: keyof typeof MaterialCommunityIcons.glyphMap
    label: string
    value: number
}

const categories: CategoryType[] = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

type initialStateType = {
    categories: CategoryType[]
    images: string[]
}


export const addImagesAC = createAction<{uri: string}>("listingEdit/addImagesAC")
export const removeImagesAC = createAction<{uri: string}>("listingEdit/removeImagesAC")


// const initialState: CategoryType[]  = categories
const initialState: initialStateType = {
    categories: categories,
    images: []
}

const slice = createSlice({
    name: "listingEdit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addImagesAC, (state, action) => {
                state.images = [...state.images, action.payload.uri]
            })
            .addCase(removeImagesAC, (state, action) => {
                state.images = state.images.filter(imageUri => imageUri != action.payload.uri)
            })
    },
})


export const listingEditScreen = slice.reducer
