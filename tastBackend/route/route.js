

const express =  require('express');
const multer  = require('multer');
const { uploadsFile } = require('../multer');
const { postDatacontroller, postImage, getDatacontroller } = require('../controller/registrationCon');

const route = express.Router()


route.post("/postdata",postDatacontroller)
route.get("/getdata",getDatacontroller)
route.post("/postimg",uploadsFile,postImage)












module.exports=route
