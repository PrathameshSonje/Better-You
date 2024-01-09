import { Button } from "@/components/ui/button";
import { reasonsToStart } from "@/helpers/reasonsToStart";
import Image from "next/image";
import Link from "next/link";

const Teach = () => {
    return <div>
        <div className="flex justify-around items-center mx-12 lg:mx-24 p-8 mt-8 rounded-xl bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 ">
            <div className="text">
                <div className="font-serif text-5xl text-zinc-700 font-bold">
                    <p>Come Teach</p>
                    <p>with us</p>
                </div>
                <div className="mt-4">
                    <p>Become an instructor and change</p>
                    <p>lives - inlcuding your own</p>
                </div>
                <div className="mt-4">
                    <Link href='/courses/add'>
                        <Button size='xxl' >Get started</Button>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    src="/Art-3.png"
                    alt="a lady teching"
                    width={710}
                    height={443}
                    quality={100}
                />
            </div>
        </div>
        <div className="flex justify-center items-center p-4 mt-10">
            <span className="font-serif text-4xl text-zinc-700 font-bold">So many reasons to start</span>
        </div>
        <div className="mx-24 md:grid grid-cols-3 justify-items-around text-center pb-10">
            {reasonsToStart.map((reasons) => {
                return <div key={reasons.title} className="p-4 2xl:mx-24">
                    <Image
                        src={reasons.src}
                        alt="some art"
                        width={120}
                        height={120}
                        quality={100}
                        className="mx-auto"
                    />
                    <span className="text-xl font-bold">
                        {reasons.title}
                    </span>
                    <p>
                        {reasons.brief}
                    </p>
                </div>
            })}
        </div>
    </div>



}

export default Teach;