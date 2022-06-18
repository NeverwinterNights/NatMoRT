import {Animated, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View} from 'react-native';
import {AppText} from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React from "react";


type ListItemPropsType = {
    image?: ImageSourcePropType
    title: string
    subTitle?: string
    onPress?: () => void
    renderRightActions?: (
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
    ) => React.ReactNode;
    IconComponent?: React.ReactNode
}

export const ListItem = ({image, title, subTitle, onPress, IconComponent, renderRightActions}: ListItemPropsType) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.infoContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle &&   <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 10
    },
    infoContainer: {
        justifyContent: "center",

    },
    title: {
        marginBottom: 3,
    },
    subTitle: {
        color: colors.medium
    },
});
