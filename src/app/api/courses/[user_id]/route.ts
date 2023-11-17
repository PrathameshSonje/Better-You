import { Course } from "@/models/courseModel";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";


export  async function GET(request: NextRequest) {
    // const session = await getServerSession()
    // if(!session) return NextResponse.json({error: "UNAUTHORIZED"})
    try {
        const url = request.url
        console.log(url);
        return NextResponse.json({url})
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}