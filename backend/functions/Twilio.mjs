// import { Twilio } from "twilio";
import twilio from 'twilio';
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const twilonum = process.env.Twilio_Num;

export const Sendmsg = async (req , res) => {
    var Fire = process.env.Fire;
    var Ambulance = process.env.Ambulance;
    var Police = process.env.Police; 


    const contact = [Fire, Ambulance, Police]
    const { phone, message } = req.body;

    try {
        const response = await client.messages.create({
            body: message,
            from: "+17402245415",
            to: "+917208563916"

        });
        
        res.json({ success: true, sid: response.sid });


    } catch (error) {
        res.status(500).json({ error: error.message });  //+16814333552

    }
}
