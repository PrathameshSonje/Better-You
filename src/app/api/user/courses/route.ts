import { connectToDatabase } from "@/lib/dbconfig";
import { NextRequest, NextResponse } from "next/server";


connectToDatabase() // connect to mongodb

export async function GET(request: NextRequest)  {
    return NextResponse.json({name: "Prathamesh"})
}


/**
 * app.get('/courses', (req, res) => {
 *  //blah
 * })
 */