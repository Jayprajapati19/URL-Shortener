import dotenv from "dotenv"
import express from "express"
import {nanoid} from "nanoid"
dotenv.config();
import filecabinet from "./src/config/mongo.config.js"
import urlSchema from "./src/models/shorturl.model.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/create", (req, res) => {
    const {url} = req.body
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save();

    res.send(nanoid(7));
})

app.get("/:id", async (req, res) => {
    const {id} = req.params;
    const url = await urlSchema.findOne({short_url: id});
    if (url) {
         res.redirect(url.full_url);
    } else {
         res.status(404).json("URL not found");
    }
})


app.listen(5000, () => {
    filecabinet();
    console.log("Server is Runnig on port http://localhost:5000");
    
})


// GET - rediration





