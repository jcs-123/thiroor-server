const datas = require("../model/datamodel");




// get  data controller
exports.getUserProjectController = async (req, res)=>{
    console.log('inside projects controller');
    
    try {
        const data = await datas.find({ id: req.params.id.toString() }); // findOne instead of find
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//add new data
exports.addnewdata = async (req, res) => {
    console.log(`Inside Add Project Controller`);

  

    const { id, unit, house, name, mobile ,amount} = req.body;
console.log(name , unit , house , mobile , id ,amount );


    try {
            const newdata  = new datas({
                name, unit, house, mobile, id ,amount
            })
            await newdata.save()
            res.status(200).json(newdata)
        }

     catch (error) {
        res.status(401).json(`Project adding failed due to ${error}`)

    }


}
