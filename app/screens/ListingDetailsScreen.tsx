import {Image, StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import colors from "../config/colors";
import {ListItem} from "../components/ListItem";
import {ListingDetailsScreenProps} from "../navigation/types";



export const ListingDetailsScreen = ({route}: ListingDetailsScreenProps) => {
    const {item} = route.params
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.images}/>
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
