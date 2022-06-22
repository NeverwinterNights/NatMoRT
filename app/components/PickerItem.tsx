import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { CategoryType } from '../screens/ListingEditScreen';
import {AppText} from "./AppText";


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
