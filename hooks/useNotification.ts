import {useEffect} from "react";
import * as Notifications from "expo-notifications";
import {sendPushTokenTh} from "../app/store/AppReducer";
import {useNavigation} from "@react-navigation/native";
import {NavigationTabType, useAppNavigation} from "../app/navigation/types";
import {useAppDispatch} from "../app/store/store";





type NotificationListenerType = (event: Notification) => void


export const useNotification = (notificationListener?: NotificationListenerType) => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()


    useEffect(() => {
        registerForPushNotification()
        // Notifications.addNotificationReceivedListener(notification => console.log (notification))
        if (notificationListener) {
            Notifications.addNotificationReceivedListener(notification => navigation.navigate("AppNavigator", {screen: "Account",  params:{screen: "Messages"}}))
        }
    }, []);

    const registerForPushNotification = async () => {
        try {
            await Notifications.requestPermissionsAsync()
            const token = await Notifications.getExpoPushTokenAsync()
            // await expoPushTokensAPI.register(token)
            dispatch(sendPushTokenTh(token.data))
        } catch (error) {
            console.log("Error getting  a push token", error);
        }
    }
}