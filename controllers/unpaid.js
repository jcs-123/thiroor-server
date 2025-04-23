const  adddatas= require("../model/adddatamodel");
const datas = require("../model/datamodel");



// get  data controller
exports.mergedata = async (req, res)=>{
    console.log('inside projects controller');
    
    try {
        const data1 = await datas.find();
        const data2 = await adddatas.find();
        const mergedData = [...data1, ...data2]; // Merge both collections
        res.json(mergedData);
      } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
      }
}
