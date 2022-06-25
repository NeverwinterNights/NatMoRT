import React from 'react';
import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {Card} from "../components/Card";
import colors from "../config/colors";
import {useAppSelector} from "../store/store";
import {NavigationTabType} from "../navigation/types";
import {useNavigation} from "@react-navigation/native";

type ListingsScreenPropsType = {}

export type ImagesData = {
    url: string,
    thumbnailUrl: string
}

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    images: ImageSourcePropType
    // images: ImagesData[]
    categoryId: number
    userId: number
    location: {
        latitude: number,
        longitude: number
    }
}


export const ListingsScreen = ({}: ListingsScreenPropsType) => {

    const listings = useAppSelector(state => state.listingsScreen)
    const useAppNavigation = () => useNavigation<NavigationTabType>()
    const navigation = useAppNavigation()
    return (
        <Screen style={styles.container}>
            <FlatList data={listings} showsVerticalScrollIndicator={false}
                      keyExtractor={(listing) => listing.id.toString()} renderItem={({item}) =>
                <Card title={item.title} subTitle={"$" + item.price} image={item.images}
                      // onPress={() => navigation.navigate("ListingDetails", {item})}/>
                      onPress={() => navigation.navigate("Main", {screen:"ListingDetails", params:{item}})}/>
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
