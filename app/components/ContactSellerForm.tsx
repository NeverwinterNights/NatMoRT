import React from "react";
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";


import {Formik, FormikHelpers, FormikValues} from "formik";
import {useAppDispatch} from "../store/store";
import {sendMessageTh} from "../store/AppReducer";
import {ListingType} from "../store/ListingsReducer";
import AppButton from "./AppButton";
import {Keyboard, Platform, TextInput} from "react-native";
import colors from "../config/colors";
import {AppText} from "./AppText";


type  ContactSellerFormPropsType = {
    listing: ListingType
}


function ContactSellerForm({listing}: ContactSellerFormPropsType) {
    const dispatch = useAppDispatch()


    const validationSchema = Yup.object().shape({
        message: Yup.string().required().min(1).label("Message"),
    });

    Notifications.setNotificationHandler({
        handleNotification: async () => {
            return {
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            };
        },
    });

    const handleSubmit = async ({message}: FormikValues, {resetForm}: FormikHelpers<any>) => {


        dispatch(sendMessageTh({message, listingId: listing.id}))
        resetForm()
        Keyboard.dismiss();

        const content = {
            title: "Awesome!",
            body: "Your message was sent to the seller.",
        };
        await Notifications.scheduleNotificationAsync({content, trigger: null});


    };

    // const sendNotification = async () => {
    //     console.log(content);
    //     await Notifications.scheduleNotificationAsync({content, trigger: null});
    // }
    //
    //
    //
    // useEffect(()=> {
    //     console.log("object", content);
    //     sendNotification()
    // }, [content])

    // Notifications.addNotificationReceivedListener(notification => navigation.navigate("Account", {screen: "Messages"}))


    return (
        <Formik
            initialValues={{message: ""}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit, values, touched, errors, setFieldTouched, handleChange}) => (
                <>
                    <TextInput
                        style={{
                            backgroundColor: colors.light,
                            borderRadius: 25,
                            flexDirection: "row",
                            padding: 15,
                            marginVertical: 10,
                            alignItems: "center",
                            fontSize: 18,
                            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                            color: colors.dark,
                            width: "100%"
                        }}
                        maxLength={255}
                        onChangeText={handleChange("message")}
                        multiline
                        value={values.message}
                        // onBlur={() => setFieldTouched("message")}
                        numberOfLines={3}
                        placeholder="Message..."
                    />
                    <AppText>{touched.message && errors["message"]}</AppText>
                    <AppButton onPress={handleSubmit} title={"Contact Seller"}/>
                </>
            )}
        </Formik>



        // <>
        //     <AppForm
        //         initialValues={{message: ""}}
        //         onSubmit={handleSubmit}
        //         validationSchema={validationSchema}
        //     >
        //         <AppFormField
        //             maxLength={255}
        //             multiline
        //             name="message"
        //             numberOfLines={3}
        //             placeholder="Message..."
        //         />
        //         <SubmitButton title="Contact Seller"/>
        //     </AppForm>
        // </>


    )
        ;
}


export default ContactSellerForm;
