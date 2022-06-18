import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from "./app/config/colors";
import {Card} from "./app/components/Card";
import {ListingDetailsScreen} from "./app/screens/ListingDetailsScreen";
import {ViewImageScreen} from "./app/screens/ViewImageScreen";
import {MessagesScreen} from "./app/screens/MessagesScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
    return (
        // <GestureHandlerRootView onLayout={onLayoutRootView} style={{flex: 1}}>
         <GestureHandlerRootView style={{flex: 1}}>

            <MessagesScreen/>

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
