import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ListingsScreen} from "../screens/ListingsScreen";
import {ListingDetailsScreen} from "../screens/ListingDetailsScreen";
import {ListingsNavigatorStackParamList} from "./types";


const Stack = createNativeStackNavigator<ListingsNavigatorStackParamList>()


export const ListingsNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
            <Stack.Screen name="Listings" component={ListingsScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal", gestureEnabled: true}}>
            <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
        </Stack.Group>

    </Stack.Navigator>
)
