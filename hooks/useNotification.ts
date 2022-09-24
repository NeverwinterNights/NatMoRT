import {useEffect} from "react";
import * as Notifications from "expo-notifications";
import {sendPushTokenTh} from "../app/store/AppReducer";
import {useNavigation} from "@react-navigation/native";
import {NavigationTabType, useAppNavigation} from "../app/navigation/types";
import {useAppDispatch} from "../app/store/store";
import {mainAPI} from "../app/store/RTKSlice";
import {colorNames} from "react-native-svg/lib/typescript/lib/extract/extractColor";


type NotificationListenerType = (event: Notification) => void


export const useNotification = (notificationListener?: NotificationListenerType) => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const [registerToken, {isError, error, data}] = mainAPI.useRegisterTokenMutation();


    useEffect(() => {
        registerForPushNotification()
        // Notifications.addNotificationReceivedListener(notification => console.log (notification))
        if (notificationListener) {
            Notifications.addNotificationReceivedListener(notification => navigation.navigate("AppNavigator", {
                screen: "Account",
                params: {screen: "Messages"}
            }))
        }
    }, []);

    const registerForPushNotification = async () => {
        try {
            await Notifications.requestPermissionsAsync()
            const token = await Notifications.getExpoPushTokenAsync()
         // dispatch(sendPushTokenTh(token.data))

           await registerToken(token.data).unwrap()
        } catch (error) {
            console.log("Error getting  a push token", error);
        }
    }


}
