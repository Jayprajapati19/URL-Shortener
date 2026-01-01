import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js"


export const createShortUrl = async (req, res) => {
    console.log(req.body);
    
    const {url} = req.body
    const shortUrl = await  createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);

}

export const redirectFromShortUrl = async (req, res) => {
        const {id} = req.params;
        const url = await getShortUrl(id);
        
        if (!url) {
            return res.status(404).send("URL not found");
        }
        res.redirect(url.full_url);
    
}
