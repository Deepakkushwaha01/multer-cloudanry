import express from "express";
import productController from "../Controller/ProductController.js";
import { upload } from "../Middleware/multer.js";

const router =express.Router();

router.get('/',upload.array('photo',12),productController)


export default router