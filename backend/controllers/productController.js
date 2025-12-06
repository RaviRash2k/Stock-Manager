import productModel from "../models/productModel.js"
import fs from 'fs'

//add new product
const addProduct = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name: req.body.name,
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


//get one product
const getOneProduct = async (req, res) => {

}


//get one product
const getAllProducts = async (req, res) => {
    
}


//get one product
const updateProduct = async (req, res) => {
    
}


//get one product
const deleteProduct = async (req, res) => {
    
}

export{addProduct, getOneProduct, getAllProducts, updateProduct, deleteProduct}