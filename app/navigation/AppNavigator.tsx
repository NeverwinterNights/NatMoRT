import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListingEditScreen} from "../screens/ListingEditScreen";
import {NavigationTabType, RootTabParamList, useAppNavigation} from "./types";
import {ListingsNavigator} from "./ListingsNavigator";
import {AccountNavigator} from "./AccountNavigator";
import {useNavigation} from "@react-navigation/native";
import {MyTabsIcon} from "./MyTabIcons";
import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import {getToken} from "../../storage/storage";
import {useAppDispatch} from "../store/store";
import {sendPushTokenTh} from "../store/AppReducer";
import {useNotification} from "../../hooks/useNotification";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Tab = createBottomTabNavigator<RootTabParamList>();



export const AppNavigator = () => {
    useNotification()

    // useEffect(() => {
    //     registerForPushNotification()
    //     // Notifications.addNotificationReceivedListener(notification => console.log (notification))
    //     Notifications.addNotificationReceivedListener(notification => navigation.navigate("Account", {screen: "Messages"}))
    // }, []);
    //
    // const registerForPushNotification = async () => {
    //     try {
    //         await Notifications.requestPermissionsAsync()
    //         const token = await Notifications.getExpoPushTokenAsync()
    //         console.log(token);
    //         // await expoPushTokensAPI.register(token)
    //         dispatch(sendPushTokenTh(token.data))
    //     } catch (error) {
    //         console.log("Error getting  a push token", error);
    //     }
    // }



    return (
        <Tab.Navigator tabBar={(props) => <MyTabsIcon {...props}/>} screenOptions={{headerShown: false}}>
            <Tab.Screen name={"Main"} component={ListingsNavigator}/>
            <Tab.Screen name={"ListingEdit"} options={{title: "Listing Edit"}} component={ListingEditScreen}/>
            <Tab.Screen name={"Account"} component={AccountNavigator}/>
        </Tab.Navigator>
    )
}