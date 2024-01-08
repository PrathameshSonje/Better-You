//API to get get all the courses

import { Course } from "@/models/courseModel"

export const GET = async (req: Request) => {
    const courses = await Course.findOne();
    console.log(courses);
    
}
