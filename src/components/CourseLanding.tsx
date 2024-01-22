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
        console.log(values)
    }

    return <div>
        <Card>
            <CardHeader>
                <CardTitle>Course Landing Page</CardTitle>
                <CardDescription>As you complete this section, think about creating a compelling Course Landing Page that demonstrates why someone would want to enroll in your course.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} classname="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn"
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
                        
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
}

export default CourseLanding;