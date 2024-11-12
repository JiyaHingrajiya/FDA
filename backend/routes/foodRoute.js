import express from "express";
import { addFood } from "../controllers/foodcontroller.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.post("/add",addFood)





export default foodRouter;