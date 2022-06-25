import {NavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {ListingsNavigator} from "./ListingsNavigator";
import {ListingType} from "../screens/ListingsScreen";
import {CategoryType} from "../store/ListingEditReducer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";


export type AuthNavigatorStackParamList = {
    Welcome: undefined
    Login: undefined
    Register: undefined
}


export type ListingsNavigatorStackParamList = {
    Listings: undefined
    ListingDetails: { item: ListingType }

}


export type RootTabParamList = {
    Main: NavigatorScreenParams<ListingsNavigatorStackParamList>;
    ListingEdit: undefined
    Account: undefined
}



export type ListingDetailsScreenProps = NativeStackScreenProps<ListingsNavigatorStackParamList, 'ListingDetails'>;


export type NavigationTabType = NavigationProp<RootTabParamList>
// export type NavigationTabType = NavigationProp<ListingsNavigatorStackParamList>

export type NavigationUseType = NavigationProp<AuthNavigatorStackParamList>

