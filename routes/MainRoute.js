var express = require('express');
router = express.Router()
const LoginController = require('../controllers/loginController') 

//login user (Atuntication)
router.post('/login', LoginController.RollTypeLogin);




module.exports = router 