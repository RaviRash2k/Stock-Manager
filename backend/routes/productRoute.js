import express from 'express'
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/productController.js';
import verifyToken from '../middlewares/auth.js';
import multer from 'multer'

const productRoute = express.Router();

//Image store engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage})

productRoute.post('/add',upload.single("image"), verifyToken, addProduct)
productRoute.get('/products', verifyToken, getAllProducts)
productRoute.post('/update/:id', verifyToken, updateProduct)
productRoute.post('/delete/:id', verifyToken, deleteProduct)


export default productRoute;