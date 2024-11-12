// import mongoose, { connect } from "mongoose";

//  export const connectDB = async ()=>{
//     (await mongoose.connect('mongodb+srv://jiyahingrajiya12:01824@cluster0.pqi5y.mongodb.net/insta-cook')).then(()=>console.log("DB connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jiyahingrajiya12:01824@cluster0.pqi5y.mongodb.net/insta-cook', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
};
