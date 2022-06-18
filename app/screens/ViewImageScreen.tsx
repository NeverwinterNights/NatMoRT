import {Image, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"


export const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name={"close"} size={35} color={"white"}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name={"trash-can-outline"} size={35} color={"white"}/>
            </View>
            <Image resizeMode={"contain"} style={styles.image} source={require("../assets/chair.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%",
    }
});
