import { Schema, model } from "mongoose";

interface Iuser {
    _id?: string
    name?: string
    email?: string
    image?: string
    username?: string
    password?: string
    isAdmin?: boolean
}

const userSchema = new Schema<Iuser>({
    name: String,
    email: {
        type: String,
     },
    username: {
       type: String,
       unique: true
    },
    image: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

export const User = model('User', userSchema)