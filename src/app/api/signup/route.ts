import { connectToDatabase } from "@/lib/dbconfig";
import { User } from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

//connect to db

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const reqBody = await request.json()
        const { email, name } = reqBody;
        console.log(reqBody);
        //check for the user in the db
        const existingUser = await User.findOne({
            email
        });
        //if found return 
        if (existingUser) {
            throw new Error('Email already exists')
        }
        const newUser = new User({
            name: name,
            email: email,
        })
        await newUser.save();
        return NextResponse.json({ message: 'User created successfully' })

    } catch (error: any) {
        return NextResponse.json({error})
    }
}