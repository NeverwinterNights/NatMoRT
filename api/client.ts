import axios from 'axios'
import {ListingType} from "../app/store/ListingsReducer";
import {LocationType} from "../app/screens/ListingEditScreen";


export type ListingDataType = {
    title: string
    price: string
    category: { value: string }
    images: []
    location: LocationType
    description: string
}


const instance = axios.create({
    baseURL: "http://192.168.100.229:8000/api",
    timeout: 500,
    headers: {
        "Content-Type": "multipart/form-data",
        "cache-control": "no-cache",

    },
})


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

    }
}