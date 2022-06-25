import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
import {ListingsScreen} from "../screens/ListingsScreen";
import {ListingEditScreen} from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import {NavigationTabType, RootTabParamList} from "./types";
import {ListingsNavigator} from "./ListingsNavigator";
import colors from "../config/colors";




const Tab = createBottomTabNavigator<RootTabParamList>();
// const useAppNavigation = () => useNavigation<NavigationTabType>()


export const AppNavigator = () => (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={"Main"}  component={ListingsNavigator}/>
        <Tab.Screen name={"ListingEdit"} options={{title:"Listing Edit"}} component={ListingEditScreen}/>
        <Tab.Screen name={"Account"} component={AccountScreen}/>
    </Tab.Navigator>
)