import React from "react";
import {FlatList, StyleSheet, View} from "react-native";


import colors from "../config/colors";

import {ListItem} from "../components/ListItem";
import {Screen} from "../components/Screen";
import {ListItemSeparator} from "../components/ListItemSeparator";
import {Icon} from "../components/Icon";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type menuItemType = {
    title: string
    icon: {
        name: keyof typeof MaterialCommunityIcons.glyphMap
        backgroundColor: string
    },
    targetScreen: "MessagesScreen"
}


const menuItems: menuItemType[] = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: "MessagesScreen"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "MessagesScreen"
    },
];

function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
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
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
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
