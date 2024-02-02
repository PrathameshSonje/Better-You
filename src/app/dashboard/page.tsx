import { getServerSession } from "next-auth"

const Dashboard = async () => {
    const session = await getServerSession();
    
    return (
        <div className="">
            {session?.user?.name ? (
                <h1 className="text-5xl">
                    {`${session?.user?.name}' Courses`}
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