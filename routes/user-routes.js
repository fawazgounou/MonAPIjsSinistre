const express = require('express');
const {addUsers,
    getuser,
    getAllusers,
    updateRole,
    getUserSinistre,
    addcompagnie,
    get1sinistre,
    recherche
 } = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
router.get('/getusers', getAllusers);
router.put('/updateR/:id', updateRole);
router.get('/getsinistre/:id', getUserSinistre);
router.get('/get1sinistre/:uid/:id', get1sinistre);
router.get('/recherche/:id/:date', recherche);



module.exports = {
    routes: router
}