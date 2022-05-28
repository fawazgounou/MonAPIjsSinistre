const express = require('express');
const {addUsers,
    getuser,
    getAllusers,
    getUserSinistre,
    UsersinistreV,
    addcompagnie} = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
router.get('/getusers', getAllusers);
router.get('/getsinistre/:id', getUserSinistre);
router.get('/getVehicule/:id', UsersinistreV);


module.exports = {
    routes: router
}