import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListingEditScreen} from "../screens/ListingEditScreen";
import {NavigationTabType, RootTabParamList} from "./types";
import {ListingsNavigator} from "./ListingsNavigator";
import {AccountNavigator} from "./AccountNavigator";
import {useNavigation} from "@react-navigation/native";
import {MyTabsIcon} from "./MyTabIcons";


const Tab = createBottomTabNavigator<RootTabParamList>();
const useAppNavigation = () => useNavigation<NavigationTabType>()


export const AppNavigator = () => {
    const navigation = useAppNavigation()

    return (
        <Tab.Navigator tabBar={(props) => <MyTabsIcon {...props}/>} screenOptions={{headerShown: false}}>
            <Tab.Screen name={"Main"} component={ListingsNavigator}/>
            <Tab.Screen name={"ListingEdit"} options={{title: "Listing Edit"}} component={ListingEditScreen}/>
            <Tab.Screen name={"Account"} component={AccountNavigator}/>
        </Tab.Navigator>
    )
}