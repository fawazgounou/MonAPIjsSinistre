const express = require('express');
const {addUsers,
    getuser,
    getAllusers,
    getUserSinistre,
    addcompagnie,
 } = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
router.get('/getusers', getAllusers);
router.get('/getsinistre/:id', getUserSinistre);



module.exports = {
    routes: router
}