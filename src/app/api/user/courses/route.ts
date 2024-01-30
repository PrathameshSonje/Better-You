import { connectToDatabase } from "@/lib/dbconfig";
import { Course } from "@/models/courseModel";
import { User } from "@/models/userModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

//route to get user's purchased courses
export async function GET() {
    try {
        await connectToDatabase();
        const headerList = headers();
        const user_id = headerList.get('user_id'); //replace with cookies
        const currUser = await User.findById(user_id);
        const coursesIDs = currUser.courses;
        const coursePromises = coursesIDs.map(async (id: any) => {
            return await Course.findById(id)
        })
        const courses = await Promise.all(coursePromises);
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json(error);
    }
}