import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";
import {ListingType} from "../app/store/ListingsReducer";


const prefix: string = "cache"
const expiryInMinutes = 10

const isExpired = (item: any) => {
    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    return now.diff(storedTime, "minutes") > expiryInMinutes
}


export const setDataToStore = async (key: string, value: ListingType[]) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

export const getDataToStore = async (key: string) => {
    try {
        const result = await AsyncStorage.getItem(prefix + key)
        if (result) {
            const item = JSON.parse(result)
            if (!item) return null

            if (isExpired(item)) {
                await AsyncStorage.removeItem(prefix + key)
                return null
            }
            return item.value
        }
    } catch (error) {
        console.log(error)
    }

}