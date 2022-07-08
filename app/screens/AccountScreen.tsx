import React from "react";
import {FlatList, StyleSheet, View} from "react-native";


import colors from "../config/colors";

import {ListItem} from "../components/ListItem";
import {Screen} from "../components/Screen";
import {ListItemSeparator} from "../components/ListItemSeparator";
import {Icon} from "../components/Icon";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useAppNavigation} from "../navigation/types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {setUserAC, UserType} from "../store/AppReducer";
import {removeToken} from "../../storage/storage";

type menuItemType = {
    title: string
    icon: {
        name: keyof typeof MaterialCommunityIcons.glyphMap
        backgroundColor: string
    },
    targetScreen: "Messages"
}


const menuItems: menuItemType[] = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: "Messages"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages"
    },
];

function AccountScreen() {

    const user = useAppSelector(state => state.appReducer.user)
    const dispatch = useAppDispatch()


    const navigation = useAppNavigation()

    const logOutHandler = () => {
        dispatch(setUserAC({} as UserType))
        removeToken()
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate("AppNavigator", {
                                screen: "Account",
                                params: {screen: item.targetScreen}
                            })}
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
                onPress={logOutHandler}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
