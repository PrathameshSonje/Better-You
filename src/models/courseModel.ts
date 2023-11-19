import { Schema, model } from "mongoose";

interface Icoures {
    _id?: string
    user_id?: string
    title?: string
    description?: string
    image: string
    price: number
}

const courseSchema = new Schema<Icoures>({
    user_id: {
        type: String,
        unique: true
    },
    title: String,
    description: String,
    image: String,
    price: Number,
})

export const Course = model('Course', courseSchema)