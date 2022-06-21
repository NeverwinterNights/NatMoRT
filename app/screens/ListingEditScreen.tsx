import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from "yup";
import {AppForm} from '../components/form/AppForm';
import {SubmitButton} from '../components/form/SubmitButton';
import {Screen} from "../components/Screen";
import {AppFormField} from "../components/form/AppFormField";
import {AppFormPicker} from "../components/form/AppFormPicker";

type ListingEditScreenPropsType = {}

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
];

export const ListingEditScreen = ({}: ListingEditScreenPropsType) => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker width={"50%"} items={categories} name="category" placeholder="Category"/>
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});