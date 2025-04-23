// import express
const express = require('express')

const datacontroller = require('./controllers/datacontroller');
const adddatacontroller = require('./controllers/adddatacontroller');
const unpaid = require('./controllers/unpaid')
//instance router
const router = new express.Router()



// get user projects
router.get('/user-data/:id',  datacontroller.getUserProjectController)



//add project
router.post('/add-project', adddatacontroller.addProjectController )

// get home projects
router.get('/new-data', adddatacontroller.getnewdata)


//add project
router.post('/new-add', datacontroller.addnewdata )



//delete user project
router.delete('/remove-userproject/:id' ,  adddatacontroller.removedata )


// get home projects
router.get('/merge-data', unpaid.mergedata)


// Export
module.exports = router