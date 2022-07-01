import {createAction, createSlice} from "@reduxjs/toolkit";


type initialStateType = {
    loading: boolean
}


const initialState: initialStateType = {
    loading: false
}

export const setLoadingAC = createAction<boolean>("app/setLoadingAC")


const slice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setLoadingAC, (state, action) => {
                state.loading = action.payload
            })

    },
})


export const appReducer = slice.reducer
