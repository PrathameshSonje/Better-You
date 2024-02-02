'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCourses } from "@/services/queries"
import Image from "next/image";

const Courses = () => {

    const coursesQuery = useCourses();

    if (coursesQuery.isPending) {
        return <span>Loading....</span>
    }

    if (coursesQuery.isError) {
        return <span>There is an Error...</span>
    }

    return <div className="p-4">
        <div className="grid grid-cols-12 gap-4">
            {
                coursesQuery.data?.map((item) => {
                    return <div key={item.title} className="col-span-6 md:col-span-4 lg:col-span-3">
                        <Card>
                            <div>
                                <Image
                                    src={item.image}
                                    alt="course thumbnail"
                                    width={600}
                                    height={135}
                                />
                            </div>
                            <div className="flex flex-col p-3">
                                <span className="font-bold text-lg">{item.title}</span>
                                <span className="text-zinc-700">{item.description}</span>
                            </div>

                            <div className="px-3 pb-3">
                                <p><span className="text-sm"></span><span className="font-semibold">{`\u20B9${item.price}`}</span></p>
                            </div>
                        </Card>
                    </div>
                })
            }
        </div>
    </div>
}

export default Courses