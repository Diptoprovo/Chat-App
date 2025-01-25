import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"));

    await mongoose.connect(`mongodb+srv://devwrik1306:handabhonda@cluster0.agkac.mongodb.net/chat-app`)
    //await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
    console.log(process.env.MONGODB_URI);
}

export default connectDB;