
const express = require('express');
const {
    get1vehiculeA,
    getAllvehiculeA
      
      } = require('../controllers/vehiculeController');
      const router = express.Router();

      router.get('/AllvehiculeA', getAllvehiculeA);
        router.get('/1vehiculeA/:id', get1vehiculeA);



module.exports = {
    routes: router
}