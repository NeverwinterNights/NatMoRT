import React from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";
import jwtDecode from "jwt-decode";



type SubmitButtonPropsType = {
    title: string
}

export const SubmitButton = ({title}:SubmitButtonPropsType) => {
    const {handleSubmit, values} = useFormikContext()


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
