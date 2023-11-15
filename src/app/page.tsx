import { Button, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen grainy">
      <div className="w-full flex justify-around items-center px-10">
        <div className="flex-col items-start h-full">
          <Typography variant="h2">Welcome to Better-You</Typography>
          <Typography variant="h6">A place where you can learn and grow</Typography>
          <Typography variant="h6">Be <span className="font-bold">Better</span> than Yesterday</Typography>
          <Button variant="contained" size="large" className="bg-blue-500 mt-8">Get started</Button>
          <Button variant="contained" size="large" className="bg-blue-500 mt-8 mx-6">Explore courses</Button>
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