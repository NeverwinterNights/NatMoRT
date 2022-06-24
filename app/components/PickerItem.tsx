import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {AppText} from "./AppText";
import {CategoryType} from "../store/ListingEditReducer";


type PickerItemPropsType = {
    onPress?: () => void
    item: CategoryType
}

export const PickerItem = ({item, onPress}: PickerItemPropsType) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    text: {
        padding:20
    }
});
