const express = require('express');
const {addUsers,
    getuser,
    getAllusers,
    getUserSinistre,
    UsersinistreV,
    addcompagnie,
    getTemoin,
    getBlesse,
    getAssure,
    getAssurance,
    getConducteur,
    getCirconstance,
    getPhotos,
    getCroquis,
    getSignature,} = require('../controllers/userController');
const router = express.Router();

router.post('/adduser', addUsers);
router.post('/addcompagnie', addcompagnie);
router.get('/getuser/:id', getuser);
router.get('/getusers', getAllusers);
router.get('/getsinistre/:id', getUserSinistre);
router.get('/getVehicule/:id', UsersinistreV);
router.get('/getTemoin/:id', getTemoin);
router.get('/getBlesse/:id', getBlesse);
router.get('/getAssure/:id', getAssure);
router.get('/getAssurance/:id', getAssurance);
router.get('/getConducteur/:id', getConducteur);
router.get('/getCirconstance/:id', getCirconstance);
router.get('/getPhotos/:id', getPhotos);
router.get('/getCroquis/:id', getCroquis);
router.get('/getSignature/:id', getSignature);


module.exports = {
    routes: router
}