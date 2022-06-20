import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from "./AppText";
import {CategoryType} from "../../App";

type PickerItemPropsType = {
    label: string
    onPress?: () => void
}

export const PickerItem = ({label, onPress}: PickerItemPropsType) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
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
