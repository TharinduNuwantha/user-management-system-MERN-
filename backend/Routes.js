const express = require('express');
const router = express.Router();
const controller = require('./Controller');


router.get('/users',controller.getUsers);
router.post('/createuser',controller.addUser);
router.post('/updateeuser',controller.updateUser);
router.post('/deleteuser',controller.deleteUser);

module.exports = router;