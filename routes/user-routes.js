const express = require('express');
const {
    addUsers,
    getuser,
    // updateUserEmail,
    getAllusers,
    updateRole,
    getUserSinistre,
    addcompagnie,
    getdetailssinistre,
    recherche
 } = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
// router.put('/update/user/email/:id', updateUserEmail);
router.get('/getusers', getAllusers);
router.put('/updateR/:id', updateRole);
router.get('/getsinistre/:id', getUserSinistre);
router.get('/getdetailssinistre/:uid/:id', getdetailssinistre);
router.get('/recherche/:id/:date', recherche);

module.exports = {
    routes: router
}