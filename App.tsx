import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ListingEditScreen} from "./app/screens/ListingEditScreen";
import {Provider} from "react-redux";
import {store} from "./app/store/store";


export default function App() {

    // const [category, setCategory] = useState<CategoryType>(categories[0]);


    return (
        // <GestureHandlerRootView onLayout={onLayoutRootView} style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                {/*<Screen>*/}
                {/*    <AppPicker selectedItem={category} onSelectItem={(item: any)=> setCategory(item)} items={categories} icon={"apps"} placeholder={"Category"}/>*/}
                {/*</Screen>*/}
                <ListingEditScreen/>
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
