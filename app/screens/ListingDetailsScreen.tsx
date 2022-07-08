import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import colors from "../config/colors";
import {ListItem} from "../components/ListItem";
import {ListingDetailsScreenProps, useAppNavigation} from "../navigation/types";
import GestureRecognizer from 'react-native-swipe-gestures'
import {Image} from "react-native-expo-image-cache"
import ContactSellerForm from "../components/ContactSellerForm";

export const ListingDetailsScreen = ({route}: ListingDetailsScreenProps) => {
    const {item} = route.params

    const navigation = useAppNavigation()
    return (
        <GestureRecognizer
            style={{flex: 1}}
            config={{velocityThreshold: 0.01, directionalOffsetThreshold: 30}}
            onSwipe={(direction, state) => {
                if (direction === 'SWIPE_DOWN') {
                    navigation.goBack()
                }
            }}
        >
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={"position"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
            >
                <View style={styles.container}>
                    <Image style={styles.image} tint={"light"} preview={{uri: item.images[0].thumbnailUrl}}
                           uri={item.images[0].url}/>
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{item.title}</AppText>
                        <AppText style={styles.subTitle}>${item.price}</AppText>
                        <View style={{marginVertical: 20}}>
                            <ListItem
                                image={require("./../assets/mosh.jpg")}
                                title={"Pavel Cardash"}
                                subTitle={"10 Listings"}

                            />
                        </View>
                        <ContactSellerForm listing={item}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    container: {},
    image: {
        width: "100%",
        height: 300,
    },
    detailContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        fontWeight: "700",

    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    }
});
