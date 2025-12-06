import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from '../controllers/productController';
import verifyToken from '../middlewares/auth';

const productRoute = express.Router();

productRoute.post('/add', verifyToken, addProduct)
productRoute.get('/add', verifyToken, getOneProduct)
productRoute.get('/add', verifyToken, getAllProducts)
productRoute.post('/add', verifyToken, updateProduct)
productRoute.post('/add', verifyToken, deleteProduct)


export default productRoute;