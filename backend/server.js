import express from 'express'
import cors from 'cors'
import { conn } from './config/db.js';
import 'dotenv/config'
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
conn();

//routes
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/images', express.static('uploads'))

//listen
app.listen(PORT, () => {
    console.log("Server run on port : " + PORT)
})
