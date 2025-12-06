import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from '../controllers/productController';

const productRoute = express.Router();

productRoute.post('/add', addProduct)
productRoute.get('/add', getOneProduct)
productRoute.get('/add', getAllProducts)
productRoute.post('/add', updateProduct)
productRoute.post('/add', deleteProduct)


export default productRoute;