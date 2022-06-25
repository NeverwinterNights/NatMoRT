import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from "yup";
import {AppForm} from '../components/form/AppForm';
import {SubmitButton} from '../components/form/SubmitButton';
import {Screen} from "../components/Screen";
import {AppFormField} from "../components/form/AppFormField";
import {AppFormPicker} from "../components/form/AppFormPicker";
import {CategoryPickerItem} from '../components/CategoryPickerItem';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import {useAppSelector} from "../store/store";
import {FormImagePicker} from "../components/form/FormImagePicker";
import * as Location from "expo-location";
import { useLocation } from '../../hooks/useLocation';






type ListingEditScreenPropsType = {}

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
});


export const ListingEditScreen = ({}: ListingEditScreenPropsType) => {

    const location = useLocation()

    const categories = useAppSelector(state => state.listingEditScreen.categories)
    const images = useAppSelector(state => state.listingEditScreen.images)


    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: images
                }}
                onSubmit={(values) => console.log(values)}
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