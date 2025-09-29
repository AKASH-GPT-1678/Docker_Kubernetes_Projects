// import Emergency from "../modela/usersos.js";
import { Emergency } from "../modela/usersos.js";

export const Emservice = async (req, res) => {
    try {

        const { name, issue, contact, location } = req.body;


        if (!name | !issue | !contact | !location) {
            return res.status(400).json({ message: "All teh fields must ebe filled " });
        }

        const service = await Emergency.create({ name, issue, contact, location, status: "Pending" });

        res.status(201).json({ message: "The Service is being Creaed ", detail: service });





    } catch (error) {
        res.status(500).json({ message: "Your Service is Unable to be created", msg: error.message })


    }
}



export default async function Handler(req, res) {

    const apiKey = process.env.GOOGLE_API

    const {address} = req.query;
    
    if(!address){
        res.status(400).json({message : "Your aress annot be diffrent from others"})
    }

    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    const response  = await fetch(url);
    const final = await response.json()

    res.status(200).json({message : final})


}


