import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiRequests} from "../../api/client";
import {FormikValues} from "formik";
import jwtDecode from "jwt-decode";
import {storeToken} from "../../storage/storage";


export type  UserType = {
    "email": string
    "iat": number
    "name": string
    "userId": number

}

type initialStateType = {
    loading: boolean
    authToken: string
    loginError: string
    user: UserType
}


const initialState: initialStateType = {
    loading: false,
    authToken: "",
    loginError: "",
    user: {} as UserType
}

export const setLoadingAC = createAction<boolean>("app/setLoadingAC")
export const setUserAC = createAction<UserType>("app/setUserAC")


export const authTh = createAsyncThunk("app/authTh", async (param: { authData: FormikValues }, {
    dispatch,
    rejectWithValue
}) => {
    try {
        const res = await apiRequests.login(param.authData.email, param.authData.password)
        const decodeUser:UserType = jwtDecode(res.data)
        dispatch(setUserAC({...decodeUser}))
        await storeToken(res.data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const slice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setLoadingAC, (state, action) => {
                state.loading = action.payload
            })
            .addCase(authTh.fulfilled, (state, action) => {
                state.loginError = ""
                state.authToken = action.payload

            })
            .addCase(authTh.rejected, (state, action) => {
                state.loginError = "Invalid email and/or password"
            })
            .addCase(setUserAC, (state, action) => {
                state.user = action.payload
            })
    },
})


export const appReducer = slice.reducer
