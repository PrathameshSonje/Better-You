import mongoose from "mongoose";

interface Iadmin {
    _id: string
    email: string
    name: string
    image?: string
    courses?: [mongoose.Schema.Types.ObjectId]
    username?: string
    password?: string
}

const adminSchema = new mongoose.Schema<Iadmin>({
    name: String,
    email: {
        type: String,
        unique: true
    },
    image: String,
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

export const Admin = mongoose.model('Admin', adminSchema)

