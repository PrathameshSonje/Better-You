import { Button, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen grainy">
      <div className="w-full flex justify-around items-center px-10">
        <div className="flex-col items-start h-full">
          <Typography variant="h1">Welcome to,</Typography>
          <Typography variant="h1" className="font-bold text-zinc-700">Better-You.</Typography> 
          <Typography variant="h5" className="mt-4">A place where you can learn and grow and</Typography>
          <Typography variant="h5">Be <span className="font-bold">Better</span> than Yesterday</Typography>
          <Button variant="contained" size="large" className="bg-blue-500 mt-5">Join for Free</Button>
          <Button variant= "outlined" size="large" className=" mt-5 ml-10">Explore courses</Button>
        </div>
        <div className="">
          <Image src="/board.jpg"
            width={700}
            height={500}
            quality={75} alt="a board" />
        </div>
      </div>
    </div>
  )
}

export default Home;