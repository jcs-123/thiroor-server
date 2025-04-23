const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    
id : {
        required : true,
        type : String
    },
    unit : {
        required : true,
        type : String
    },
    house : {
        required : true,
        type : String
    },
    name: {
        required : true,
        type : String
    },
    mobile: {
        required : true,
        type : Number
    },amount:{
        required : true,
        type : Number
    }
})

const datas = mongoose.model('datas', dataSchema )
module.exports = datas