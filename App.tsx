import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Screen} from "./app/components/Screen";
import {AppPicker} from "./app/components/AppPicker";
import {LoginScreen} from "./app/screens/LoginScreen";
import {ListingEditScreen} from "./app/screens/ListingEditScreen";
import {ListItem} from "./app/components/ListItem";
import {ListingsScreen} from "./app/screens/ListingsScreen";
import {ListingDetailsScreen} from "./app/screens/ListingDetailsScreen";
import {MessagesScreen} from "./app/screens/MessagesScreen";


export type CategoryType = {
    label: string
    value: number
}

const categories:CategoryType[] = [
    { label:"Furniture", value:1},
    { label:"Sport", value:2},
    { label:"Goods", value:3},
]

export default function App() {

    const [category, setCategory] = useState<CategoryType>(categories[0]);


    return (
        // <GestureHandlerRootView onLayout={onLayoutRootView} style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
            {/*<Screen>*/}
            {/*    <AppPicker selectedItem={category} onSelectItem={(item: any)=> setCategory(item)} items={categories} icon={"apps"} placeholder={"Category"}/>*/}
            {/*</Screen>*/}
            <ListingEditScreen/>
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
