import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: 'djcciu67h',
  api_key: '226472594187789',
  api_secret: 'bzhLRRj3WyVbGuFMMELAtwodUPU',
  secure: true,
});

const cloudinaryUploader = (file) => {

  try {
    return cloudinary.uploader.upload(file.path,(err,result)=>{},{
      folder: 'testing',               // this is for creating folder
      /* folder: 'testing/images', */ // this is for creating folder and subfolder in it
      resource_type: "auto",
      public_id: file.originalname 
    });

  } catch (error) {
   console.log(error) 
  }


}

export default cloudinaryUploader;