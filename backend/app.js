import express from "express"
import {nanoid} from "nanoid"
import dotenv from "dotenv"
dotenv.config();
import filecabinet from "./src/config/mongo.config.js"


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/create", (req, res) => {
    const {url} = req.body
   
    
    res.send(nanoid(7));
})


app.listen(5000, () => {
    filecabinet();
    console.log("Server is Runnig on port http://localhost:5000");
    
})


// GET - rediration
// POST - create short URL





