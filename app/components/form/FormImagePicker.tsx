

import {useFormikContext} from "formik";
import React from "react";
import {ImageInputList} from "../ImageInputList";
import {ErrorMessages} from "./ErrorMessages";


type FormData = {
    [key: string]: string;
};


type  FormImagePickerPropsType = {
    name: keyof FormData

}

export const FormImagePicker = ({name}: FormImagePickerPropsType) => {
    const {errors, setFieldValue, touched, values} = useFormikContext<FormData>();


    const imageUris = values[name] as unknown as [];
    const handleAdd = (uri: string) => {
        setFieldValue(name as string, [...imageUris, uri])
    }
    const handleRemove = (uri: string) => {
        setFieldValue(name as string, imageUris.filter((imageUri) => imageUri != uri))
    }



    return (
        <>
            {/*<ImageInputList />*/}
            <ImageInputList  onRemoveImg={handleRemove}
                             onAddImg={handleAdd}/>
            <ErrorMessages error={errors[name]}/>

        </>
    );
};

