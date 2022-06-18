import {Image, StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import colors from "../config/colors";
import {ListItem} from "../components/ListItem";

type ListingDetailsScreenPropsType = {}

export const ListingDetailsScreen = ({}: ListingDetailsScreenPropsType) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
                <View style={{marginVertical: 20}}>
                    <ListItem
                        image={require("./../assets/mosh.jpg")}
                        title={"Pavel Cardash"}
                        subTitle={"10 Listings"}

                    />
                </View>
            </View>
        </View>
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
