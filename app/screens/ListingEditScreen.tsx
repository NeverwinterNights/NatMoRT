import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet} from 'react-native';
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
import {addListingsTh} from "../store/ListingsReducer";
import {UploadScreen} from "./UploadScreen";
import {FormikHelpers} from "formik";
import {mainAPI} from "../store/RTKSlice";
import {clearImagesAC} from "../store/ListingEditReducer";


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

    const [uploadVisible, setUploadVisible] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);


    const categories = useAppSelector(state => state.listingEditScreen.categories)
    const imagesData = useAppSelector(state => state.listingEditScreen.images)
    // const error: string = useAppSelector(state => state.listingsScreen.error)


    // const handleSubmit = (listing: any, {resetForm}: FormikHelpers<any>) => {
    //     setProgress(0)
    //     setUploadVisible(true)
    //     dispatch(addListingsTh({
    //             listing: {...listing, location},
    //             onUploadProgress: (progress: number) => setProgress(progress)
    //         },
    //     ))
    //     if (!error) {
    //         resetForm()
    //     }
    // }

    const [addListings, {
        status,
        isError,
        error,
        data,
        isLoading,
        fulfilledTimeStamp,
        startedTimeStamp
    }] = mainAPI.useAddListingsMutation();
    const handleSubmit = async (listing: any, {resetForm}: FormikHelpers<any>) => {
        setUploadVisible(true)
        const data = new FormData()
        data.append("title", listing.title)
        data.append("price", listing.price)
        data.append("categoryId", listing.category.value)
        data.append("description", listing.description)
        listing.images.forEach((image: any, index: any) =>
            data.append("images", {
                // @ts-ignore
                name: "image" + index,
                type: "image/jpeg",
                uri: image
            }))
        if (listing.location) {
            data.append("location", JSON.stringify(listing.location))
        }
        await addListings(data).unwrap()
        if (!error) {
            resetForm()
            dispatch(clearImagesAC())
            setProgress(1)
        }
    }



    console.log("status", status)
    return (
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
            <Screen style={styles.container}>

                <KeyboardAvoidingView style={{flex: 1}} behavior={"position"}
                                      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}>
                    <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
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
                </KeyboardAvoidingView>

            </Screen>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
