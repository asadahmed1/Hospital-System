var express = require('express');
router = express.Router()
const DoctorDispencorSaveController = require('../controllers/UserController');
const IssuedTokenController = require('../controllers/tokeIssuedController') 


 
router.post('/signup',DoctorDispencorSaveController.DoctoDispSaveData);
router.post('/ByMonth', IssuedTokenController.ByMonth)
router.post('/tokenIssuedData',IssuedTokenController.tokenIssuedData);
router.post('/DispancerID',IssuedTokenController.DispancerID); 
router.post('/FindByBetweenDate', IssuedTokenController.FindByBetweenDate) 
router.post('/Byyear', IssuedTokenController.Byyear)
router.get('/ByPtName',IssuedTokenController.ByPtName);


  
router.post('/accesspage',DoctorDispencorSaveController.verifyToken,DoctorDispencorSaveController.RollTypeLogin);




module.exports = router 