import mongoose, { Schema, model } from "mongoose";

interface Icoures {
    _id: string
    admin_id: mongoose.Schema.Types.ObjectId
    title: string
    description: string
    image: string
    price: number
}

const courseSchema = new Schema<Icoures>({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const Course = model('Course', courseSchema)
