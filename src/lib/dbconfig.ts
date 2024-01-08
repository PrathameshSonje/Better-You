import mongoose from "mongoose"

let isConnnected: boolean = false;

const connect = async () => {
    if(!isConnnected) {
    try {
        await mongoose.connect(process.env.MONGODB_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDb Connected successfullyy');
            isConnnected = true    
        })
    } catch (error) {
        console.log("cannot connect to db")
        console.log(error)
    }} else {
        return
    }
}

export default connect