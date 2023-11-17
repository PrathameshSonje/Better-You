import connect from "@/lib/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { error } from "console";
import { Course } from "@/models/courseModel";

connect()

export async function GET(request: NextRequest) {

    const session = await getServerSession()
    if(!session) return NextResponse.json({error: 'UNAUTHORIZED'})
    try {
        const reqBody = await request.json()
        const courses = await Course.find({published : true})
        return NextResponse.json({courses})
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}