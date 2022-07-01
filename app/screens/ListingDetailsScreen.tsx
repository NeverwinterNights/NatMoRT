import {Image, StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import colors from "../config/colors";
import {ListItem} from "../components/ListItem";
import {ListingDetailsScreenProps, NavigationTabType} from "../navigation/types";
import GestureRecognizer from 'react-native-swipe-gestures'
import {useNavigation} from "@react-navigation/native";

export const ListingDetailsScreen = ({route}: ListingDetailsScreenProps) => {
    const {item} = route.params
    const useAppNavigation = () => useNavigation<NavigationTabType>()

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
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:item.images[0].url}}/>
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
                </View>
            </View>
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
