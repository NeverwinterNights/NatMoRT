import axios, {AxiosResponse} from 'axios'
import {ListingType} from "../app/store/ListingsReducer";
import {LocationType} from "../app/screens/ListingEditScreen";
import {getToken} from "../storage/storage";


export type ListingDataType = {
    title: string
    price: string
    category: { value: string }
    images: []
    location: LocationType
    description: string
}

export type  UserInfoType = {
    name: string
    email: string
    password: string
}


const instance = axios.create({
    baseURL: "http://192.168.100.229:8000/api",
    timeout: 500,
    headers: {
        "Content-Type": "multipart/form-data",
        "cache-control": "no-cache",
    },
})


// instance.interceptors.request.use(async function (options) {
//     options.headers && options.headers['x-auth-token'] = await getToken()
//     return options;
// }, function (error) {
//     console.log('Request error: ', error);
//     return Promise.reject(error);
// });


const requestHandler = async (request: any) => {

    request.headers['x-auth-token'] = await getToken();
    return request;
};
// const errorHandler = (error: any) => {
//     return Promise.reject(error);
// };

instance.interceptors.request.use(
    (request) => requestHandler(request),
);


export const apiRequests = {
    getListings() {
        return instance.get<ListingType[]>("/listings")
    },
    addListings(listing: ListingDataType, onUploadProgress: (progress: number) => void) {
        const data = new FormData()
        data.append("title", listing.title)
        data.append("price", listing.price)
        data.append("categoryId", listing.category.value)
        data.append("description", listing.description)
        listing.images.forEach((image, index) =>
            data.append("images", {
                // @ts-ignore
                name: "image" + index,
                type: "image/jpeg",
                uri: image
            }))
        if (listing.location) {
            data.append("location", JSON.stringify(listing.location))
        }
        // return instance.post("/listings", data)
        return instance.post("/listings", data, {
            onUploadProgress: (progress) => {
                onUploadProgress(progress.loaded / progress.total)
            }
        })
    },
    login(email: string, password: string) {
        return instance.post("/auth", {email, password}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    register(userInfo: UserInfoType) {
        return instance.post<any, AxiosResponse<any>>("/users", userInfo, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    registerToken(pushToken: string) {
        return instance.post("expoPushTokens", {token: pushToken}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    sendMessages(message: string, listingId: number) {
        return instance.post("/messages", {message, listingId}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

