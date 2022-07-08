import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
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



// export type NavigationTabType = NavigationProp<ListingsNavigatorStackParamList>

export type NavigationUseType = NavigationProp<AuthNavigatorStackParamList>


export type  RootMainParamList = {
    AuthNavigator:NavigatorScreenParams<AuthNavigatorStackParamList>
    AppNavigator:NavigatorScreenParams<RootTabParamList>
}


export type NavigationTabType = NavigationProp<RootMainParamList>
// const useAppNavigation = () => useNavigation<NavigationTabType>()
export const useAppNavigation = () => useNavigation<NavigationTabType>()








export type ListingDetailsScreenProps = NativeStackScreenProps<ListingsNavigatorStackParamList, 'ListingDetails'>;
