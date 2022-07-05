import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import {WelcomeScreen} from "../screens/WelcomeScreen";
import {RegisterScreen} from "../screens/RegisterScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register"  component={RegisterScreen}
                      options={{ }}/>
    </Stack.Navigator>
)

