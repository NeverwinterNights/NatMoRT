import {NavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {ListingsNavigator} from "./ListingsNavigator";

import {CategoryType} from "../store/ListingEditReducer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {AccountNavigator} from "./AccountNavigator";
import {ListingType} from "../store/ListingsReducer";


export type AuthNavigatorStackParamList = {
    Welcome: undefined
    Login: undefined
    Register: undefined
}


export type ListingsNavigatorStackParamList = {
    Listings: undefined
    ListingDetails: { item: ListingType }
}


export type AccountNavigatorStackParamList = {
    AccountData: undefined
    Messages: undefined
}



export type RootTabParamList = {
    Main: NavigatorScreenParams<ListingsNavigatorStackParamList>;
    ListingEdit: undefined
    Account: NavigatorScreenParams<AccountNavigatorStackParamList>;
}



export type ListingDetailsScreenProps = NativeStackScreenProps<ListingsNavigatorStackParamList, 'ListingDetails'>;


export type NavigationTabType = NavigationProp<RootTabParamList>
// export type NavigationTabType = NavigationProp<ListingsNavigatorStackParamList>

export type NavigationUseType = NavigationProp<AuthNavigatorStackParamList>

