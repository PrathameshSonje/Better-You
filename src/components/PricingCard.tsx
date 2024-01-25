import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

import { Label } from "./ui/label"
import { Button } from "./ui/button"

const PricingCard = () => {
    return (
        <div>
            <Card>
                <CardHeader className="space-y-4">
                    <CardTitle>
                        Pricing
                    </CardTitle>
                    <CardDescription>
                        <span className="font-bold text-lg">Set a price for your course</span>
                        <br />
                        Please select the currency and the price tier for your course. If you&apos;d like to offer your course for free, it must have a total video length of less than 2 hours. Also, courses with practice tests can not be free.
                    </CardDescription>
                    <CardContent className="pl-0">
                        <div className="grid grid-cols-12 gap-6 pt-4">
                            <div className="col-span-2">
                                <Label htmlFor="currency">Currency</Label>
                                <Select>
                                    <SelectTrigger id="currency">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="col-span-4">
                                <Label htmlFor="price">Price</Label>
                                <Select>
                                    <SelectTrigger id="price">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="pt-6">
                            <Button size='xl'>Save</Button>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}

export default PricingCard