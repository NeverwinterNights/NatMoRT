import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import {Card} from "../components/Card";
import colors from "../config/colors";
import {useAppSelector} from "../store/store";

type ListingsScreenPropsType = {}


export const ListingsScreen = ({}: ListingsScreenPropsType) => {

    const listings = useAppSelector(state => state.listingsScreen)


    return (
        <Screen style={styles.container}>
            <FlatList data={listings} showsVerticalScrollIndicator={false}
                      keyExtractor={(listing) => listing.id.toString()} renderItem={({item}) =>
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
