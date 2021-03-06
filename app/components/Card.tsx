import { ImageSourcePropType, Pressable, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import {AppText} from "./AppText";
import {Image} from "react-native-expo-image-cache"

type CardPropsType = {
    title: string
    subTitle: string
    // image: ImageSourcePropType
    image: string
    onPress: () => void
    thumbnailUrl: string
}

export const Card = ({title, subTitle, image, onPress, thumbnailUrl}: CardPropsType) => {


    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                {/*<Image style={styles.image} source={{uri:image}}/>*/}
                <Image style={styles.image}  tint={"light"} preview={{uri:thumbnailUrl}} uri={image}/>
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
});
