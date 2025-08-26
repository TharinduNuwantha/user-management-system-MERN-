const express = require('express');
const router = express.Router();
const controller = require('./Controller');


router.get('/users',controller.getUsers);
router.get('/createuser',controller.addUser);
router.get('/updateeuser',controller.updateUser);
router.get('/deleteuser',controller.deleteUser);

module.exports = router;