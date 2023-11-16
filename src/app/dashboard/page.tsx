import { getServerSession } from "next-auth"

const Dashboard = async () => {
    const session = await getServerSession();
    console.log("hello");
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            {session?.user?.name ? (
                <h1 className="text-5xl">
                    {session?.user?.name}
                </h1>
            ) : (
                <h1 className="text-5xl">
                    pls log in
                </h1>
            )}
        </div>
    )
}

export default Dashboard