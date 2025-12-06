import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from '../controllers/productController.js';
import verifyToken from '../middlewares/auth.js';

const productRoute = express.Router();

// productRoute.post('/add', verifyToken, addProduct)
productRoute.post('/add', addProduct)
productRoute.get('/product/:id', verifyToken, getOneProduct)
productRoute.get('/products', verifyToken, getAllProducts)
productRoute.post('/update/:id', verifyToken, updateProduct)
productRoute.post('/delete/:id', verifyToken, deleteProduct)


export default productRoute;