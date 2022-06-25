import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Provider} from "react-redux";
import {store} from "./app/store/store";
import {AuthNavigator} from "./app/navigation/AuthNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { myTheme } from './app/navigation/NavigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';



export default function App() {

    // const [category, setCategory] = useState<CategoryType>(categories[0]);


    return (
        // <GestureHandlerRootView onLayout={onLayoutRootView} style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <NavigationContainer theme={myTheme}>
                    {/*<Screen>*/}
                    {/*    <AppPicker selectedItem={category} onSelectItem={(item: any)=> setCategory(item)} items={categories} icon={"apps"} placeholder={"Category"}/>*/}
                    {/*</Screen>*/}
                    <AppNavigator/>
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
