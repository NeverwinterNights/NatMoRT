import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {FormikValues} from "formik";
import * as Yup from "yup"
import {AppFormField} from "../components/form/AppFormField";
import {SubmitButton} from "../components/form/SubmitButton";
import {AppForm} from "../components/form/AppForm";
import {useAppDispatch, useAppSelector} from "../store/store";
import {loginTh, setLoadingAC, setUserAC, UserType} from "../store/AppReducer";
import {ErrorMessages} from "../components/form/ErrorMessages";
import {mainAPI} from "../store/RTKSlice";
import {LoginError, LoginType} from "../../types/types";
import jwtDecode from "jwt-decode";
import {storeToken} from "../../storage/storage";
import {getDataToStore} from "../../utility/cache";


type LoginScreenPropsType = {}

export const LoginScreen = ({}: LoginScreenPropsType) => {
    const dispatch = useAppDispatch()
    const loginError = useAppSelector(state => state.appReducer.loginError)
    // const [user, setUser] = useState<UserType | null>(null);
    // const [token, setToken] = useState("");


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })

    const [login, {isError, error, data}] = mainAPI.useLoginMutation();
    const handleSubmit = async (authData: FormikValues) => {


        try {
            const res = await login(authData as LoginType).unwrap()
            const decodeUser: UserType = jwtDecode(res)
            await storeToken(res)
            dispatch(setUserAC({...decodeUser}))
        } catch (error) {
            console.log("value", error)
        }


        // setToken(res.data)
        // dispatch(setUserAC({...decodeUser}))
    }


    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppForm
                initialValues={{email: "", password: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessages error={error ? "Email or Password uncorrected" : ""}/>
                <AppFormField
                    placeholder={"Email"}
                    name={"email"}
                    icon={"email"}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    keyboardType={"email-address"}
                />
                <AppFormField
                    name={"password"}
                    placeholder={"Password"}
                    icon={"lock"}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    secureTextEntry
                />
                <SubmitButton title={"Login"}/>
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    error: {
        color: "red"
    },
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});
