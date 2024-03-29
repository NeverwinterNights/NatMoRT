import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {AppTextInput} from "./AppTextInput";
import {ErrorMessages} from "./ErrorMessages";
import {FormikHelpers, FormikValues, useFormikContext} from "formik";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type FormData = {
    [key: string]: string;
};

type AppFormFieldPropsType = {
    name: keyof FormData
    icon?: keyof typeof MaterialCommunityIcons.glyphMap
    width?: number | string

}



export const AppFormField = ({name, width, ...restProps}: AppFormFieldPropsType & TextInputProps) => {

   const {setFieldTouched, handleChange, setFieldValue, handleSubmit,  values, touched, errors} = useFormikContext<FormData>()


       return (
        <>
            <AppTextInput
                width={width}
                onBlur={() => setFieldTouched(name as string)}
                onChangeText={text => setFieldValue(name as string, text)}
                value={values[name]}
                // onSubmitEditing={()=> handleSubmit()}
                {...restProps}
            />
            {/*{touched[name] && <ErrorMessages error={errors[name]}/>}*/}
            {touched[name] && <ErrorMessages error={errors[name]}/>}
        </>
    );
};

