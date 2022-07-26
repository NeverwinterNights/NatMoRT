import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Screen} from "../components/Screen";
import {Card} from "../components/Card";
import colors from "../config/colors";
import {useAppDispatch, useAppSelector} from "../store/store";
import {useAppNavigation} from "../navigation/types";
import {getAllListingsTh, ListingType} from "../store/ListingsReducer";
import {AppText} from "../components/AppText";
import AppButton from "../components/AppButton";
import {ActivityIndic} from "../components/ActivityIndicator";


type ListingsScreenPropsType = {}


export const ListingsScreen = ({}: ListingsScreenPropsType) => {

    const listings: ListingType[] | undefined = useAppSelector(state => state.listingsScreen.listings)
    const isLoading: boolean = useAppSelector(state => state.appReducer.loading)

    const error: string = useAppSelector(state => state.listingsScreen.error)


    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getAllListingsTh())
    }, [])


    return (
        <Screen style={styles.container}>
            {!!error &&
            <View style={styles.error}>
                <AppText>Cant get data</AppText>
                <AppButton title={"Try Again"} onPress={() => dispatch(getAllListingsTh())}/>
            </View>
            }
            <ActivityIndic visible={isLoading}/>
            <FlatList data={listings} showsVerticalScrollIndicator={false}
                      keyExtractor={(listing) => listing.id.toString()} renderItem={({item}) =>
                <Card thumbnailUrl={item.images[0].thumbnailUrl}
                      title={item.title}
                      subTitle={"$" + item.price}
                      image={item.images[0].url}
                    // onPress={() => navigation.navigate("ListingDetails", {item})}/>
                      onPress={() => navigation.navigate("AppNavigator", {
                          screen: "Main",
                          params: {screen: "ListingDetails", params: {item}}
                      })}/>
            }/>
        </Screen>

    );
};


const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.light,
    },
    error: {
        alignItems: "center"
    }
});
