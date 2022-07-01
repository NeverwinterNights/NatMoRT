import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from "yup";
import {AppForm} from '../components/form/AppForm';
import {SubmitButton} from '../components/form/SubmitButton';
import {Screen} from "../components/Screen";
import {AppFormField} from "../components/form/AppFormField";
import {AppFormPicker} from "../components/form/AppFormPicker";
import {CategoryPickerItem} from '../components/CategoryPickerItem';
import {useAppDispatch, useAppSelector} from "../store/store";
import {FormImagePicker} from "../components/form/FormImagePicker";
import {useLocation} from '../../hooks/useLocation';
import axios from "axios";
import {addListingsTh} from "../store/ListingsReducer";


export type ListingFromForm = {
    category: { value: string }
    description: string
    images: []
    title: string
    price: string
}


export type LocationType = {
    latitude: number
    longitude: number

}


type ListingEditScreenPropsType = {}

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
});


export const ListingEditScreen = ({}: ListingEditScreenPropsType) => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    const categories = useAppSelector(state => state.listingEditScreen.categories)
    const imagesData = useAppSelector(state => state.listingEditScreen.images)





    const handleSubmit = (listing: any) => {

         dispatch(addListingsTh({...listing, location}))
    }


    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: imagesData
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name={"images"}/>
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    PickerItemComponent={CategoryPickerItem}
                    width={"50%"}
                    items={categories}
                    numbersOfColumn={3}
                    name="category"
                    placeholder="Category"
                />

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