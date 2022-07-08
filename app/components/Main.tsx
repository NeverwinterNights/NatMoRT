import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppNavigator} from "../navigation/AppNavigator";
import {AuthNavigator} from "../navigation/AuthNavigator";
import {useAppDispatch, useAppSelector} from "../store/store";
import * as SplashScreen from 'expo-splash-screen';
import {setUserAC} from "../store/AppReducer";
import {getToken} from "../../storage/storage";
import jwtDecode from "jwt-decode";


type MainPropsType = {}

export const Main = ({}: MainPropsType) => {
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
            {Object.keys(user).length > 0 ? <AppNavigator/> : <AuthNavigator/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
