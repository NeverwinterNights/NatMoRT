import React from 'react';
import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {Card} from "../components/Card";
import colors from "../config/colors";

type ListingsScreenPropsType = {}


type ListingType = {
    id: number
    title: string
    price: number
    image: ImageSourcePropType
}


const listings:ListingType[] = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 600,
        image: require("../assets/couch.jpg")
    }
]

export const ListingsScreen = ({}: ListingsScreenPropsType) => {
    return (
        <Screen style={styles.container}>
            <FlatList data={listings} keyExtractor={(listing) => listing.id.toString()} renderItem={({item}) =>
                <Card title={item.title} subTitle={"$" + item.price} image={item.image}/>
            }/>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.light,
    }
});
