import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "../config/colors";
import {WelcomeScreen} from "../screens/WelcomeScreen";
import {LoginScreen} from "../screens/LoginScreen";
import {RegisterScreen} from "../screens/RegisterScreen";
import {ListingsScreen} from "../screens/ListingsScreen";
import {ListingDetailsScreen} from "../screens/ListingDetailsScreen";
import {ListingsNavigatorStackParamList} from "./types";


const Stack = createNativeStackNavigator<ListingsNavigatorStackParamList>()


export const ListingsNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)
