import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const DB_URI = process.env.MONGODB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
