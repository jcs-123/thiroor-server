const mongoose = require('mongoose')
const addprojectSchema = new mongoose.Schema({
  name: {
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
   mobile : {
        required : true,
        type : Number
    },
    id : {
        required : true,
        type : String

    },
    receiptno: {
        required : true,
        type : String

    },
   date: {
        required : true,
        type : String

    },
    amount: {
        required : true,
        type : String

    }
})

const adddatas = mongoose.model('adddatas', addprojectSchema)
module.exports = adddatas