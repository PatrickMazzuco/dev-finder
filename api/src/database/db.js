import mongoose from "mongoose";

const connectDB = async () => {
  const db = process.env.MONGO_URI;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
