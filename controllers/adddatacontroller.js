const  adddatas= require("../model/adddatamodel");
//add new data
exports.addProjectController = async (req, res) => {
    console.log(`Inside Add Project Controller`);

  

    const { id, unit, house, name, mobile, receiptno, date, amount } = req.body;
console.log(name , unit , house , mobile , id , receiptno , date , amount);


    try {
            const newdata = new adddatas({
                name, unit, house, mobile, id , receiptno , date , amount
            })
            await newdata.save()
            res.status(200).json(newdata)
        }

     catch (error) {
        res.status(401).json(`Project adding failed due to ${error}`)

    }


}



//get data controller

exports.getnewdata = async (req, res)=>{
    console.log('inside new data controller')

    try {
        const allData = await adddatas.find(); 
        res.status(200).json(allData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
    }

//delete
    exports.removedata = async (req, res)=>{
        console.log(`Inside Remove User data Controller`);
    
        try {
            const {id} =req.params

            await adddatas.findByIdAndDelete({_id : id})
            res.status(200).json(`Project Deleted`)
        } catch (error) {
            res.status(401).json(error)
            
        }
    }
    