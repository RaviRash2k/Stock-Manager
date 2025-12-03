import express from 'express'
import cors from 'cors'
import { conn } from './config/db.js';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
conn();

//routes
app.get('/', (req, res) => {
    res.send("your API working!")
})

//listen
app.listen(PORT, () => {
    console.log("Server run on port : " + PORT)
})
