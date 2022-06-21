import React from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";

type SubmitButtonPropsType = {
    title: string
}

export const SubmitButton = ({title}:SubmitButtonPropsType) => {
    const {handleSubmit} = useFormikContext<FormData>()

    const onLoginButtonHandler = () => {
        handleSubmit()
        Keyboard.dismiss()
    }

    return (
     <AppButton title={title} onPress={onLoginButtonHandler}/>
 );
};

const styles = StyleSheet.create({
  container: {
  
  }
});
