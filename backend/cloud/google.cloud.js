import {Storage} from '@google-cloud/storage'
import multer from 'multer';


export const Gstorage = new Storage( {
    keyFilename : 'maps-ai-453308-b08ded4a1295.json',
    projectId : 'maps-ai-453308'
});

//smart_city_123  //smart_city_123

export function Googlecloud(storage , bucket){
    this.storage = Gstorage,
    this.bucket = 'smart_city_123'
}


const storage = multer.memoryStorage()


export const Upload = multer({storage : storage})


export async function frontend(req, res) {
  try {

    const upload = Upload.single("file");
    console.log('Request Arrived')
    if(!file){
        res.status(400).json({message : " No files are being Upladoed "})
    }

 
    if(upload){
        res.status(200).json({message : "Correct File Uploaded bro "})
    }
    
    
  } catch (error) {
     res.status(400).json({message : error.message})
    
  }
}

