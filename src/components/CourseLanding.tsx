import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label";
import { categories } from "@/helpers/categories";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { StringSchemaDefinition } from "mongoose";

const formSchema = Z.object({
    title: Z.string().max(55, {
        message: "Title should be a max of 50 characters."
    }),
    subtitle: Z.string().max(120, {
        message: "Cannot be more than 120 characters."
    }),
    description: Z.string(),
    category: Z.string(),
    image: Z.string(),
})

const CourseLanding = () => {

    const form = useForm<Z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            subtitle: "",
            description: "",
            category: "",
            image: "",
        }
    })

    const onSubmit = (values: Z.infer<typeof formSchema>) => {
        console.log(values);
        console.log(selectedImage);
    }

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string)
            };
            reader.readAsDataURL(file);
        }
    }

    return <div>
        <Card>
            <CardHeader>
                <CardTitle>Course Landing Page</CardTitle>
                <CardDescription>As you complete this section, think about creating a compelling Course Landing Page that demonstrates why someone would want to enroll in your course.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Insert your course title."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Your title should be a mix of attention-grabbing, informative, and optimized for search
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="subtitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Subitle
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Insert your course Subtitle."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you&apos;ve covered during your course.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Insert your course Description."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Description should have minimum 200 words.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Category
                                    </FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger id="category">
                                                <SelectValue placeholder="Select"
                                                />
                                            </SelectTrigger>
                                            <SelectContent position="popper" >
                                                {categories.map((value) => {
                                                    return <div key={value}>
                                                        <SelectItem value={value}
                                                        >
                                                            {value}
                                                        </SelectItem>
                                                    </div>
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Category should relevent to course contents
                                    </FormDescription>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Image
                                    </FormLabel>
                                    <FormControl>
                                        <div className="flex space-x-4">
                                            <div className="w-1/2 border-2">
                                                {selectedImage ? (
                                                    <Image
                                                        src={selectedImage}
                                                        alt="Selected Graphic"
                                                        width={750}
                                                        height={422}
                                                    />
                                                ) : (
                                                    <Image
                                                        src="/placeholder.jpg"
                                                        alt="Placeholder Graphic"
                                                        width={750}
                                                        height={422}
                                                    />
                                                )}
                                            </div>
                                            <div className="w-1/2 space-y-2">
                                                <span className="text-gray-500">
                                                    Upload your course image here. Important guidelines: jpg, .jpeg,. gif, or .png. no text on the image.
                                                </span>
                                                <Input
                                                    type="file"
                                                    onChange={handleImageChange}
                                                />
                                                
                                            </div>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
}

export default CourseLanding;