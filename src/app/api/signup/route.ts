import connect from "@/lib/dbconfig";
import { User } from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

//connect to db
connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, password} = reqBody
        console.log(reqBody);
        //check for the user in the db
        const user = await User.findOne({
            username,
            password
        });
        //if found return 
        if(user) {
            return NextResponse.json({username : username, password : password})
        } else {
            return null
        }

        //if not create new user
        // const newUser = new User({
        //     username,
        //     password
        // })  

        // //pust the new user in the db
        // const savedUser = await newUser.save()

        // return NextResponse.json({message: "created" , savedUser})

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}