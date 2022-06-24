import {Pressable, StyleSheet, View} from 'react-native';
import {Icon} from "./Icon";
import {AppText} from "./AppText";
import {CategoryType} from "../store/ListingEditReducer";






export type  CategoryPickerItemPropsType = {
    onPress?: () => void
    item: CategoryType
}

export const CategoryPickerItem = ({onPress, item}: CategoryPickerItemPropsType) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
                <AppText style={styles.label}>{item.label}</AppText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
        overflow: "hidden"
    },
    label: {
        marginTop: 5,
        textAlign: "center",

    }
});
