import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import colors from "../config/colors";


type ActivityIndicatorPropsType = {
    visible: boolean
    styleInd?: StyleProp<ViewStyle>
}

export const ActivityIndic = ({visible = false, styleInd}: ActivityIndicatorPropsType) => {
    if (!visible) return null
    return (
        <View style={[styles.container]}>
            <LottieView style={styleInd} loop autoPlay source={require("../assets/animation/load.json")}/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        backgroundColor: colors.white,
        opacity:0.6,
        position: "absolute",
        zIndex:1
    }
});
