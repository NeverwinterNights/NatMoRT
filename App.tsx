import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Provider} from "react-redux";
import {store, useAppSelector} from "./app/store/store";
import {AuthNavigator} from "./app/navigation/AuthNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {myTheme} from './app/navigation/NavigationTheme';
import {OfflineNotice} from "./app/components/OfflineNotice";
import {AppNavigator} from "./app/navigation/AppNavigator";
import {Main} from "./app/components/Main";


export default function App() {


    // const [category, setCategory] = useState<CategoryType>(categories[0]);


    return (
        // <GestureHandlerRootView onLayout={onLayoutRootView} style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
            <OfflineNotice/>
            <Provider store={store}>
                <NavigationContainer theme={myTheme}>
                   <Main/>
                    {/*<AppNavigator/>*/}
                    {/*<AuthNavigator/>*/}
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
