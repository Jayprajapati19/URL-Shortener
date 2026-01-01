import dotenv from "dotenv"
import express from "express"
import {nanoid} from "nanoid"
dotenv.config();
import filecabinet from "./src/config/mongo.config.js"
import short_url from "./src/routes/short_url.route.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/create", short_url);

// app.get("/:id", async (req, res) => {
//     const {id} = req.params;
//     const url = await urlSchema.findOne({short_url: id});
//     if (url) {
//          res.redirect(url.full_url);
//     } else {
//          res.status(404).json("URL not found");
//     }
// })


app.listen(5000, () => {
    filecabinet();
    console.log("Server is Runnig on port http://localhost:5000");
    
})


// GET - rediration





