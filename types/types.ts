export type  UserType = {
    "email": string
    "iat": number
    "name": string
    "userId": number

}


export type LoginType = {
    email: string,
    password: string
}


export type LoginError = {
    error:string
}
