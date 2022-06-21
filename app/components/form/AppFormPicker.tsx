import React from "react";
import {ErrorMessage, useFormikContext} from "formik";

import {AppPicker} from "../AppPicker";
import {CategoryType} from "../../../App";
import {ErrorMessages} from "./ErrorMessages";




type FormData = {
    [key: string]: string;
};

type  AppFormPickerPropsType = {
    placeholder: string
    items: any
    name: keyof FormData
    width?: string | number

}

export const AppFormPicker = ({items, width, name, placeholder}: AppFormPickerPropsType) => {
    const {errors, setFieldValue, values} = useFormikContext<FormData>();
    return (
        <>
            <AppPicker
                width={width}
                items={items}
                onSelectItem={(item) => setFieldValue(name as string, item)}
                placeholder={placeholder}
                selectedItem={values[name] as unknown as CategoryType}
            />
            <ErrorMessages error={errors[name]}/>
        </>
    );
};


