import { Button } from "@mui/material"
import Link from "next/link"

const Appbar = () => {
    return (<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link 
            href='/'
            className="z-40 font-semibold">
                <span>
                    Better-You.
                </span>
            </Link>

            <div className="items-center space-x-4">
                <Link href='/singup'>
                    <Button variant="contained" className="bg-blue-500">
                        Signup
                    </Button>
                </Link>
            </div>
        </div>
    </nav>)
}

export default Appbar