import jwt from "jsonwebtoken"

//method
const verifyToken = (req, res, next) => {

    //get authorization
    const authHeader = req.headers.authorization;

    //check token exists
    if(!authHeader || !authHeader.startsWith('Barer')){
        return res.json({success: false, message: "Token mssing!"})
    }

    //get token
    const token = authHeader.split('')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.log(err)
        res.json({success: false, message: "Error" })
    }

}

export default verifyToken;