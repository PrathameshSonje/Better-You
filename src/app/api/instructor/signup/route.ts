import { connectToDatabase } from "@/lib/dbconfig";
import { Admin } from "@/models/adminModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    console.log('hi from routes');
    
    try {
        await connectToDatabase();
        const req = await request.json();
        const existingAdmin = await Admin.findOne({
            email: req.email
        });

        if (existingAdmin) {
            return NextResponse.json({
                msg: 'Admin already exists'
            }); 
        } else {
            const newAdmin = new Admin({
                name: req.name,
                email: req.email
            });
            await newAdmin.save();

            return NextResponse.json({
                msg: 'New Admin created successfully'
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: 'Internal Server Error'
        }, { status: 500 });  
    }
}
