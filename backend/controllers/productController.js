import productModel from "../models/productModel.js"
import fs from 'fs'

//add new product
const addProduct = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name: req.body.name,
        user: req.user.id,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity:req.body.quantity,
        image: image_filename
    })

    try {
        await product.save()
        res.json({success:true, message:"Product added!"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Faild to product add!"})
    }
}


//get all products
const getAllProducts = async (req, res) => {
    try {
        const data = await productModel.fi
    } catch (error) {
        
    }
}


//update product
const updateProduct = async (req, res) => {
    
}


//delete product
const deleteProduct = async (req, res) => {
    
}

export{addProduct, getAllProducts, updateProduct, deleteProduct}