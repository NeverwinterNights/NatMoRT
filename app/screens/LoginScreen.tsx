import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {Formik} from "formik";
import * as Yup from "yup"
import {AppFormField} from "../components/form/AppFormField";
import {SubmitButton} from "../components/form/SubmitButton";
import {AppForm} from "../components/form/AppForm";

type LoginScreenPropsType = {}

export const LoginScreen = ({}: LoginScreenPropsType) => {


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })


    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppForm
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder={"Email"}
                    name={"email"}
                    icon={"email"}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    keyboardType={"email-address"}
                />
                <AppFormField
                    name={"Password"}
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
