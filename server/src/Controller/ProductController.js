import cloudinaryUploader from '../helper/cloudnary.js'

const productController = async(req,res) => {

const result =await cloudinaryUploader(req.files[0])
console.log(result)
console.log('File uploaded to Cloudinary:', result.secure_url);
res.status(201).send('working')
}

export default productController