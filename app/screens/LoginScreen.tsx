import React, { useState } from 'react';
import {Image, Keyboard, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {AppTextInput} from "../components/form/AppTextInput";
import AppButton from "../components/AppButton";

type LoginScreenPropsType = {}

export const LoginScreen = ({}: LoginScreenPropsType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const onLoginButtonHandler = () => {
        console.log (email, password)
        Keyboard.dismiss()
    }
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppTextInput
                placeholder={"Email"}
                icon={"email"}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"email-address"}
                onChangeText={(text)=> setEmail(text)}
            />
            <AppTextInput
                placeholder={"Password"}
                icon={"lock"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry
                onChangeText={(text)=> setPassword(text)}
            />
            <AppButton title={"Login"} onPress={onLoginButtonHandler}/>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});
