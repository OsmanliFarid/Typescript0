import mongoose from "mongoose";

const ConnectDb = async () => {
  await mongoose.connect(process.env.DB_URI as any);
  console.log("ugurla elave olundu");
};
export default ConnectDb;
