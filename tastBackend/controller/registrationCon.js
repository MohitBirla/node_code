const { postDataTable, ImgData, getDataTable } = require("../model/registration");

const postDatacontroller = async(req,res)=>{
    // const images=req.file.filename;
    const {name,lastname}= req.body;
    const temp = {name,lastname}
    console.log(temp)
    const data =await postDataTable(temp);

    res.send(data)
}
const getDatacontroller = async(req,res)=>{
    const data =await getDataTable();
    res.send(data)
}
const postImage = async(req,res)=>{
    const images = req.file.filename;
    const tempImg = {images}
    const data =await ImgData(tempImg);
    res.send(data)

}
module.exports={postDatacontroller,postImage,getDatacontroller};