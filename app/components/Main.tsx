import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppNavigator} from "../navigation/AppNavigator";
import {AuthNavigator} from "../navigation/AuthNavigator";
import {useAppDispatch, useAppSelector} from "../store/store";
import * as SplashScreen from 'expo-splash-screen';
import {setUserAC} from "../store/AppReducer";
import {getToken} from "../../storage/storage";
import jwtDecode from "jwt-decode";
import {RootNavigator} from "../navigation/RootNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootMainParamList} from "../navigation/types";
import {useSelector} from "react-redux";


type MainPropsType = {}

const Stack = createNativeStackNavigator<RootMainParamList>()


export const Main = ({}: MainPropsType) => {
     // const user = useAppSelector(state => state.appReducer.user)
     const user = useAppSelector(state => state.appReducer.user)

    const [isReady, setIsReady] = useState<boolean>(false);


    const dispatch = useAppDispatch()


    const restoreToken = async () => {
        const token = await getToken()
        if (!token) return
        dispatch(setUserAC(jwtDecode(token)))
    }
    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                restoreToken()
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }


    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Stack.Navigator>
                {Object.keys(user).length > 0
                    ? <Stack.Screen name="AppNavigator" component={AppNavigator}
                                    options={{headerTitleAlign: "center", headerShown: false}}/>
                    : <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{headerShown: false}}/>}
            </Stack.Navigator>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
