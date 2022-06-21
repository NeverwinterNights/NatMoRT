import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, TextInputProps, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import {AppText} from "./AppText";
import AppButton from "./AppButton";
import {Screen} from "./Screen";
import {CategoryType} from "../../App";
import {PickerItem} from "./PickerItem";

type  AppPickerPropsType = {
    numbersOfColumn?: number
    icon?: keyof typeof MaterialCommunityIcons.glyphMap
    placeholder: string
    name?: string
    width?: string | number
    items: CategoryType[]
    selectedItem?: CategoryType
    onSelectItem: (item: CategoryType) => void
    PickerItemComponent?: (props:any)=> JSX.Element
}

export const AppPicker = ({
                              icon,
                              selectedItem,
                              onSelectItem,
                              items,
                              placeholder,
                              width = "100%",
                              ...restProps
                          }: AppPickerPropsType & TextInputProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width: width}]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium}/>}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem?.label}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name={"chevron-down"} size={20} color={colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"}>
                <Screen>
                    <AppButton title={"Close"} onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({item}) => <PickerItem
                            onPress={() => {
                                setModalVisible(false)
                                onSelectItem(item)
                            }} label={item.label}/>}/>
                </Screen>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
        fontSize: 18
    },
});
