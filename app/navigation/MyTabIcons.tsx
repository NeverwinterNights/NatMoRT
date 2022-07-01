import {Text, TouchableOpacity, View} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import {NewListingButton} from "./NewListingButton";
import { routes } from "./routes";




export const MyTabsIcon = ({navigation, insets, state, descriptors}: BottomTabBarProps) => {


    const tabName = (label: any) => {
        if (label === 'Main') {
            return "Main"
        }
        if (label === 'Account') {
            return "Account"
        }
    }

    return <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 60}}>
        {state.routes.map((route, index) => {
            const {options} = descriptors[route.key]
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined ? options.title : route.name
            const isFocused = state.index === index
            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                })
                if (!isFocused && !event.defaultPrevented) {
                    if (route.name === 'Main') {
                        navigation.navigate(route.name, {screen: 'Listings'})
                    }
                    if (route.name === 'Account') {
                        navigation.navigate(route.name, {screen: 'AccountData'})
                    }
                    if (route.name === 'ListingEdit') {
                        navigation.navigate(route.name)
                    }

                }
            }
            let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'home'
            if (route.name === 'Main') {
                iconName = 'home'
            }
            if (route.name === 'Account') {
                iconName = 'account'
            }
            if (route.name === 'ListingEdit') {
                iconName = 'plus-circle'
            }
            return <TouchableOpacity
                key={index}
                onPress={onPress}
                style={{alignItems: "center", flex: 1}}
            >
                {iconName !== 'plus-circle' ?
                    <MaterialCommunityIcons style={{marginBottom: 3, marginTop: 10}} name={iconName}
                                            color={isFocused ? colors.secondary : colors.primary}
                                            size={isFocused ? 20 : 20}/> :
                    <NewListingButton bgColor={isFocused ? colors.secondary : colors.primary}
                                      onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>
                }
                <Text style={{fontSize: 12}}>{tabName(label)}</Text>
            </TouchableOpacity>
        })}
    </View>
}