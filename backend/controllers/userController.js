import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//generate jwt token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//Register user
const registerUser = async (req, res) => {

    const {name, email, password} = req.body;

    try{
        //email exists
        const exists = await userModel.findOne({email});

        if(exists){
            return res.json({success: false, message: "Email already have!"})
        }

        //valid email
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Enter valid email!"})
        }  

        //password strong
        if(!password || password.length > 8){
            return res.json({success: false, message: "password is not strobg!"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new userModel({
            name,
            email,
            password: hashPassword
        })

        const user = await newUser.save();
        res.json({success: true, data: user})

    }
    catch(err){
        console.log(err)
        res.json({success: false, message: "Error" })
    }
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        //user registered?
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "enter valid email!"})
        }

        //password match
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success: false, message: "enter valid password!"})
        }

        //create token
        const token = generateToken(user._id);
        return res.json({success: true, token})


    } catch (error) {
        
    }
}

export {registerUser, loginUser}