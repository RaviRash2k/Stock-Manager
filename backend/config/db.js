import mongoose from "mongoose";

export const conn = async () => {
    await mongoose.connect(process.env.MONGODB_URI + "/stock-manager")
    .then(() => {console.log("DB connected!")})
}