import {Pressable, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";


type  NewListingButtonPropsType = {
    onPress?: () => void
    bgColor: string
}

export const NewListingButton = ({onPress, bgColor}: NewListingButtonPropsType) => {
    return (
        <Pressable style={styles.pressable} onPress={onPress}>
            <View style={[styles.container, {backgroundColor: bgColor}]}>
                <MaterialCommunityIcons name={"plus-circle"} color={colors.white} size={35}/>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        bottom: 15
    },
    container: {
        // backgroundColor:bgColor,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 70 / 2,
        height: 70,
        width: 70,

    }
});
