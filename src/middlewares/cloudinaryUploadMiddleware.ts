const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2

// Configure Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Create a Cloudinary storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'reactExemples', // Optional: Set the folder in Cloudinary where you want to store the uploads
    //  allowedFormats: ['jpg', 'jpeg', 'png', 'gif'], // Specify the allowed file formats
    //  transformation: [{ width: 500, height: 500, crop: 'limit' }], // Optional: Image transformations
  },
})

// Initialize Multer with Cloudinary storage
const multerUpload = multer({ storage: storage })

module.exports = multerUpload
