import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AccountNavigatorStackParamList} from "./types";
import AccountScreen from "../screens/AccountScreen";
import {MessagesScreen} from "../screens/MessagesScreen";


const Stack = createNativeStackNavigator<AccountNavigatorStackParamList>()


export const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="AccountData" component={AccountScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerTitleAlign: "center",headerShown: false}}/>
    </Stack.Navigator>
)
