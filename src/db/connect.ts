import mongoose from "mongoose";
export async function connect() {
  try {
    if (mongoose.connection.readyState === 0) {
      // 0 means disconnected
      const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
      console.log("Connected to database");
    } else {
      console.log("Already connected to database");
      return mongoose.connection;
    }
  } catch (e) {
    console.log("Error while connecting to database", e);
  }
}
