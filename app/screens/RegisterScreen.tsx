import React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {Screen} from "../components/Screen";

import {FormikValues} from "formik";
import {AppForm} from "../components/form/AppForm";
import {ErrorMessages} from "../components/form/ErrorMessages";
import {AppFormField} from "../components/form/AppFormField";
import {SubmitButton} from "../components/form/SubmitButton";
import {useAppDispatch, useAppSelector} from "../store/store";
import {registerTh} from "../store/AppReducer";
import {ActivityIndic} from "../components/ActivityIndicator";
import {mainAPI} from "../store/RTKSlice";
import {UserInfoType} from "../../api/client";


export const RegisterScreen = () => {
    const dispatch = useAppDispatch()
    // const error = useAppSelector(state => state.appReducer.registerError)
    // const isLoading = useAppSelector(state => state.appReducer.loading)


    // const loginApi = useApi(authApi.login);
    const [register, {isLoading, data, error}] = mainAPI.useRegisterMutation();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });

    // const handleSubmit = async (values: FormikValues) => {
    //     // dispatch(registerTh({values}))
    // }

    const handleSubmit = async (values: FormikValues) => {
        // dispatch(registerTh({values}))
        register(values as UserInfoType).unwrap()

    }

    return (
        <>
            <ActivityIndic styleInd={{top:100}}  visible={isLoading}/>
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{name: "", email: "", password: ""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessages error={error as string}/>
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register"/>
                </AppForm>
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});
