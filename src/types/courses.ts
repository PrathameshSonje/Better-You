import mongoose from "mongoose";

export interface courses {
    _id: mongoose.Schema.Types.ObjectId 
    title: string,
    description: string,
    image: string,
    price: number,
    admin_id: mongoose.Schema.Types.ObjectId 
}