import AccountScreen from "../screens/AccountScreen";
import {MessagesScreen} from "../screens/MessagesScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootMainParamList} from "./types";
import {AuthNavigator} from "./AuthNavigator";
import {AppNavigator} from "./AppNavigator";

const Stack = createNativeStackNavigator<RootMainParamList>()

export const RootNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false}}/>
    </Stack.Navigator>
)