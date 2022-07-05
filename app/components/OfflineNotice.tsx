import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import {NetInfoState, useNetInfo} from "@react-native-community/netinfo";

type OfflineNoticePropsType = {}

export const OfflineNotice = ({}: OfflineNoticePropsType) => {
    const netInfo: NetInfoState = useNetInfo()
    if (netInfo.type !== "unknown" && !netInfo.isInternetReachable) {
        return (
            <View style={styles.container}>
                <AppText style={{color: colors.white}}>No Internet Connection</AppText>
            </View>
        )
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        width: "100%",
        position: "absolute",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        top: Constants.statusBarHeight
    }
});
