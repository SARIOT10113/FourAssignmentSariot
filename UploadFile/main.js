const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const PORT = 7000;


const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: './Upload', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
})
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 2000000 // 2000000 Bytes = 2 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a png and jpg Image'))
     }
   cb(undefined, true)
}
}) 
// For Single image upload
app.post('/upload', imageUpload.single('image'), (req, res) => {
     res.send(req.file)
}, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
})

app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})