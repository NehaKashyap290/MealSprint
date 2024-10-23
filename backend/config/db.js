import mongoose from "mongoose";
require("dotenv").config();

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("DB Connected"));
}
