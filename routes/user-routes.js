const express = require('express');
const {addUsers,
    getuser,
    getAllusers,
    addcompagnie} = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
router.get('/getusers', getAllusers);


module.exports = {
    routes: router
}