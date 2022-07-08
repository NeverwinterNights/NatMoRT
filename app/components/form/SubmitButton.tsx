import React from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";


type SubmitButtonPropsType = {
    title: string

}

export const SubmitButton = ({title}: SubmitButtonPropsType) => {
    const {handleSubmit, errors, values} = useFormikContext<FormData>()

    const index = Object.keys(values)[0]

    const onLoginButtonHandler = () => {

        if (!values[index as keyof FormData]) {
            handleSubmit()
        } else {

            Keyboard.dismiss()
            handleSubmit()
        }

    }

    return (
        <AppButton title={title} onPress={onLoginButtonHandler}/>
    );
};

const styles = StyleSheet.create({
    container: {}
});
