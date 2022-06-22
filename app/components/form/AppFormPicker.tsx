import React from "react";
import {ErrorMessage, useFormikContext} from "formik";

import {AppPicker} from "../AppPicker";

import {ErrorMessages} from "./ErrorMessages";
import { CategoryPickerItemPropsType } from "../CategoryPickerItem";
import { CategoryType } from "../../screens/ListingEditScreen";




type FormData = {
    [key: string]: string;
};

type  AppFormPickerPropsType = {
    placeholder: string
    items: CategoryType[]
    name: keyof FormData
    numbersOfColumn: number
    width?: string | number
    PickerItemComponent?: (props: CategoryPickerItemPropsType) => JSX.Element
}

export const AppFormPicker = ({items, numbersOfColumn, width, PickerItemComponent, name, placeholder}: AppFormPickerPropsType) => {
    const {errors, setFieldValue, values} = useFormikContext<FormData>();
    return (
        <>
            <AppPicker
                width={width}
                PickerItemComponent={PickerItemComponent}
                items={items}
                numbersOfColumn={numbersOfColumn}
                onSelectItem={(item) => setFieldValue(name as string, item)}
                placeholder={placeholder}
                selectedItem={values[name] as unknown as CategoryType}
            />
            <ErrorMessages error={errors[name]}/>
        </>
    );
};


