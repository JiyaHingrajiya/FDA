import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";

import foodRouter from "./routes/foodRoute.js";
// import foodModels from '../models/foodModels.js';




//app config

const app = express()
const port = 4000

//middlewear
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints

app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://jiyahingrajiya12:01824@cluster0.pqi5y.mongodb.net/?