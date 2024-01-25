import { connectToDatabase } from "@/lib/dbconfig";
import { Admin } from "@/models/adminModel";
import { Course } from "@/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        console.log(request);
        await connectToDatabase();
        console.log('here1');
        const req = await request.json();
        console.log('here2');
        const admin = await Admin.findById(req.admin_id)
        console.log('here3');
        if (!admin) {
            // Return a proper response to the client if admin is not found
            console.log('here4');
            return NextResponse.json({
                error: 'Admin not found'
            });
        }
        const courses = await Course.findById(req.admin_id)
        // Return the courses as a response
        console.log('here5');
        return NextResponse.json(courses);
    } catch (error) {
        console.error('Error retrieving courses by admin ID:', error);
        return NextResponse.json({
            error: 'Internal Server Error'
        }, { status: 500 });
    }
}
