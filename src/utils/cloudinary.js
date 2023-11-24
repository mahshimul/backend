import { v2 as cloudinary  } from "cloudinary";
import { log } from "console";

import fs from "fs";


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadCloudinary = async (localFliePath) => {
    try {
    if (!localFliePath) return null
    //upload the flie on cloudinary
    const response = await cloudinary.uploader.upload(localFliePath,{
        resource_type: 'auto'

    })
    //file upload successfull
    console.log('file uploaded on cloudinary', response.url);
    return response
    } catch (error) {
        fs.unlinkSync(localFliePath) // remove the local temp file as upload oparation got failed
        return null;
    }

}  




export {uploadCloudinary}