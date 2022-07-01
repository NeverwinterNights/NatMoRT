import React, {useState} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {ListItem} from "../components/ListItem";
import {Screen} from "../components/Screen";
import {ListItemSeparator} from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListemDeleteAction";

type MessagesScreenPropsType = {}
export type MessageType = {
    id: number
    title: string
    description: string
    image: ImageSourcePropType
}

const initialMessages: MessageType[] = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    }
]

export const MessagesScreen = ({}: MessagesScreenPropsType) => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = (message: MessageType) => {
        setMessages(messages.filter((m: MessageType) => m.id !== message.id));
    };

    return (
        <View>
            <FlatList data={messages} keyExtractor={(item) => item.id.toString()} renderItem={({item}) =>
                <ListItem
                    onPress={() => console.log()}
                    image={item.image}
                    title={item.title}
                    renderRightActions={() => (
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                    )}
                    subTitle={item.description}
                />}
                      ItemSeparatorComponent={ListItemSeparator}
                      refreshing={refreshing}
                      onRefresh={() => {
                          setMessages([
                              {
                                  id: 1,
                                  title: "T1",
                                  description: "D1",
                                  image: require("../assets/mosh.jpg"),
                              },
                              {
                                  id: 2,
                                  title: "T2",
                                  description: "D2",
                                  image: require("../assets/mosh.jpg"),
                              },
                              {
                                  id: 3,
                                  title: "T3",
                                  description: "D3",
                                  image: require("../assets/mosh.jpg"),
                              },
                          ]);
                      }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});
