import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Seccessfully Connected to the Database.")
    } catch (error) {
        console.log("An error occur while connecting to the DataBase.", error)
    }
}

export default dbConnection
