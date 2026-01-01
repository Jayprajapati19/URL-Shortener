import dotenv from "dotenv"
import express from "express"
dotenv.config();
import filecabinet from "./src/config/mongo.config.js"
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", short_url)
app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)


app.listen(5000, () => {
    filecabinet();
    console.log("Server is Runnig on port http://localhost:5000");
    
})


// GET - rediration





