const express = require("express")
const router = express.Router()
const controllers=require('../controllers/routes')



router.get('/',controllers.renderHomePage)
 
 router.get('/about',controllers.renderAboutPage)

 router.post('/',controllers.getWeather)

 module.exports=router;