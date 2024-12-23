import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(process.env.CONNECTION_STRING, { dbName: "e-learning" })
    .then(() => {
      console.log(`db connected successfully `);
    });
};

export { connectDb };
