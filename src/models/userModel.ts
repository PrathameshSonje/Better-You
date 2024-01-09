import { Schema, model } from "mongoose";

interface Iuser {
    _id: string
    name: string
    email: string
    image?: string
    username?: string
    password?: string
    courses?: [Schema.Types.ObjectId]
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
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

export const User = model('User', userSchema)