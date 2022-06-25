import React, {useState} from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {Screen} from "../components/Screen";

import {ErrorMessage, FormikValues} from "formik";
import { AppForm } from "../components/form/AppForm";
import {ErrorMessages} from "../components/form/ErrorMessages";
import { AppFormField } from "../components/form/AppFormField";
import { SubmitButton } from "../components/form/SubmitButton";


export const RegisterScreen = () => {
    const [error, setError] = useState<string>();

    // const loginApi = useApi(authApi.login);



    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });

    const handleSubmit = async (userInfo: FormikValues) => {
        console.log("object");
    }

    return (
        <>

            <Screen style={styles.container}>
                {/*<ActivityIndicator visible={registerApi.loading || loginApi.loading}/>*/}

                <AppForm
                    initialValues={{name: "", email: "", password: ""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessages error={error} />
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
