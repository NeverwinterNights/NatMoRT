import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiRequests} from "../../api/client";
import {FormikValues} from "formik";
import jwtDecode from "jwt-decode";
import {storeToken} from "../../storage/storage";
import axios, {AxiosError} from "axios";
import {Alert} from "react-native";


export type  UserType = {
    "email": string
    "iat": number
    "name": string
    "userId": number

}

type MessageType = {
    title: string
    body: string
}
type initialStateType = {
    loading: boolean
    authToken: string
    loginError: string
    user: UserType
    registerError: string
    messageBody: MessageType
}


const initialState: initialStateType = {
    loading: false,
    authToken: "",
    loginError: "",
    user: {} as UserType,
    registerError: "",
    messageBody: {} as MessageType
}

export const setLoadingAC = createAction<boolean>("app/setLoadingAC")
export const setUserAC = createAction<UserType>("app/setUserAC")
export const setRegisterErrorAC = createAction<string>("app/setRegisterErrorAC")


export const loginTh = createAsyncThunk("app/authTh", async (param: { authData: FormikValues }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setLoadingAC(true))
    try {
        const res = await apiRequests.login(param.authData.email, param.authData.password)
        const decodeUser: UserType = jwtDecode(res.data)
        dispatch(setUserAC({...decodeUser}))
        await storeToken(res.data)
        dispatch(setLoadingAC(false))
        return res.data
    } catch (error) {
        dispatch(setLoadingAC(false))
        return rejectWithValue(error.message)
    }
})

export const registerTh = createAsyncThunk("app/registerTh", async (param: { values: any }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setLoadingAC(true))
    try {
        dispatch(setRegisterErrorAC(""))
        const results = await apiRequests.register(param.values)
        dispatch(loginTh({authData: results.data}))
        dispatch(setLoadingAC(false))
    } catch (e) {
        dispatch(setLoadingAC(false))
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            dispatch(setRegisterErrorAC(err.response?.data ? err.response.data.error : err.message))
        }
    }
})


export const sendPushTokenTh = createAsyncThunk("app/sendTushTokenTh", async (token: string, {
    dispatch,
    rejectWithValue
}) => {

    try {
        const results = await apiRequests.registerToken(token)
    } catch (error) {

    }
})

export const sendMessageTh = createAsyncThunk("app/sendMessageTh", async (param: { message: string, listingId: number }, {
    dispatch,
    rejectWithValue
}) => {
    try {
        const result = await apiRequests.sendMessages(param.message, param.listingId);
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
            .addCase(loginTh.fulfilled, (state, action) => {
                state.loginError = ""
                state.authToken = action.payload

            })
            .addCase(loginTh.rejected, (state, action) => {
                state.loginError = "Invalid email and/or password"
            })
            .addCase(setUserAC, (state, action) => {
                state.user = action.payload
            })
            .addCase(registerTh.fulfilled, (state, action) => {
            })
            .addCase(setRegisterErrorAC, (state, action) => {
                state.registerError = action.payload
            })
            .addCase(sendMessageTh.fulfilled, (state, action) => {
                state.messageBody.title = "Awesome!"
                state.messageBody.body = "Your message was sent to the seller."
            })
            .addCase(sendMessageTh.rejected, (state, action) => {
                console.log("Error", action.error);
                return Alert.alert("Error", "Could not send the message to the seller.");
            })
    },
})


export const appReducer = slice.reducer
