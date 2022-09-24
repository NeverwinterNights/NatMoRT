import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ListingType} from "./ListingsReducer";
import { UserInfoType} from "../../api/client";
import {LoginType, } from "../../types/types";





export const mainAPI = createApi({
    reducerPath: 'mainAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.100.229:8000/api'}),
    tagTypes: ['listings'],
    endpoints: (build) => ({
        fetchAllListings: build.query<ListingType[], void>({
            query: () => ({
                url: `/listings`,
            }),

            providesTags: result => ['listings']
        }),
        addListings:  build.mutation<any, any>({
                query: (listing) => ({
                    url: `/listings`,
                    method: 'POST',
                    body: listing
                }),
                invalidatesTags: ['listings']

            }),
        login:build.mutation<any, LoginType>({
            query: (data) => ({
                url: `/auth`,
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                responseHandler: "text",
              //  body: {email:data.email, password:data.password}
               body: data
            }),
        }),
        register:build.mutation<null,  UserInfoType>({
            query: (userInfo) => ({
                url: `/users`,
                method: 'POST',
                responseHandler: "text",
                body: userInfo
            }),
        }),
        registerToken:build.mutation<any,  string>({
            query: ( token) => ({
                url: `expoPushTokens`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "cache-control": "no-cache",
                    'X-Auth-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJNb3NoIiwiZW1haWwiOiJtb3NoQGRvbWFpbi5jb20iLCJpYXQiOjE2NjI2NzAyOTl9.HnRwdOeZ3UywmJyGGePH5iE8Vst0TePumLvUEPXsx0Y",
                },
                body: {token: token},
            })
        }),



        sendMessages: build.mutation<null, {message: string, listingId: number}>({
            query: ({message, listingId}) => ({
                url: `/messages`,
                method: 'POST',
                body: {message, listingId}
            }),
        }),

    })
})
